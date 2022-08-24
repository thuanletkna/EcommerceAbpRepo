using EcommerceSourceAbp.Categories.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EcommerceSourceAbp.Categories
{
    public interface ICategoryAppService : IAppListService<CreateUpdateCategoryDto, GetCategoryForViewDto, GetCategoryForEditDto, GetCategoryRequestInputDto>
    {
        Task<IEnumerable<GetCategoryForViewDto>> GetAllProductByCategory();
    }
}
