using EcommerceSourceAbp.ProductProperties.Dtos;

namespace EcommerceSourceAbp.SubProductProperties
{
    public interface ISubProductPropertyAppService : IAppListService<CreateUpdateSubProductPropertyDto, GetSubProductPropertyForViewDto, GetSubProductPropertyForUpdateDto, SubProductPropertyGetRequestInputDto>
    {
    }
}
