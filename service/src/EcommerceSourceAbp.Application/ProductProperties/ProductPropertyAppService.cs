using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Permissions;
using EcommerceSourceAbp.ProductProperties.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.ProductProperties
{
    public class ProductPropertyAppService : AppListService<ProductProperty, CreateUpdateProductPropertyDto, GetProductPropertyForViewDto, GetProductPropertyForUpdateDto, ProductPropertyGetRequestInputDto>,
        IProductPropertyAppService
    {
        public ProductPropertyAppService(IRepository<ProductProperty, Guid?> repository) : base(repository)
        {
        }
        protected override string GetPolicyName => EcommerceSourceAbpPermissions.ProductProperty.View;
        protected override string GetListPolicyName => EcommerceSourceAbpPermissions.ProductProperty.Default;
        protected override string CreatePolicyName => EcommerceSourceAbpPermissions.ProductProperty.Create;
        protected override string UpdatePolicyName => EcommerceSourceAbpPermissions.ProductProperty.Edit;
        protected override string DeletePolicyName => EcommerceSourceAbpPermissions.ProductProperty.Delete;

    }
}
