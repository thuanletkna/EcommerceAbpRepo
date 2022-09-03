using AutoMapper;
using EcommerceSourceAbp.BlogDetails.Dtos;
using EcommerceSourceAbp.Entities;
using System.Collections.Generic;
using System.Linq;

namespace EcommerceSourceAbp.BlogDetails
{
    public class BlogDetailAutoMapperProfile : Profile
    {
        public BlogDetailAutoMapperProfile()
        {
            CreateMap<CreateUpdateBlogDetailDto, BlogDetail>(MemberList.None)
                .ForMember(dest => dest.ProductAffilates, opt => opt.Ignore())
                .AfterMap((src, dest, rc) => {
                    if (src.ProductAffilates != null && src.ProductAffilates.Any())
                    {
                        foreach (var item in src.ProductAffilates)
                        {
                            if (dest.ProductAffilates == null) dest.ProductAffilates = new List<ProductAffilate>();

                            if (dest.ProductAffilates.Any(x => x.Id == item.Id))
                            {
                                var OtherReportFinding = dest.ProductAffilates.FirstOrDefault(x => x.Id == item.Id);
                                rc.Mapper.Map(item, OtherReportFinding);
                            }
                            else
                            {
                                item.Id = null;
                                dest.ProductAffilates.Add(rc.Mapper.Map<ProductAffilate>(item));
                            }
                        }
                    }
                });
            CreateMap<BlogDetail, GetBlogDetailForUpdateDto>(MemberList.None);
            CreateMap<BlogDetail, GetBlogDetailForViewDto>(MemberList.None);
            CreateMap<BlogDetail, BlogDetailDto>(MemberList.None);
            CreateMap<BlogDetail, CreateUpdateBlogDetailDto>(MemberList.None);
        }
    }
}
