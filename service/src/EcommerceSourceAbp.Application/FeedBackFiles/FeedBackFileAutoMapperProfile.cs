using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.FeedBackFiles.Dtos;

namespace EcommerceSourceAbp.FeedBackFiles
{
    public class FeedBackFileAutoMapperProfile : Profile
    {
        public FeedBackFileAutoMapperProfile()
        {
            CreateMap<CreateUpdateFeedBackFileDto, FeedBackFile>(MemberList.None);
            CreateMap<FeedBackFile, GetFeedBackFileForEditDto>(MemberList.None);
            CreateMap<FeedBackFile, GetFeedBackFileForViewDto>(MemberList.None);
            CreateMap<FeedBackFile, FeedBackFileDto>(MemberList.None);
            CreateMap<FeedBackFile, CreateUpdateFeedBackFileDto>(MemberList.None);
        }
    }
}