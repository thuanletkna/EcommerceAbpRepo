using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Categories.Dtos;
using System;
using Volo.Abp.Domain.Repositories;
using EcommerceSourceAbp.Permissions;

namespace EcommerceSourceAbp.Categories
{
    public class CategoryAppService : AppListService<Category, CreateUpdateCategoryDto, GetCategoryForViewDto, GetCategoryForEditDto, GetCategoryRequestInputDto>,
        ICategoryAppService
    {
        public CategoryAppService(IRepository<Category, Guid?> repository) : base(repository)
        {
        }
        protected override string GetPolicyName => EcommerceSourceAbpPermissions.Category.View;
        protected override string GetListPolicyName => EcommerceSourceAbpPermissions.Category.Default;
        protected override string CreatePolicyName => EcommerceSourceAbpPermissions.Category.Create;
        protected override string UpdatePolicyName => EcommerceSourceAbpPermissions.Category.Edit;
        protected override string DeletePolicyName => EcommerceSourceAbpPermissions.Category.Delete;
        
    }
}
