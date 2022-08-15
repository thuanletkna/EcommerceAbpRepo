using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.BlogFiles.Dtos;

namespace EcommerceSourceAbp.BlogFiles
{
    public class BlogFileAutoMapperProfile : Profile
    {
        public BlogFileAutoMapperProfile()
        {
            CreateMap<CreateUpdateBlogFileDto, BlogFile>(MemberList.None);
            CreateMap<BlogFile, GetBlogFileForEditDto>(MemberList.None);
            CreateMap<BlogFile, GetBlogFileForViewDto>(MemberList.None);
            CreateMap<BlogFile, BlogFileDto>(MemberList.None);
            CreateMap<BlogFile, CreateUpdateBlogFileDto>(MemberList.None);
        }
    }
}