using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.BlogDetails.Dtos;
using EcommerceSourceAbp.BlogFiles.Dtos;
using EcommerceSourceAbp.Enums;
using System.Collections.Generic;

namespace EcommerceSourceAbp.Blogs.Dtos
{
    public class CreateUpdateBlogDto : ListBaseDto
    {
        public string Descriptions { get; set; }
        public IsHot? isHot { get; set; }
        public List<CreateUpdateBlogDetailDto> BlogDetails { get; set; }
        public List<CreateUpdateBlogFileDto> BlogFile { get; set; }
    }
}
