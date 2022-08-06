using EcommerceSourceAbp.BlogDetails.Dtos;

namespace EcommerceSourceAbp.BlogDetails
{
    public interface IBlogDetailAppService : IAppListService<CreateUpdateBlogDetailDto, GetBlogDetailForViewDto, GetBlogDetailForUpdateDto, GetBlogDetailRequestInputDto>
    {
    }
}
