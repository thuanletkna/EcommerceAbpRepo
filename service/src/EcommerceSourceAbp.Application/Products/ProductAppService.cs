using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Permissions;
using EcommerceSourceAbp.Products.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

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

    }
}
