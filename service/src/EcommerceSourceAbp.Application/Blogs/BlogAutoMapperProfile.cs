using AutoMapper;
using EcommerceSourceAbp.Blogs.Dtos;
using EcommerceSourceAbp.Entities;
using System.Collections.Generic;
using System.Linq;

namespace EcommerceSourceAbp.Blogs
{
    public class BlogAutoMapperProfile : Profile
    {
        public BlogAutoMapperProfile()
        {
            CreateMap<CreateUpdateBlogDto, Blog>(MemberList.None)
                .ForMember(dest => dest.Category, opt => opt.Ignore())
                .ForMember(dest => dest.BlogDetails, opt => opt.Ignore())
                .AfterMap((src, dest, rc) => {
                    if (src.BlogDetails != null && src.BlogDetails.Any())
                    {
                        foreach (var item in src.BlogDetails)
                        {
                            if (dest.BlogDetails == null) dest.BlogDetails = new List<BlogDetail>();

                            if (dest.BlogDetails.Any(x => x.Id == item.Id))
                            {
                                var BlogDetails = dest.BlogDetails.FirstOrDefault(x => x.Id == item.Id);
                                rc.Mapper.Map(item, BlogDetails);
                            }
                            else
                            {
                                item.Id = null;
                                dest.BlogDetails.Add(rc.Mapper.Map<BlogDetail>(item));
                            }
                        }
                    }
                });
            CreateMap<Blog, GetBlogForUpdateDto>(MemberList.None);
            CreateMap<Blog, GetBlogForViewDto>(MemberList.None);
            CreateMap<Blog, BlogDto>(MemberList.None);
            CreateMap<Blog, CreateUpdateBlogDto>(MemberList.None);
        }
    }
}
