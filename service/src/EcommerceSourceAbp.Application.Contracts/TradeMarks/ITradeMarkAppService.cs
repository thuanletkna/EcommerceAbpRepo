using EcommerceSourceAbp.TradeMarks.Dtos;

namespace EcommerceSourceAbp.TradeMarks
{
    public interface ITradeMarkAppService : IAppListService<CreateUpdateTradeMarkDto, GetTradeMarkForViewDto, GetTradeMarkForEditDto, GetTradeMarkRequestInputDto>
    {
    }
}
