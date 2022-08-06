using AutoMapper;
using EcommerceSourceAbp.Blogs.Dtos;
using EcommerceSourceAbp.Entities;

namespace EcommerceSourceAbp.Blogs
{
    public class BlogAutoMapperProfile : Profile
    {
        public BlogAutoMapperProfile()
        {
            CreateMap<CreateUpdateBlogDto, Blog>(MemberList.None);
            CreateMap<Blog, GetBlogForUpdateDto>(MemberList.None);
            CreateMap<Blog, GetBlogForViewDto>(MemberList.None);
            CreateMap<Blog, BlogDto>(MemberList.None);
            CreateMap<Blog, CreateUpdateBlogDto>(MemberList.None);
        }
    }
}
