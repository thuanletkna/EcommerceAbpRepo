using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.ProductProperties.Dtos;

namespace EcommerceSourceAbp.SubProductProperties
{
    public class SubProductPropertyAutoMapperProfile : Profile
    {
        public SubProductPropertyAutoMapperProfile()
        {
            CreateMap<CreateUpdateSubProductPropertyDto, ProductProperty>(MemberList.None);
            CreateMap<SubProductProperty, GetSubProductPropertyForUpdateDto>(MemberList.None);
            CreateMap<ProductProperty, GetSubProductPropertyForViewDto>(MemberList.None);
            CreateMap<ProductProperty, SubProductPropertyDto>(MemberList.None);
            CreateMap<ProductProperty, CreateUpdateSubProductPropertyDto>(MemberList.None);
        }
    }
}
