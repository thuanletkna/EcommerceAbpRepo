using EcommerceSourceAbp.BlogFiles.Dtos;

namespace EcommerceSourceAbp.BlogFiles
{
    public interface IBlogFileAppService : IAppBaseService<CreateUpdateBlogFileDto, GetBlogFileForViewDto, GetBlogFileForEditDto, GetBlogFileRequestInputDto>
    {
    }
}
