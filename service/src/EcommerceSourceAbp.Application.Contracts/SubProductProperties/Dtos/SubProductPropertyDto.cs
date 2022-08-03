using EcommerceSourceAbp.BaseDtos;
using System;

namespace EcommerceSourceAbp.ProductProperties.Dtos
{
    public class SubProductPropertyDto : ListBaseDto
    {
        public Guid? ProductPropertyId { get; set; }
    }
}
