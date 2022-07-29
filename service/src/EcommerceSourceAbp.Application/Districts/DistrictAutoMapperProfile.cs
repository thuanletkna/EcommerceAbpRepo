using AutoMapper;
using EcommerceSourceAbp.Districts.Dtos;
using EcommerceSourceAbp.Entities;

namespace EcommerceSourceAbp.Districts
{
    public class DistrictAutoMapperProfile : Profile
    {
        public DistrictAutoMapperProfile()
        {
            CreateMap<CreateUpdateDistrictDto, District>(MemberList.None);
            CreateMap<District, GetDistrictDto>(MemberList.None);
            CreateMap<District, DistrictDto>(MemberList.None);
        }
    }
}
