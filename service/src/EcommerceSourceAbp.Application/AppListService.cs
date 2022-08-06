using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.BaseEntities;
using EcommerceSourceAbp.Enums;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp
{
    public abstract class AppListService<TEntity, TCreateUpdate, TViewOutput, TEditOutput, TGetInput> :
        AppBaseService<TEntity, TCreateUpdate, TViewOutput, TEditOutput, TGetInput>,
        IAppListService<TCreateUpdate, TViewOutput, TEditOutput, TGetInput>
        where TEntity : ListBaseEntity
        where TCreateUpdate : ListBaseDto
        where TViewOutput : ListBaseDto
        where TEditOutput : ListBaseDto
        where TGetInput : ListBaseGetRequestInput
    {
        protected AppListService(IRepository<TEntity, Guid?> repository) : base(repository)
        {
        }

        protected override async Task<IQueryable<TEntity>> CreateFilteredQueryAsync(TGetInput input)
        {
            if (!string.IsNullOrWhiteSpace(input.Filter))
            {
                input.Filter = input.Filter.ToLower();
            }

            return (await base.CreateFilteredQueryAsync(input))
                .WhereIf(!string.IsNullOrWhiteSpace(input.Filter),
                    x => x.Name.ToLower().Contains(input.Filter))
                .WhereIf(input.Status.HasValue, x => x.Status == input.Status);
        }

        protected override async Task<IQueryable<TEntity>> CreateFilteredQueryGetAll()
        {
            var query = await Repository.GetQueryableAsync();

            return  query.Where(x => x.Status == Status.Active).
                OrderBy(x => x.Name);
        }

        protected override async Task<TEntity> Create(TCreateUpdate input)
        {
            await CheckCreatePolicyAsync();

            var entity = MapToEntity(input);

            if ((await Repository.GetQueryableAsync()).Any(a => a.IsDeleted == false && !string.IsNullOrEmpty(a.Name) && a.Name == entity.Name))
            {
                throw new UserFriendlyException(L["NameAlreadyExists", L[entity.GetType().Name]]);
            }


            await Repository.InsertAsync(entity);

            await CurrentUnitOfWork.SaveChangesAsync();

            return entity;
        }

        protected override IQueryable<TEntity> ApplySorting(IQueryable<TEntity> query, TGetInput input)
        {
            if (input is ISortedResultRequest sortInput)
            {
                if (!sortInput.Sorting.IsNullOrWhiteSpace())
                {
                    return query.OrderBy(sortInput.Sorting);
                }
            }
            return query.OrderByDescending(x => x.CreationTime);
        }

        public async Task<List<TViewOutput>> GetByIds(List<Guid> ids)
        {
            var entities = await (await Repository.GetQueryableAsync())
                .Where(x => x.Id.HasValue && ids.Contains(x.Id.Value))
                .ToListAsync();
            return entities.Select(MapToViewOutput).ToList();
        }

        public virtual async Task ToggleStatus(Guid? id)
        {
            var item = await Repository.FirstOrDefaultAsync(x => x.Id == id);
            if (item == null)
            {
                return;
            }

            item.Status = item.Status == Status.Active ? Status.Inactive : Status.Active;
        }
    }
}
