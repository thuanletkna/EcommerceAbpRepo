using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.BlogDetails.Dtos;
using System.Collections.Generic;

namespace EcommerceSourceAbp.Blogs.Dtos
{
    public class CreateUpdateBlogDto : ListBaseDto
    {
        public string Descriptions { get; set; }
        public List<CreateUpdateBlogDetailDto> BlogDetails { get; set; }
    }
}
