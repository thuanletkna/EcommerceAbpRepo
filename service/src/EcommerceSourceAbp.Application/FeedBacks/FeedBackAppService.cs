using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.FeedBacks.Dtos;
using EcommerceSourceAbp.Permissions;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.FeedBacks
{
    public class FeedBackAppService :
        AppListService<Feedback, CreateUpdateFeedBackDto, GetFeedBackForEditDto, GetFeedBackForViewDto, GetFeedBackRequestInputDto>,
        IFeedBackAppService
    {

        public FeedBackAppService(IRepository<Feedback, Guid?> repository
           ) : base(repository)
        {
        }

        protected override string GetPolicyName => EcommerceSourceAbpPermissions.Feedback.View;
        protected override string GetListPolicyName => EcommerceSourceAbpPermissions.Feedback.Default;
        protected override string CreatePolicyName => EcommerceSourceAbpPermissions.Feedback.Create;
        protected override string UpdatePolicyName => EcommerceSourceAbpPermissions.Feedback.Edit;
        protected override string DeletePolicyName => EcommerceSourceAbpPermissions.Feedback.Delete;


        protected override async Task<Feedback> FilteredForUpdate(CreateUpdateFeedBackDto input)
        {
            return await(await Repository.GetQueryableAsync())
                .Include(a => a.FeedBackFiles)
                .Include("FeedBackFiles.FileStorage")
                .FirstOrDefaultAsync(a => a.Id == input.Id);
        }

        protected override async Task<Feedback> FilterForGet(Guid id)
        {
            return await(await Repository.GetQueryableAsync())
                .Include(a => a.FeedBackFiles)
                .Include("FeedBackFiles.FileStorage")
               .FirstOrDefaultAsync(a => a.Id == id);
        }

        protected override async Task<IQueryable<Feedback>> CreateFilteredQueryAsync(GetFeedBackRequestInputDto input)
        {
            if (!string.IsNullOrWhiteSpace(input.Filter))
            {
                input.Filter = input.Filter.ToLower();
            }
            return (await base.CreateFilteredQueryAsync(input))
                .Include(a => a.FeedBackFiles)
                .Include("FeedBackFiles.FileStorage");
        }

        protected override async Task<Feedback> Update(CreateUpdateFeedBackDto input)
        {
            await CheckUpdatePolicyAsync();

            await CurrentUnitOfWork.SaveChangesAsync();

            var entity = await FilteredForUpdate(input);

            if (entity == null) throw NotFoundException;

            if (entity.FeedBackFiles != null)
            {
                entity.FeedBackFiles.Clear();
            }

            if (input.FeedBackFiles?.Any() == true)
            {
                input.FeedBackFiles?.ForEach(item =>
                {
                    item.Id = null;
                });
            }
            
            MapToEntity(input, entity);

            await CurrentUnitOfWork.SaveChangesAsync();

            return entity;
        }
        
    }
}