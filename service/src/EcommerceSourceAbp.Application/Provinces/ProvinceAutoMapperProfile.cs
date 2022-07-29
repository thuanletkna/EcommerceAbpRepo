using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Provinces.Dtos;

namespace EcommerceSourceAbp.Provinces
{
    public class ProvinceAutoMapperProfile : Profile
    {
        public ProvinceAutoMapperProfile()
        {
            CreateMap<CreateUpdateProvinceDto, Province>(MemberList.None);
            CreateMap<Province, GetProvinceDto>(MemberList.None);
            CreateMap<Province, ProvinceDto>(MemberList.None);
        }
    }
}
