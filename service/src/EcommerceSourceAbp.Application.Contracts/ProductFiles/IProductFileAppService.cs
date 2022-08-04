using EcommerceSourceAbp.ProductFiles.Dtos;

namespace EcommerceSourceAbp.ProductFiles
{
    public interface IProductFileAppService : IAppBaseService<CreateUpdateProductFileDto, GetProductFileForViewDto, GetProductFileForEditDto, GetProductFileRequestInputDto>
    {
    }
}
