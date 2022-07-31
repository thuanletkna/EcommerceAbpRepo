using EcommerceSourceAbp.Products.Dtos;

namespace EcommerceSourceAbp.Products
{
    public interface IProductAppService : IAppListService<CreateUpdateProductDto, GetProductForViewDto, GetProductForUpdateDto, GetProductRequestInputDto>
    {
    }
}
