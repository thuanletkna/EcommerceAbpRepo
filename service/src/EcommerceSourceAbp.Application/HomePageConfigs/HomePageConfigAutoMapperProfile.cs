using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.HomePageConfigs.Dto;

namespace EcommerceSourceAbp.HomePageConfigs
{
    public class HomePageConfigAutoMapperProfile : Profile
    {
        public HomePageConfigAutoMapperProfile()
        {
            CreateMap<CreateUpdateHomePageConfigDto, HomePageConfig>(MemberList.None);
            CreateMap<HomePageConfig, GetHomePageConfigForEditDto>(MemberList.None);
            CreateMap<HomePageConfig, GetHomePageConfigForViewDto>(MemberList.None);
            CreateMap<HomePageConfig, HomePageConfigDto>(MemberList.None);
            CreateMap<HomePageConfig, CreateUpdateHomePageConfigDto>(MemberList.None);
        }
    }
}