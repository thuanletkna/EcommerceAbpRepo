using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.ProductProperties.Dtos;

namespace EcommerceSourceAbp.SubProductProperties
{
    public class SubProductPropertyAutoMapperProfile : Profile
    {
        public SubProductPropertyAutoMapperProfile()
        {
            CreateMap<CreateUpdateSubProductPropertyDto, SubProductProperty>(MemberList.None);
            CreateMap<SubProductProperty, GetSubProductPropertyForUpdateDto>(MemberList.None);
            CreateMap<SubProductProperty, GetSubProductPropertyForViewDto>(MemberList.None);
            CreateMap<SubProductProperty, SubProductPropertyDto>(MemberList.None);
            CreateMap<SubProductProperty, CreateUpdateSubProductPropertyDto>(MemberList.None);
        }
    }
}
