using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.BlogDetails.Dtos;
using EcommerceSourceAbp.BlogFiles.Dtos;
using EcommerceSourceAbp.Categories.Dtos;
using EcommerceSourceAbp.Enums;
using EcommerceSourceAbp.Newses.Dtos;
using System;
using System.Collections.Generic;

namespace EcommerceSourceAbp.Blogs.Dtos
{
    public class CreateUpdateBlogDto : ListBaseDto
    {
        public string Descriptions { get; set; }
        public string Slug { get; set; }
        public IsHot? isHot { get; set; }
        public Guid? CategoryId { get; set; }
        public CategoryDto Category { get; set; }
        public ICollection<NewsTagDto> NewsTags { get; set; }
        public List<CreateUpdateBlogDetailDto> BlogDetails { get; set; }
        public List<CreateUpdateBlogFileDto> BlogFile { get; set; }
    }
}
