using EcommerceSourceAbp.Blogs.Dtos;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Enums;
using EcommerceSourceAbp.Permissions;
using EcommerceSourceAbp.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;
using EcommerceSourceAbp.Products.Dtos;
using Volo.Abp.Domain.Entities;

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
                .Include("BlogDetails.ProductAffilates")
                .Include("BlogDetails.ProductAffilates.ProductAffilateFile.FileStorage")
                .Include(a => a.BlogFile)
                .Include(a => a.Category)
                .Include("BlogFile.FileStorage")
                .FirstOrDefaultAsync(a => a.Id == input.Id);
        }
        protected override async Task<Blog> FilterForGet(Guid id)
        {
            return await (await Repository.GetQueryableAsync())
                .Include(a => a.BlogDetails)
                .Include("BlogDetails.ProductAffilates")
                .Include("BlogDetails.ProductAffilates.ProductAffilateFile.FileStorage")
                .Include(a => a.BlogFile)
                .Include(a => a.Category)
                .Include("BlogFile.FileStorage")
                .FirstOrDefaultAsync(a => a.Id == id);
        }

        protected override async Task<Blog> Update(CreateUpdateBlogDto input)
        {
            await CheckUpdatePolicyAsync();

            await CurrentUnitOfWork.SaveChangesAsync();

            var entity = await FilteredForUpdate(input);

            if (entity == null) throw NotFoundException;

            var listIdBlogDetails = input.BlogDetails?.Select(x => x.Id).ToList() ?? new List<Guid?>();
            entity.BlogDetails.RemoveAll(x => !listIdBlogDetails.Contains(x.Id));

            if (entity.BlogFile != null)
            {
                entity.BlogFile.Clear();
            }

            if (input.BlogFile?.Any() == true)
            {
                input.BlogFile?.ForEach(item =>
                {
                    item.Id = null;
                });
            }
            foreach(var productEntity in entity.BlogDetails)
            {
                productEntity.ProductAffilates.Clear();
            }    
            foreach (var blog in input.BlogDetails)
            {
                foreach(var product in blog.ProductAffilates)
                {
                    if (product.ProductAffilateFile?.Any() == true)
                    {
                        product.ProductAffilateFile?.ForEach(items =>
                        {
                            items.Id = null;
                        });
                    }
                }    
            }    
            MapToEntity(input, entity);

            await CurrentUnitOfWork.SaveChangesAsync();

            return entity;
        }

        protected override async Task<Blog> Create(CreateUpdateBlogDto input)
        {
            input.Slug = input.Name.ConvertToUnSign().ToLower()
                .RemoveSpecialCharacters()
                .Replace(" ", "-");

            var index = 0;
            while (await Repository.AnyAsync(x => x.Slug == input.Slug))
            {
                index++;
                input.Slug = $"{input.Slug}-{index}";
            }
            return await base.Create(input);
        }

        protected override async Task<IQueryable<Blog>> CreateFilteredQueryAsync(GetBlogRequestInputDto input)
        {
            if (!string.IsNullOrWhiteSpace(input.Filter))
            {
                input.Filter = input.Filter.ToLower();
            }
            return (await base.CreateFilteredQueryAsync(input))
                .Include(a => a.Category)
                .WhereIf(input.CategoryId.HasValue, x => x.CategoryId == input.CategoryId)
                .Include(a => a.BlogFile)
                .Include("BlogFile.FileStorage")
                .Include(a => a.BlogDetails)
                .Include("BlogDetails.ProductAffilates")
                .Include("BlogDetails.ProductAffilates.ProductAffilateFile.FileStorage")
                 .WhereIf(!string.IsNullOrWhiteSpace(input.Filter),
                    x => x.Name.ToLower().Contains(input.Filter))
                 .WhereIf(!string.IsNullOrWhiteSpace(input.Slug),
                    x => x.Category.Slug.ToLower().Contains(input.Slug))
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

        [AllowAnonymous]
        public async Task<GetBlogForViewDto> GetBySlugPublic(string slug)
        {
            var news = (await Repository.GetQueryableAsync())
                .Include(x => x.Category)
                 .Include(a => a.BlogFile)
                .Include("BlogFile.FileStorage")
                .Include(a => a.BlogDetails)
                .Include("BlogDetails.ProductAffilates")
                .Include("BlogDetails.ProductAffilates.ProductAffilateFile.FileStorage")
                .FirstOrDefaultAsync(x => x.Slug.ToLower() == slug.ToLower());

            if (news == null)
                throw new EntityNotFoundException(L["Error:NotFound"]);

            var result = MapToViewOutput(await news);
            return result;
        }
    }
}
