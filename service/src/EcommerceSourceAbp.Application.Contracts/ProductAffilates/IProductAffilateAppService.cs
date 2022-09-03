using EcommerceSourceAbp.ProductAffilates.Dtos;

namespace EcommerceSourceAbp.ProductAffilates
{
    public interface IProductAffilateAppService : IAppListService<CreateUpdateProductAffilateDto, GetProductAffilateForViewDto, GetProductAffilateForEditDto, GetProductAffilateRequestInputDto>
    {
    }
}
