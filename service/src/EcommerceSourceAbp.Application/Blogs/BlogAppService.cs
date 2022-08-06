using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Permissions;
using EcommerceSourceAbp.Blogs.Dtos;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using EcommerceSourceAbp.Blogs;
using System.Collections.Generic;

namespace EcommerceSourceAbp.Blogs
{
    public class BlogAppService : AppListService<Blog, CreateUpdateBlogDto, GetBlogForViewDto, GetBlogForUpdateDto, GetBlogRequestInputDto>,
        IBlogAppService
    {
        private readonly IRepository<Blog> _blogRepository;
        private readonly IRepository<BlogDetail, Guid?> _blogDetailRepository;
        public BlogAppService(
            IRepository<Blog, Guid?> repository,
            IRepository<Blog, Guid?> blogRepository,
            IRepository<BlogDetail, Guid?> blogDetailRepository) : base(repository)
        {
            this._blogRepository = blogRepository;
            this._blogDetailRepository = blogDetailRepository;
        }
        protected override string GetPolicyName => EcommerceSourceAbpPermissions.Blog.View;
        protected override string GetListPolicyName => EcommerceSourceAbpPermissions.Blog.Default;
        protected override string CreatePolicyName => EcommerceSourceAbpPermissions.Blog.Create;
        protected override string UpdatePolicyName => EcommerceSourceAbpPermissions.Blog.Edit;
        protected override string DeletePolicyName => EcommerceSourceAbpPermissions.Blog.Delete;

        protected override async Task<Blog> FilteredForUpdate(CreateUpdateBlogDto input)
        {
            return await (await Repository.GetQueryableAsync())
                .Include(a => a.BlogDetails)
                .FirstOrDefaultAsync(a => a.Id == input.Id);
        }
        protected override async Task<Blog> FilterForGet(Guid id)
        {
            return await (await Repository.GetQueryableAsync())
                .Include(a => a.BlogDetails)
                .FirstOrDefaultAsync(a => a.Id == id);
        }

        protected override async Task<Blog> Update(CreateUpdateBlogDto input)
        {
            await CheckUpdatePolicyAsync();

            await CurrentUnitOfWork.SaveChangesAsync();

            var entity = await FilteredForUpdate(input);

            if (entity == null) throw NotFoundException;
            var listIdFinding = input.BlogDetails?.Select(x => x.Id).ToList() ?? new List<Guid?>();
            entity.BlogDetails.RemoveAll(x => !listIdFinding.Contains(x.Id));
            MapToEntity(input, entity);

            await CurrentUnitOfWork.SaveChangesAsync();

            return entity;
        }

    }
}
