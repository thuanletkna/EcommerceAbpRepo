using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Permissions;
using EcommerceSourceAbp.ProductProperties.Dtos;
using System;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.SubProductProperties
{
    public class SubProductPropertyAppService : AppListService<SubProductProperty, CreateUpdateSubProductPropertyDto, GetSubProductPropertyForViewDto, GetSubProductPropertyForUpdateDto, SubProductPropertyGetRequestInputDto>,
        ISubProductPropertyAppService
    {
        public SubProductPropertyAppService(IRepository<SubProductProperty, Guid?> repository) : base(repository)
        {
        }
        protected override string GetPolicyName => EcommerceSourceAbpPermissions.SubProductProperty.View;
        protected override string GetListPolicyName => EcommerceSourceAbpPermissions.SubProductProperty.Default;
        protected override string CreatePolicyName => EcommerceSourceAbpPermissions.SubProductProperty.Create;
        protected override string UpdatePolicyName => EcommerceSourceAbpPermissions.SubProductProperty.Edit;
        protected override string DeletePolicyName => EcommerceSourceAbpPermissions.SubProductProperty.Delete;

    }
}
