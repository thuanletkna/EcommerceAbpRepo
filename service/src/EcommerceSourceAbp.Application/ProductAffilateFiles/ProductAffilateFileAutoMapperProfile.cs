using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.ProductAffilateFiles.Dtos;

namespace EcommerceSourceAbp.ProductAffilateFiles
{
    public class ProductAffilateFileAutoMapperProfile : Profile
    {
        public ProductAffilateFileAutoMapperProfile()
        {
            CreateMap<CreateUpdateProductAffilateFileDto, ProductAffilateFile>(MemberList.None);
            CreateMap<ProductAffilateFile, GetProductAffilateFileForEditDto>(MemberList.None);
            CreateMap<ProductAffilateFile, GetProductAffilateFileForViewDto>(MemberList.None);
            CreateMap<ProductAffilateFile, ProductAffilateFileDto>(MemberList.None);
            CreateMap<ProductAffilateFile, CreateUpdateProductAffilateFileDto>(MemberList.None);
        }
    }
}
