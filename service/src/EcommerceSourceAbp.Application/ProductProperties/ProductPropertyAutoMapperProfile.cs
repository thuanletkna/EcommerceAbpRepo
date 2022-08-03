using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.ProductProperties.Dtos;

namespace EcommerceSourceAbp.ProductProperties
{
    public class ProductPropertyAutoMapperProfile : Profile
    {
        public ProductPropertyAutoMapperProfile()
        {
            CreateMap<CreateUpdateProductPropertyDto, ProductProperty>(MemberList.None);
            CreateMap<ProductProperty, GetProductPropertyForUpdateDto>(MemberList.None);
            CreateMap<ProductProperty, GetProductPropertyForViewDto>(MemberList.None);
            CreateMap<ProductProperty, ProductPropertyDto>(MemberList.None);
            CreateMap<ProductProperty, CreateUpdateProductPropertyDto>(MemberList.None);
        }
    }
}
