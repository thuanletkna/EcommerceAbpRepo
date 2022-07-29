using Microsoft.AspNetCore.Authorization;
using EcommerceSourceAbp.BaseDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp
{
    [Authorize]
    public abstract class AppBaseService<TEntity, TPrimaryKey, TCreateUpdate, TViewOutput, TEditOutput, TGetInput>
        : EcommerceSourceAbpAppService, IAppBaseService<TPrimaryKey, TCreateUpdate, TViewOutput, TEditOutput, TGetInput>
        where TPrimaryKey : struct
        where TEntity : Entity<TPrimaryKey?>
        where TCreateUpdate : EntityDto<TPrimaryKey?>
        where TViewOutput : EntityDto<TPrimaryKey?>
        where TEditOutput : EntityDto<TPrimaryKey?>
        where TGetInput : BaseGetRequestInput
    {
        protected readonly IRepository<TEntity, TPrimaryKey?> Repository;

        protected abstract string GetPolicyName { get; }
        protected abstract string GetListPolicyName { get; }
        protected abstract string CreatePolicyName { get; }
        protected abstract string UpdatePolicyName { get; }
        protected abstract string DeletePolicyName { get; }

        protected AppBaseService(IRepository<TEntity, TPrimaryKey?> repository)
        {
            Repository = repository;
        }

        #region Check Policy

        protected virtual async Task CheckGetPolicyAsync()
        {
            await CheckPolicyAsync(GetPolicyName);
        }

        protected virtual async Task CheckGetListPolicyAsync()
        {
            await CheckPolicyAsync(GetListPolicyName);
        }

        protected virtual async Task CheckCreatePolicyAsync()
        {
            await CheckPolicyAsync(CreatePolicyName);
        }

        protected virtual async Task CheckUpdatePolicyAsync()
        {
            await CheckPolicyAsync(UpdatePolicyName);
        }

        protected virtual async Task CheckDeletePolicy()
        {
            await CheckPolicyAsync(DeletePolicyName);
        }

        #endregion Check Policy

        #region Filter Function

        protected virtual async Task<IQueryable<TEntity>> CreateFilteredQuery(TGetInput input)
        {
            return await Repository.GetQueryableAsync();
        }

        protected virtual async Task<IQueryable<TEntity>> CreateFilteredQueryGetAll()
        {
            return await Repository.GetQueryableAsync();
        }

        protected virtual async Task<TEntity> FilteredForUpdate(TCreateUpdate input)
        {
            return await Repository.GetAsync(input.Id);
        }

        protected virtual async Task<TEntity> FilterForGet(TPrimaryKey id)
        {
            return await Repository.GetAsync(id);
        }

        #endregion Filter Function

        #region Mapper

        protected virtual TViewOutput MapToViewOutput(TEntity entity)
        {
            return ObjectMapper.Map<TEntity, TViewOutput>(entity);
        }

        protected virtual TEditOutput MapToEditOutput(TEntity input)
        {
            return ObjectMapper.Map<TEntity, TEditOutput>(input);
        }

        protected virtual TEntity MapToEntity(TCreateUpdate input)
        {
            return ObjectMapper.Map<TCreateUpdate, TEntity>(input);
        }

        protected virtual void MapToEntity(TCreateUpdate createOrEditInput, TEntity entity)
        {
            ObjectMapper.Map<TCreateUpdate, TEntity>(createOrEditInput, entity);
        }

        #endregion Mapper

        #region Sorting and Paging

        protected virtual IQueryable<TEntity> ApplySorting(IQueryable<TEntity> query, TGetInput input)
        {
            if (input is ISortedResultRequest sortInput)
            {
                if (!sortInput.Sorting.IsNullOrWhiteSpace())
                {
                    return query.OrderBy(sortInput.Sorting);
                }
            }
            return query.OrderByDescending(x => x.Id);
        }

        protected virtual IQueryable<TEntity> ApplyPaging(IQueryable<TEntity> query, TGetInput input)
        {
            if (input is IPagedResultRequest pagedResultRequest)
            {
                return query.PageBy(pagedResultRequest);
            }
            return query;
        }

        #endregion Sorting and Paging

        #region create, update and select all

        protected virtual async Task<TEntity> Create(TCreateUpdate input)
        {
            await CheckCreatePolicyAsync();

            var entity = MapToEntity(input);

            await Repository.InsertAsync(entity);

            await CurrentUnitOfWork.SaveChangesAsync();

            return entity;
        }

        protected virtual async Task<TEntity> Update(TCreateUpdate input)
        {
            await CheckUpdatePolicyAsync();

            var entity = await FilteredForUpdate(input);

            if (entity == null) throw NotFoundException;

            MapToEntity(input, entity);

            await CurrentUnitOfWork.SaveChangesAsync();
            return entity;
        }

        protected virtual async Task<List<TViewOutput>> GetAllFromDatabase()
        {
            var query = await CreateFilteredQueryGetAll();
            var result = await AsyncExecuter.ToListAsync(query);

            return result.Select(MapToViewOutput).ToList();
        }

        #endregion create, update and select all

        #region Public methods

        public virtual async Task<PagedResultDto<TViewOutput>> GetListPaged(TGetInput input)
        {
            await CheckGetListPolicyAsync();

            var query = await CreateFilteredQuery(input);

            var totalCount = await AsyncExecuter.CountAsync(query);

            query = ApplySorting(query, input);
            query = ApplyPaging(query, input);

            var result = await AsyncExecuter.ToListAsync(query);

            return new PagedResultDto<TViewOutput>(totalCount, result.Select(MapToViewOutput).ToList());
        }

        public virtual async Task<TEditOutput> Get(TPrimaryKey id)
        {
            await CheckGetPolicyAsync();

            var result = await FilterForGet(id);

            if (result == null) throw NotFoundException;

            return MapToEditOutput(result);
        }

        public virtual async Task Delete(TPrimaryKey id)
        {
            await CheckDeletePolicy();
            await Repository.DeleteAsync(id);
        }

        public virtual async Task<TPrimaryKey?> Save(TCreateUpdate input)
        {
            TEntity entity;
            if (input.Id == null || $"{input.Id}" == "0")
            {
                entity = await Create(input);
            }
            else
            {
                entity = await Update(input);
            }

            return entity.Id;
        }

        public virtual async Task<List<TViewOutput>> GetAll()
        {
            return await GetAllFromDatabase();
        }

        #endregion Public methods
    }

    [Authorize]
    public abstract class AppBaseService<TEntity, TCreateUpdate, TViewOutput, TEditOutput, TGetInput> :
        AppBaseService<TEntity, Guid, TCreateUpdate, TViewOutput, TEditOutput, TGetInput>
        where TEntity : Entity<Guid?>
        where TCreateUpdate : EntityDto<Guid?>
        where TViewOutput : EntityDto<Guid?>
        where TEditOutput : EntityDto<Guid?>
        where TGetInput : BaseGetRequestInput
    {
        protected AppBaseService(IRepository<TEntity, Guid?> repository) : base(repository)
        {
        }
    }
}
