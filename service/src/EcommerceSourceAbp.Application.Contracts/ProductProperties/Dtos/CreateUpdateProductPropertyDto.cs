using EcommerceSourceAbp.BaseDtos;
using System.Collections.Generic;

namespace EcommerceSourceAbp.ProductProperties.Dtos
{
    public class CreateUpdateProductPropertyDto : ListBaseDto
    {
        public List<CreateUpdateSubProductPropertyDto> SubProductProperties { get; set; }
    }
}
