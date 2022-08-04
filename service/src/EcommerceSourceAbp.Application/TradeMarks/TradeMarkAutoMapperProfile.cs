using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.TradeMarks.Dtos;

namespace EcommerceSourceAbp.TradeMarks
{
    public class TradeMarkAutoMapperProfile : Profile
    {
        public TradeMarkAutoMapperProfile()
        {
            CreateMap<CreateUpdateTradeMarkDto, TradeMark>(MemberList.None);
            CreateMap<TradeMark, GetTradeMarkForEditDto>(MemberList.None);
            CreateMap<TradeMark, GetTradeMarkForViewDto>(MemberList.None);
            CreateMap<TradeMark, TradeMarkDto>(MemberList.None);
            CreateMap<TradeMark, CreateUpdateTradeMarkDto>(MemberList.None);
        }
    }
}
