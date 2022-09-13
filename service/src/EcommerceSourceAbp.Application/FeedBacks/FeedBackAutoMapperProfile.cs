using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.FeedBacks.Dtos;

namespace EcommerceSourceAbp.FeedBacks
{
    internal class FeedBackAutoMapperProfile : Profile
    {
        public FeedBackAutoMapperProfile()
        {
            CreateMap<CreateUpdateFeedBackDto, Feedback>(MemberList.None);
            CreateMap<Feedback, GetFeedBackForEditDto>(MemberList.None);
            CreateMap<Feedback, GetFeedBackForViewDto>(MemberList.None);
            CreateMap<Feedback, FeedBackDto>(MemberList.None);
            CreateMap<Feedback, CreateUpdateFeedBackDto>(MemberList.None);
        }
    }
}
