using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Newses.Dtos;
using EcommerceSourceAbp.Tags.Dtos;
using System.Collections.Generic;
using System.Linq;

namespace EcommerceSourceAbp.Newses
{
    public class NewsAutoMapperProfile : Profile
    {
        public NewsAutoMapperProfile()
        {
            CreateMap<CreateUpdateNewsDto, News>(MemberList.None);
            CreateMap<News, CreateUpdateNewsDto>(MemberList.None)
                .ForMember(dest => dest.Tags,
                    o => o.MapFrom(src => src.NewsTags != null ? src.NewsTags.Select(x => x.Tag.Name) : new List<string>()));
            CreateMap<News, GetNewsForViewDto>(MemberList.None);
            CreateMap<News, GetNewsForEditDto>(MemberList.None)
                .ForMember(dest => dest.Tags,
                    o => o.MapFrom(src => src.NewsTags != null ? src.NewsTags.Select(x => x.Tag.Name) : new List<string>()));
            CreateMap<News, NewsDto>(MemberList.None);
            CreateMap<Tag, TagDto>(MemberList.None);
            CreateMap<NewsTag, NewsTagDto>(MemberList.None);
        }
    }
}
