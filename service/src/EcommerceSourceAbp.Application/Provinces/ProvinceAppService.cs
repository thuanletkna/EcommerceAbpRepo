using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Provinces.Dtos;
using System;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.Provinces
{
    public class ProvinceAppService :
        AppListService<Province, CreateUpdateProvinceDto, ProvinceDto, ProvinceDto, RequestProvinceInputDto>,
        IProvinceAppService
    {
        public ProvinceAppService(IRepository<Province, Guid?> repository
            )
            : base(repository)
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

        //protected override IQueryable<Province> CreateFilteredQuery(RequestProvinceInputDto input)
        //{
        //    return base.CreateFilteredQuery(input)
        //        .WhereIf(!string.IsNullOrWhiteSpace(input.Filter),
        //        x => x.Name.Contains(input.Filter));
        //}

        //[AllowAnonymous]
        //public override Task<List<ProvinceDto>> GetAll()
        //{
        //    return base.GetAll();
        //}
    }
}
