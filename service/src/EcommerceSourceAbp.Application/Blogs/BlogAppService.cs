using EcommerceSourceAbp.Blogs.Dtos;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Enums;
using EcommerceSourceAbp.Permissions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;

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
                .Include(a => a.BlogFile)
                .Include("BlogFile.FileStorage")
                .FirstOrDefaultAsync(a => a.Id == input.Id);
        }
        protected override async Task<Blog> FilterForGet(Guid id)
        {
            return await (await Repository.GetQueryableAsync())
                .Include(a => a.BlogDetails)
                .Include(a => a.BlogFile)
                .Include("BlogFile.FileStorage")
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
            if (entity.BlogFile != null)
            {
                entity.BlogFile.Clear();
            }

            if (input.BlogFile?.Any() == true)
            {
                input.BlogFile.ForEach(item =>
                {
                    item.Id = null;
                });
            }
            MapToEntity(input, entity);

            await CurrentUnitOfWork.SaveChangesAsync();

            return entity;
        }


        protected override async Task<IQueryable<Blog>> CreateFilteredQueryAsync(GetBlogRequestInputDto input)
        {
            if (!string.IsNullOrWhiteSpace(input.Filter))
            {
                input.Filter = input.Filter.ToLower();
            }
            return (await base.CreateFilteredQueryAsync(input))
                .Include(a => a.BlogFile)
                .Include("BlogFile.FileStorage")
                //.FilterPermission(CurrentUser)
                //.Where(x => x.ItemDescription != "Contractors")
                .WhereIf(!string.IsNullOrWhiteSpace(input.Filter),
                    x => x.Name.ToLower().Contains(input.Filter))
                //.WhereIf(input.IsBlog.HasValue, x => x.IsBlog == input.IsBlog)
                .WhereIf(input.Status.HasValue, x => x.Status == input.Status);
        }

        public override Task<PagedResultDto<GetBlogForViewDto>> GetListPublicPaged(GetBlogRequestInputDto input)
        {
            return base.GetListPublicPaged(input);
        }

        [AllowAnonymous]
        public async Task<List<GetBlogForViewDto>> GetAllBlogByView()
        {
            var query = await Repository.GetQueryableAsync();
            var result = query.Where(x => x.Status == Status.Active && x.isHot == IsHot.True)
               .OrderBy(x => x.CreationTime);
            return result.Select(MapToViewOutput).ToList();
        }
    }
}
