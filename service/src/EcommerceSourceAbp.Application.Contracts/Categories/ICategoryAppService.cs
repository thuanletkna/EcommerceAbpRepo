using EcommerceSourceAbp.Categories.Dtos;

namespace EcommerceSourceAbp.Categories
{
    public interface ICategoryAppService : IAppListService<CreateUpdateCategoryDto, GetCategoryForViewDto, GetCategoryForEditDto, GetCategoryRequestInputDto>
    {
    }
}
