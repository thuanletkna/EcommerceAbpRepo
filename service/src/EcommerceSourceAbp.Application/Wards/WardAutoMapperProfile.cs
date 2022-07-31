using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Wards.Dtos;

namespace EcommerceSourceAbp.Wards
{
    public class WardAutoMapperProfile : Profile
    {
        public WardAutoMapperProfile()
        {
            CreateMap<CreateUpdateWardDto, Ward>(MemberList.None);
            CreateMap<Ward, GetWardDto>(MemberList.None);
            CreateMap<Ward, WardDto>(MemberList.None);
        }
    }
}
