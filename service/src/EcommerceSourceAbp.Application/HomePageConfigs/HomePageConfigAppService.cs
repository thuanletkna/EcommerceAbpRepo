using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Enums;
using EcommerceSourceAbp.HomePageConfigs.Dto;
using EcommerceSourceAbp.ImageSettings.Dto;
using EcommerceSourceAbp.Permissions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.HomePageConfigs
{
    public class HomePageConfigAppService : AppListService<HomePageConfig, CreateUpdateHomePageConfigDto, GetHomePageConfigForViewDto, GetHomePageConfigForEditDto, GetHomePageConfigRequestInputDto>,
        IHomePageConfigAppService
    {
        public HomePageConfigAppService(
            IRepository<HomePageConfig, Guid?> repository) : base(repository)
        {
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
        protected override async Task<HomePageConfig> FilteredForUpdate(CreateUpdateHomePageConfigDto input)
        {
            return await(await Repository.GetQueryableAsync())
                 .Include(a => a.ImageSetting)
                .Include("ImageSetting.FileStorage")
                .FirstOrDefaultAsync(a => a.Id == input.Id);
        }
        [AllowAnonymous]
        protected override async Task<HomePageConfig> FilterForGet(Guid id)
        {
            return await(await Repository.GetQueryableAsync())
               .Include(a => a.ImageSetting)
                .Include("ImageSetting.FileStorage")
               .FirstOrDefaultAsync(a => a.Id == id);
        }
        [AllowAnonymous]
        public async Task<IEnumerable<GetHomePageConfigForViewDto>> GetHomepageBanner()
        {
            var banner = new ImageSettingDto();
            var query = await (await Repository.GetQueryableAsync())
                .Include(a => a.ImageSetting)
                .Include("ImageSetting.FileStorage")
                .Where(x => x.Status == Status.Active).ToListAsync();
            var data = query.Select(a => ObjectMapper.Map<HomePageConfig, GetHomePageConfigForViewDto>(a)).ToList();
            foreach(var item in data)
            {
                item.ImageSetting = item.ImageSetting.Where(x => x.FileType == "BannerSlide").ToList();
            }
            //var result = data.Select(x => x.ImageSetting.Where(x=>x.FileType == "BannerSlide"));
            var result = data.Where(x => x.ImageSetting.Count>0);
            return result;
        }
        [AllowAnonymous]
        public async Task<IEnumerable<GetHomePageConfigForViewDto>> GetImageHomepageHeader()
        {
            var banner = new ImageSettingDto();
            var query = await (await Repository.GetQueryableAsync())
                .Include(a => a.ImageSetting)
                .Include("ImageSetting.FileStorage")
                .Where(x => x.Status == Status.Active).ToListAsync();
            var data = query.Select(a => ObjectMapper.Map<HomePageConfig, GetHomePageConfigForViewDto>(a)).ToList();
            foreach (var item in data)
            {
                item.ImageSetting = item.ImageSetting.Where(x => x.FileType == "BannerHeader").ToList();
            }
            //var result = data.Select(x => x.ImageSetting.Where(x=>x.FileType == "BannerSlide"));
            var result = data.Where(x => x.ImageSetting.Count > 0);
            return result;
        }

        [AllowAnonymous]
        protected override async Task<IQueryable<HomePageConfig>> CreateFilteredQueryAsync(GetHomePageConfigRequestInputDto input)
        {
            if (!string.IsNullOrWhiteSpace(input.Filter))
            {
                input.Filter = input.Filter.ToLower();
            }
            return (await base.CreateFilteredQueryAsync(input))
                .Include(a => a.ImageSetting)
                .Include("ImageSetting.FileStorage")
                .WhereIf(!string.IsNullOrWhiteSpace(input.Filter),
                    x => x.Name.ToLower().Contains(input.Filter))
                .WhereIf(input.Status.HasValue, x => x.Status == input.Status);
        }
        public override Task<PagedResultDto<GetHomePageConfigForViewDto>> GetListPublicPaged(GetHomePageConfigRequestInputDto input)
        {
            return base.GetListPublicPaged(input);
        }
    }
}

