using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.ProductAffilateFiles.Dtos;
using System;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.ProductAffilateFiles
{
    public class ProductAffilateFileAppService : AppBaseService<ProductAffilateFile, CreateUpdateProductAffilateFileDto, GetProductAffilateFileForViewDto, GetProductAffilateFileForEditDto, GetProductAffilateFileGetRequestInputDto>, IProductAffilateFileAppService
    {
        public ProductAffilateFileAppService(IRepository<ProductAffilateFile, Guid?> repository) : base(repository)
        {
        }

        protected override string GetPolicyName => String.Empty;

        protected override string GetListPolicyName => String.Empty;

        protected override string CreatePolicyName => String.Empty;

        protected override string UpdatePolicyName => String.Empty;

        protected override string DeletePolicyName => String.Empty;

    }
}