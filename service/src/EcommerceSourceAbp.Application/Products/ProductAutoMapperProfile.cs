using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Products.Dtos;

namespace EcommerceSourceAbp.Products
{
    public class ProductAutoMapperProfile : Profile
    {
        public ProductAutoMapperProfile()
        {
            CreateMap<CreateUpdateProductDto, Product>(MemberList.None)
                .ForMember(dest => dest.Category, opt => opt.Ignore());
            CreateMap<Product, GetProductForUpdateDto>(MemberList.None);
            CreateMap<Product, GetProductForViewDto>(MemberList.None);
            CreateMap<Product, ProductDto>(MemberList.None);
            CreateMap<Product, CreateUpdateProductDto>(MemberList.None);
        }
    }
}
