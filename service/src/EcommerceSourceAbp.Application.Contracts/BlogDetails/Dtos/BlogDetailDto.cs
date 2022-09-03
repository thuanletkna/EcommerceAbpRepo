using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.ProductAffilates.Dtos;
using System;
using System.Collections.Generic;

namespace EcommerceSourceAbp.BlogDetails.Dtos
{
    public class BlogDetailDto : ListBaseDto
    {
        public Guid? BlogId { get; set; }
        public string Details { get; set; }
        public List<CreateUpdateProductAffilateDto> ProductAffilates { get; set; }
    }
}
