using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Enums;
using EcommerceSourceAbp.HomePageConfigs.Dto;
using EcommerceSourceAbp.Permissions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.HomePageConfigs
{
    public class HomePageConfigAppService : AppListService<HomePageConfig, CreateUpdateHomePageConfigDto, GetHomePageConfigForViewDto, GetHomePageConfigForEditDto, GetHomePageConfigRequestInputDto>,
        IHomePageConfigAppService
    {
        private readonly IRepository<HomePageConfig> _HomePageConfigRepository;
        public HomePageConfigAppService(
            IRepository<HomePageConfig, Guid?> repository,
            IRepository<HomePageConfig, Guid?> HomePageConfigRepository) : base(repository)
        {
            this._HomePageConfigRepository = HomePageConfigRepository;
        }
        protected override string GetPolicyName => EcommerceSourceAbpPermissions.HomePageConfig.View;
        protected override string GetListPolicyName => EcommerceSourceAbpPermissions.HomePageConfig.Default;
        protected override string CreatePolicyName => EcommerceSourceAbpPermissions.HomePageConfig.Create;
        protected override string UpdatePolicyName => EcommerceSourceAbpPermissions.HomePageConfig.Edit;
        protected override string DeletePolicyName => EcommerceSourceAbpPermissions.HomePageConfig.Delete;

        [AllowAnonymous]
        public async Task<List<GetHomePageConfigForViewDto>> GetAllPublic()
        {
            var query = await Repository.GetQueryableAsync();
            var result = query
                .Include(a => a.ImageSetting)
                .Include("ImageSetting.FileStorage")
                .Where(x => x.Status == Status.Active)
               .OrderBy(x => x.CreationTime);
            return result.Select(MapToViewOutput).ToList();
        }
    }
}

