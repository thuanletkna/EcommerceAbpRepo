using EcommerceSourceAbp.Blogs.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EcommerceSourceAbp.Blogs
{
    public interface IBlogAppService : IAppListService<CreateUpdateBlogDto, GetBlogForViewDto, GetBlogForUpdateDto, GetBlogRequestInputDto>
    {
        Task<List<GetBlogForViewDto>> GetAllBlogByView();
        Task<GetBlogForViewDto> GetBySlugPublic(string slug);
    }
}
