using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Categories.Dtos;
using System;
using Volo.Abp.Domain.Repositories;
using EcommerceSourceAbp.Permissions;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using System.Collections.Generic;
using EcommerceSourceAbp.Enums;

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
        protected override async Task<IQueryable<Category>> CreateFilteredQueryAsync(GetCategoryRequestInputDto input)
        {
            if (!string.IsNullOrWhiteSpace(input.Filter))
            {
                input.Filter = input.Filter.ToLower();
            }
            var a= (await base.CreateFilteredQueryAsync(input))
                //.FilterPermission(CurrentUser)
                //.Where(x => x.ItemDescription != "Contractors")
                .WhereIf(!string.IsNullOrWhiteSpace(input.Filter),
                    x => x.Name.ToLower().Contains(input.Filter) || x.Slug.ToLower().Contains(input.Filter))
                //.WhereIf(input.IsBlog.HasValue, x => x.IsBlog == input.IsBlog)
                .WhereIf(input.IsBlog != null, x => x.IsBlog == input.IsBlog.Value)
                .WhereIf(input.Status.HasValue, x => x.Status == input.Status);
            return a;
        }

        
        [AllowAnonymous]
        public async Task<List<GetCategoryForViewDto>> GetAllPublic()
        {
            var query = await Repository.GetQueryableAsync();
            var result = query.Where(x => x.Status == Status.Active)
               .OrderBy(x => x.OrderIndex);
            return result.Select(MapToViewOutput).ToList();
        }
    }
}
