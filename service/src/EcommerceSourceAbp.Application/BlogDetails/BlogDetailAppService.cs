using EcommerceSourceAbp.BlogDetails.Dtos;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Permissions;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.BlogDetails
{
    public class BlogDetailAppService : AppListService<BlogDetail, CreateUpdateBlogDetailDto, GetBlogDetailForViewDto, GetBlogDetailForUpdateDto, GetBlogDetailRequestInputDto>,
        IBlogDetailAppService
    {
        public BlogDetailAppService(IRepository<BlogDetail, Guid?> repository) : base(repository)
        {
        }
        protected override string GetPolicyName => EcommerceSourceAbpPermissions.BlogDetail.View;
        protected override string GetListPolicyName => EcommerceSourceAbpPermissions.BlogDetail.Default;
        protected override string CreatePolicyName => EcommerceSourceAbpPermissions.BlogDetail.Create;
        protected override string UpdatePolicyName => EcommerceSourceAbpPermissions.BlogDetail.Edit;
        protected override string DeletePolicyName => EcommerceSourceAbpPermissions.BlogDetail.Delete;


        protected override async Task<BlogDetail> FilteredForUpdate(CreateUpdateBlogDetailDto input)
        {
            return await (await Repository.GetQueryableAsync())
                .Include(a => a.ProductAffilates)
                .Include("ProductAffilates.ProductAffilateFile.FileStorage")
                .FirstOrDefaultAsync(a => a.Id == input.Id);
        }
        protected override async Task<BlogDetail> FilterForGet(Guid id)
        {
            return await (await Repository.GetQueryableAsync())
                .Include(a => a.ProductAffilates)
                .Include("ProductAffilates.ProductAffilateFile.FileStorage")
                .FirstOrDefaultAsync(a => a.Id == id);
        }
    }
}
