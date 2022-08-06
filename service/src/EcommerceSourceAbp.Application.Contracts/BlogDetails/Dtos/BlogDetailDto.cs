using EcommerceSourceAbp.BaseDtos;
using System;

namespace EcommerceSourceAbp.BlogDetails.Dtos
{
    public class BlogDetailDto : ListBaseDto
    {
        public Guid? BlogId { get; set; }
    }
}
