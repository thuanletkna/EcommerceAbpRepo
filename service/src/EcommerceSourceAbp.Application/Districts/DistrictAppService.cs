using EcommerceSourceAbp.Districts.Dtos;
using EcommerceSourceAbp.Entities;
using System;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.Districts
{
    public class DistrictAppService :
        AppListService<District, CreateUpdateDistrictDto, DistrictDto, DistrictDto, RequestDistrictInputDto>,
        IDistrictAppService
    {

        public DistrictAppService(IRepository<District, Guid?> repository
           ) : base(repository)
        {
        }

        // protected override string GetPolicyName => MuradPermissions.Location.View;
        // protected override string GetListPolicyName => MuradPermissions.Location.Default;
        // protected override string CreatePolicyName => MuradPermissions.Location.Create;
        // protected override string UpdatePolicyName => MuradPermissions.Location.Edit;
        // protected override string DeletePolicyName => MuradPermissions.Location.Delete;


        protected override string GetPolicyName => string.Empty;
        protected override string GetListPolicyName => string.Empty;
        protected override string CreatePolicyName => string.Empty;
        protected override string UpdatePolicyName => string.Empty;
        protected override string DeletePolicyName => string.Empty;


    }
}
