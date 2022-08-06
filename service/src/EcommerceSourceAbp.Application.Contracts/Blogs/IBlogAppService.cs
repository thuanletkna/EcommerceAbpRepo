using EcommerceSourceAbp.Blogs.Dtos;

namespace EcommerceSourceAbp.Blogs
{
    public interface IBlogAppService : IAppListService<CreateUpdateBlogDto, GetBlogForViewDto, GetBlogForUpdateDto, GetBlogRequestInputDto>
    {
    }
}
