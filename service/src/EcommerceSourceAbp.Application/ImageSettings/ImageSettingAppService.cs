using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.ImageSettings.Dto;
using EcommerceSourceAbp.Permissions;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.ImageSettings
{
    public class ImageSettingAppService : AppBaseService<ImageSetting, CreateUpdateImageSettingDto, GetImageSettingForViewDto, GetImageSettingForEditDto, GetImageSettingRequestInputDto>,
        IImageSettingAppService
    {
        private const string TypeLogo = "Logo";
        private const string TypeBanner = "Banner";
        private const string TypeTopAchiever = "TopAchiever";
        private const string TypeContact = "Contact";

        public ImageSettingAppService(IRepository<ImageSetting, Guid?> repository) : base(repository)
        {
            
        }
        protected override string GetPolicyName => EcommerceSourceAbpPermissions.ImageSetting.View;
        protected override string GetListPolicyName => EcommerceSourceAbpPermissions.ImageSetting.Default;
        protected override string CreatePolicyName => EcommerceSourceAbpPermissions.ImageSetting.Create;
        protected override string UpdatePolicyName => EcommerceSourceAbpPermissions.ImageSetting.Edit;
        protected override string DeletePolicyName => EcommerceSourceAbpPermissions.ImageSetting.Delete;

        

    }
}

