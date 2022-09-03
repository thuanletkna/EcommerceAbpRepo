using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.ProductAffilates.Dtos;

namespace EcommerceSourceAbp.ProductAffilates
{
    public class ProductAffilateAutoMapperProfile : Profile
    {
        public ProductAffilateAutoMapperProfile()
        {
            CreateMap<CreateUpdateProductAffilateDto, ProductAffilate>(MemberList.None);
            CreateMap<ProductAffilate, GetProductAffilateForEditDto>(MemberList.None);
            CreateMap<ProductAffilate, GetProductAffilateForViewDto>(MemberList.None);
            CreateMap<ProductAffilate, ProductAffilateDto>(MemberList.None);
            CreateMap<ProductAffilate, CreateUpdateProductAffilateDto>(MemberList.None);
        }
    }
}