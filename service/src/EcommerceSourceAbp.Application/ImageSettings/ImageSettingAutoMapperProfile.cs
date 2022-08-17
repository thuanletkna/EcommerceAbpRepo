using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.ImageSettings.Dto;

namespace EcommerceSourceAbp.ImageSettings
{
    public class ImageSettingAutoMapperProfile : Profile
    {
        public ImageSettingAutoMapperProfile()
        {
            CreateMap<CreateUpdateImageSettingDto, ImageSetting>(MemberList.None);
            CreateMap<ImageSetting, GetImageSettingForEditDto>(MemberList.None);
            CreateMap<ImageSetting, GetImageSettingForViewDto>(MemberList.None);
            CreateMap<ImageSetting, ImageSettingDto>(MemberList.None);
            CreateMap<ImageSetting, CreateUpdateImageSettingDto>(MemberList.None);
        }
    }
}
