using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Permissions;
using EcommerceSourceAbp.Extensions;
using EcommerceSourceAbp.Products.Dtos;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Linq.Dynamic.Core;
using System;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Application.Dtos;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using EcommerceSourceAbp.ProductFiles.Dtos;
using EcommerceSourceAbp.FilesStorage;
using Volo.Abp.Domain.Entities;

namespace EcommerceSourceAbp.Products
{
    public class ProductAppService : AppListService<Product, CreateUpdateProductDto, GetProductForViewDto, GetProductForUpdateDto, GetProductRequestInputDto>,
        IProductAppService
    {
        private readonly IRepository<ProductFile, Guid?> _productFileRepository;
        private readonly IFileStorageAppService _fileStorageRepository;
        public ProductAppService(IRepository<Product, Guid?> repository, IRepository<ProductFile, Guid?> productFileRepository, IFileStorageAppService fileStorageRepository) : base(repository)
        {
            _productFileRepository = productFileRepository;
            _fileStorageRepository = fileStorageRepository;
        }
        protected override string GetPolicyName => EcommerceSourceAbpPermissions.Product.View;
        protected override string GetListPolicyName => EcommerceSourceAbpPermissions.Product.Default;
        protected override string CreatePolicyName => EcommerceSourceAbpPermissions.Product.Create;
        protected override string UpdatePolicyName => EcommerceSourceAbpPermissions.Product.Edit;
        protected override string DeletePolicyName => EcommerceSourceAbpPermissions.Product.Delete;

        [AllowAnonymous]
        protected override async Task<Product> FilteredForUpdate(CreateUpdateProductDto input)
        {
            return await (await Repository.GetQueryableAsync())
                .Include(a => a.ProductProperties)
                .Include(a => a.ProductFile)
                .Include("ProductFile.FileStorage")
                .FirstOrDefaultAsync(a => a.Id == input.Id);
        }
        [AllowAnonymous]
        protected override async Task<Product> FilterForGet(Guid id)
        {
            return await (await Repository.GetQueryableAsync())
                .Include(a => a.ProductProperties)
                .Include(a => a.ProductFile)
                .Include("ProductFile.FileStorage")
                .FirstOrDefaultAsync(a => a.Id == id);
        }

        [AllowAnonymous]
        protected override async Task<IQueryable<Product>> CreateFilteredQueryAsync(GetProductRequestInputDto input)
        {
            if (!string.IsNullOrWhiteSpace(input.Filter))
            {
                input.Filter = input.Filter.ToLower();
            }
            var a = (await base.CreateFilteredQueryAsync(input))
                .Include(a => a.ProductFile)
                .Include("ProductFile.FileStorage")
                //.FilterPermission(CurrentUser)
                //.Where(x => x.ItemDescription != "Contractors")
                .WhereIf(!string.IsNullOrWhiteSpace(input.Filter),
                    x => x.Name.ToLower().Contains(input.Filter) || x.Slug.ToLower().Contains(input.Filter))
                //.WhereIf(input.IsBlog.HasValue, x => x.IsBlog == input.IsBlog)
                .WhereIf(input.Status.HasValue, x => x.Status == input.Status);
                return a;
        }

        [AllowAnonymous]
        public override Task<PagedResultDto<GetProductForViewDto>> GetListPublicPaged(GetProductRequestInputDto input)
        {
            return base.GetListPublicPaged(input);
        }

        protected override async Task<Product> Create(CreateUpdateProductDto input)
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

            if (input.ProductFile?.Any() == false)
            {
                var fileIds = await _fileStorageRepository.Upload(input.ProductFile.FirstOrDefault().FileType);
                if (fileIds != null && fileIds.Any())
                {
                    input.ProductFile.FirstOrDefault().FileStorageId = fileIds[0];
                }
            }
            return await base.Create(input);
        }

        protected override async Task<Product> Update(CreateUpdateProductDto input)
        {
            await CurrentUnitOfWork.SaveChangesAsync();

            var entity = await FilteredForUpdate(input);

            if (entity == null) throw NotFoundException;
            if (entity.ProductFile != null)
            {
                entity.ProductFile.Clear();
            }

            if (input.ProductFile?.Any() == true)
            {
                input.ProductFile.ForEach(item =>
                {
                    item.Id = null;
                });
            }

            MapToEntity(input, entity);
            await CurrentUnitOfWork.SaveChangesAsync();

            return entity;
        }

        [AllowAnonymous]
        public async Task<List<GetProductFileForViewDto>> GetListFile(Guid id)
        {
            var data = await _productFileRepository.ToListAsync();
            var listFiles = data.Where(x => x.ProductId == id).Select(x=> new GetProductFileForViewDto()
            {
                ProducttId = x.ProductId,
                FileStorageId = x.FileStorageId,
                FileType = x.FileType,
                Id = x.Id
            }).ToList();
            return listFiles;
        }

        [AllowAnonymous]
        public async Task<GetProductForViewDto> GetBySlugPublic(string slug)
        {
            var news = (await Repository.GetQueryableAsync())
                .Include(x => x.Category)
                 .Include(a => a.ProductFile)
                .Include("ProductFile.FileStorage")
                .FirstOrDefaultAsync(x => x.Slug.ToLower() == slug.ToLower());

            if (news == null)
                throw new EntityNotFoundException(L["Error:NotFound"]);

            //if (_httpContextAccessor?.HttpContext != null &&
            //    _httpContextAccessor.HttpContext.Request.Headers.Keys.Contains("is-ssr") &&
            //    _httpContextAccessor.HttpContext.Request.Headers["is-ssr"].ToString() == "no")
            //{
            //    news.View++;
            //}

            var result = MapToViewOutput(await news);

            //var metaSeo = await _metaSeoRepository.Where(x => x.EntityId == result.Id).ToListAsync();
            //result.MetaSeo = metaSeo.Select(x => ObjectMapper.Map<MetaSeo, MetaSeoDto>(x)).ToList();

            return result;
        }

        [AllowAnonymous]
        public async Task<GetProductForViewDto> GetByIdPublic(Guid id)
        {
            var news = (await Repository.GetQueryableAsync())
                .Include(x => x.Category)
                .FirstOrDefaultAsync(x => x.Id == id);

            if (news == null)
                throw new EntityNotFoundException(L["Error:NotFound"]);

            //if (_httpContextAccessor?.HttpContext != null &&
            //    _httpContextAccessor.HttpContext.Request.Headers.Keys.Contains("is-ssr") &&
            //    _httpContextAccessor.HttpContext.Request.Headers["is-ssr"].ToString() == "no")
            //{
            //    news.View++;
            //}

            var result = MapToViewOutput(await news);

            //var metaSeo = await _metaSeoRepository.Where(x => x.EntityId == result.Id).ToListAsync();
            //result.MetaSeo = metaSeo.Select(x => ObjectMapper.Map<MetaSeo, MetaSeoDto>(x)).ToList();

            return result;
        }
    }
}
