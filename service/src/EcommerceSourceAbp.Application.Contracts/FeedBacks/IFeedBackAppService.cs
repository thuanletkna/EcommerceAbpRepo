using EcommerceSourceAbp.FeedBacks.Dtos;

namespace EcommerceSourceAbp.FeedBacks
{
    public interface IFeedBackAppService : IAppListService<CreateUpdateFeedBackDto, GetFeedBackForEditDto, GetFeedBackForViewDto, GetFeedBackRequestInputDto>
    {
    }
}
