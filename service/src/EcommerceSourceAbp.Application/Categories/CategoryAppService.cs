using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Categories.Dtos;
using System;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.Categories
{
    public class CategoryAppService : AppListService<Category, CreateUpdateCategoryDto, GetCategoryForViewDto, GetCategoryForEditDto, GetCategoryRequestInputDto>,
        ICategoryAppService
    {
        public CategoryAppService(IRepository<Category, Guid?> repository) : base(repository)
        {
        }

        protected override string GetPolicyName => string.Empty;

        protected override string GetListPolicyName => string.Empty;

        protected override string CreatePolicyName => string.Empty;

        protected override string UpdatePolicyName => string.Empty;

        protected override string DeletePolicyName => string.Empty;
    }
}
