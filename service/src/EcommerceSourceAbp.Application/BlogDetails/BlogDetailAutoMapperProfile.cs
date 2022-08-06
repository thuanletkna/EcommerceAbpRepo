using AutoMapper;
using EcommerceSourceAbp.BlogDetails.Dtos;
using EcommerceSourceAbp.Entities;

namespace EcommerceSourceAbp.BlogDetails
{
    public class BlogDetailAutoMapperProfile : Profile
    {
        public BlogDetailAutoMapperProfile()
        {
            CreateMap<CreateUpdateBlogDetailDto, BlogDetail>(MemberList.None);
            CreateMap<BlogDetail, GetBlogDetailForUpdateDto>(MemberList.None);
            CreateMap<BlogDetail, GetBlogDetailForViewDto>(MemberList.None);
            CreateMap<BlogDetail, BlogDetailDto>(MemberList.None);
            CreateMap<BlogDetail, CreateUpdateBlogDetailDto>(MemberList.None);
        }
    }
}
