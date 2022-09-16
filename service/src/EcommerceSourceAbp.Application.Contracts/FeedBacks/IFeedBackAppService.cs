using EcommerceSourceAbp.FeedBacks.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EcommerceSourceAbp.FeedBacks
{
    public interface IFeedBackAppService : IAppListService<CreateUpdateFeedBackDto, GetFeedBackForEditDto, GetFeedBackForViewDto, GetFeedBackRequestInputDto>
    {
        Task<List<GetFeedBackForEditDto>> GetAllPublic();
    }
}
