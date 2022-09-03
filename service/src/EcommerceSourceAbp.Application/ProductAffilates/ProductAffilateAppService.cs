using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.ProductAffilates.Dtos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.ProductAffilates
{
    public class ProductAffilateAppService : AppListService<ProductAffilate, CreateUpdateProductAffilateDto, GetProductAffilateForViewDto, GetProductAffilateForEditDto, GetProductAffilateRequestInputDto>,
        IProductAffilateAppService
    {
        public ProductAffilateAppService(IRepository<ProductAffilate, Guid?> repository) : base(repository)
        {
        }

        protected override string GetPolicyName => String.Empty;

        protected override string GetListPolicyName => String.Empty;

        protected override string CreatePolicyName => String.Empty;

        protected override string UpdatePolicyName => String.Empty;

        protected override string DeletePolicyName => String.Empty;

        protected override async Task<ProductAffilate> FilteredForUpdate(CreateUpdateProductAffilateDto input)
        {
            return await(await Repository.GetQueryableAsync())
                .Include(a => a.ProductAffilateFile)
                .Include("ProductAffilateFile.FileStorage")
                .FirstOrDefaultAsync(a => a.Id == input.Id);
        }


        protected override async Task<ProductAffilate> FilterForGet(Guid id)
        {
            return await(await Repository.GetQueryableAsync())
                .Include(a => a.ProductAffilateFile)
                .Include("ProductAffilateFile.FileStorage")
                .FirstOrDefaultAsync(a => a.Id == id);
        }
    }
}
