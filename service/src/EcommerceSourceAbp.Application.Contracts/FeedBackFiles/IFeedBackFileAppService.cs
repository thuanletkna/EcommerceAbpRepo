using EcommerceSourceAbp.FeedBackFiles.Dtos;

namespace EcommerceSourceAbp.FeedBackFiles
{
    public interface IFeedBackFileAppService : IAppBaseService<CreateUpdateFeedBackFileDto, GetFeedBackFileForViewDto, GetFeedBackFileForEditDto, GetFeedBackFileRequestInputDto>
    {
    }
}
