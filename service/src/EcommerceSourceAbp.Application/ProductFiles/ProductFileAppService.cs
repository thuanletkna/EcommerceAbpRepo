using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.ProductFiles.Dtos;
using System;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.ProductFiles
{
    public class ProductFileAppService : AppBaseService<ProductFile, CreateUpdateProductFileDto, GetProductFileForViewDto, GetProductFileForEditDto, GetProductFileRequestInputDto>, IProductFileAppService
    {
        private readonly IRepository<ProductFile, Guid?> _ProductRepository;
        public ProductFileAppService(IRepository<ProductFile, Guid?> repository) : base(repository)
        {
        }

        protected override string GetPolicyName => String.Empty;

        protected override string GetListPolicyName => String.Empty;

        protected override string CreatePolicyName => String.Empty;

        protected override string UpdatePolicyName => String.Empty;

        protected override string DeletePolicyName => String.Empty;
    }
}