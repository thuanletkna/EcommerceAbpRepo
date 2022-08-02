using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.ProductFiles.Dtos;

namespace EcommerceSourceAbp.ProductFiles
{
    public class ProductFileAutoMapperProfile : Profile
    {
        public ProductFileAutoMapperProfile()
        {
            CreateMap<CreateUpdateProductFileDto, ProductFile>(MemberList.None);
            CreateMap<ProductFile, GetProductFileForEditDto>(MemberList.None);
            CreateMap<ProductFile, GetProductFileForViewDto>(MemberList.None);
            CreateMap<ProductFile, ProductFileDto>(MemberList.None);
            CreateMap<ProductFile, CreateUpdateProductFileDto>(MemberList.None);
        }
    }
}