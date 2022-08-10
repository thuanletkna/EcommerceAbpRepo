using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Permissions;
using EcommerceSourceAbp.Products.Dtos;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Application.Dtos;
using Microsoft.AspNetCore.Authorization;

namespace EcommerceSourceAbp.Products
{
    public class ProductAppService : AppListService<Product, CreateUpdateProductDto, GetProductForViewDto, GetProductForUpdateDto, GetProductRequestInputDto>,
        IProductAppService
    {
        public ProductAppService(IRepository<Product, Guid?> repository) : base(repository)
        {
        }
        protected override string GetPolicyName => EcommerceSourceAbpPermissions.Product.View;
        protected override string GetListPolicyName => EcommerceSourceAbpPermissions.Product.Default;
        protected override string CreatePolicyName => EcommerceSourceAbpPermissions.Product.Create;
        protected override string UpdatePolicyName => EcommerceSourceAbpPermissions.Product.Edit;
        protected override string DeletePolicyName => EcommerceSourceAbpPermissions.Product.Delete;

        protected override async Task<Product> FilteredForUpdate(CreateUpdateProductDto input)
        {
            return await (await Repository.GetQueryableAsync())
                .Include(a => a.ProductProperties)
                .Include("ProductFile.FileStorage")
                .FirstOrDefaultAsync(a => a.Id == input.Id);
        }
        protected override async Task<Product> FilterForGet(Guid id)
        {
            return await (await Repository.GetQueryableAsync())
                .Include(a => a.ProductProperties)
                .Include("ProductFile.FileStorage")
                .FirstOrDefaultAsync(a => a.Id == id);
        }
        [AllowAnonymous]
        public override Task<PagedResultDto<GetProductForViewDto>> GetListPublicPaged(GetProductRequestInputDto input)
        {
            return base.GetListPublicPaged(input);
        }

    }
}
