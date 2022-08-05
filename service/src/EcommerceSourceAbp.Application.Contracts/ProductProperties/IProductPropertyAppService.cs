using EcommerceSourceAbp.ProductProperties.Dtos;

namespace EcommerceSourceAbp.ProductProperties
{
    public interface IProductPropertyAppService : IAppListService<CreateUpdateProductPropertyDto, GetProductPropertyForViewDto, GetProductPropertyForUpdateDto, ProductPropertyGetRequestInputDto>
    {
    }
}
