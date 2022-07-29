using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Tags.Dtos;

namespace EcommerceSourceAbp.Tags
{
    public class TagAutoMapperProfile : Profile
    {
        public TagAutoMapperProfile()
        {
            CreateMap<CreateUpdateTagDto, Tag>(MemberList.None);
            CreateMap<Tag, GetTagForEditDto>(MemberList.None);
            CreateMap<Tag, GetTagForViewDto>(MemberList.None);
            CreateMap<Tag, TagDto>(MemberList.None);
            CreateMap<Tag, CreateUpdateTagDto>(MemberList.None);
        }
    }
}