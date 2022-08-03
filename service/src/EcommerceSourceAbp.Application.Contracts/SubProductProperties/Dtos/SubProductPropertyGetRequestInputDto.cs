using EcommerceSourceAbp.BaseDtos;
using System;

namespace EcommerceSourceAbp.ProductProperties.Dtos
{
    public class SubProductPropertyGetRequestInputDto : ListBaseGetRequestInput
    {
        public Guid? ProductPropertyId { get; set; }
    }
}
