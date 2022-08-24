using EcommerceSourceAbp.Products.Dtos;
using System.Collections.Generic;

namespace EcommerceSourceAbp.Categories.Dtos
{
    public class GetCategoryForViewDto : CategoryDto
    {
        public List<GetProductForViewDto> Products { get; set; }
    }
}
