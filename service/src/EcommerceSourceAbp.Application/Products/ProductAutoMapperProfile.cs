using AutoMapper;
using EcommerceSourceAbp.BlogDetails.Dtos;
using EcommerceSourceAbp.Blogs.Dtos;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Products.Dtos;

namespace EcommerceSourceAbp.Products
{
    public class ProductAutoMapperProfile : Profile
    {
        public ProductAutoMapperProfile()
        {
            CreateMap<CreateUpdateProductDto, Product>(MemberList.None);
            CreateMap<Product, GetProductForUpdateDto>(MemberList.None);
            CreateMap<Product, GetProductForViewDto>(MemberList.None);
            CreateMap<Product, ProductDto>(MemberList.None);
            CreateMap<Product, CreateUpdateProductDto>(MemberList.None);
        }
    }
}
