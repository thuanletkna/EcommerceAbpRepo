using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.MetaSeos.Dtos;

namespace EcommerceSourceAbp.MetaSeos
{
    public class MetaSeoAutoMapperProfile : Profile
    {
        public MetaSeoAutoMapperProfile()
        {
            CreateMap<MetaSeo, MetaSeoDto>(MemberList.None);
        }
    }
}

