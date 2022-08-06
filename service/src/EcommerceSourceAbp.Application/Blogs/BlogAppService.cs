using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Permissions;
using EcommerceSourceAbp.Blogs.Dtos;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using EcommerceSourceAbp.Blogs;

namespace EcommerceSourceAbp.Blogs
{
    public class BlogAppService : AppListService<Blog, CreateUpdateBlogDto, GetBlogForViewDto, GetBlogForUpdateDto, GetBlogRequestInputDto>,
        IBlogAppService
    {
        public BlogAppService(IRepository<Blog, Guid?> repository) : base(repository)
        {
        }
        protected override string GetPolicyName => EcommerceSourceAbpPermissions.Blog.View;
        protected override string GetListPolicyName => EcommerceSourceAbpPermissions.Blog.Default;
        protected override string CreatePolicyName => EcommerceSourceAbpPermissions.Blog.Create;
        protected override string UpdatePolicyName => EcommerceSourceAbpPermissions.Blog.Edit;
        protected override string DeletePolicyName => EcommerceSourceAbpPermissions.Blog.Delete;

        //protected override async Task<Blog> FilteredForUpdate(CreateUpdateBlogDto input)
        //{
        //    return await (await Repository.GetQueryableAsync())
        //        .Include(a => a.BlogProperties)
        //        .Include("BlogFile.FileStorage")
        //        .FirstOrDefaultAsync(a => a.Id == input.Id);
        //}
        //protected override async Task<Blog> FilterForGet(Guid id)
        //{
        //    return await (await Repository.GetQueryableAsync())
        //        .Include(a => a.BlogProperties)
        //        .Include("BlogFile.FileStorage")
        //        .FirstOrDefaultAsync(a => a.Id == id);
        //}
    }
}
