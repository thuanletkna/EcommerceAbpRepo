using EcommerceSourceAbp.BaseDtos;
using System;

namespace EcommerceSourceAbp.ProductProperties.Dtos
{
    public class CreateUpdateSubProductPropertyDto : ListBaseDto
    {
        public Guid? ProductPropertyId { get; set; }
    }
}
