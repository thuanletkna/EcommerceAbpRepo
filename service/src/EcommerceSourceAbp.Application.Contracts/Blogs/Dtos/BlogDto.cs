using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.BlogDetails.Dtos;
using EcommerceSourceAbp.Categories.Dtos;
using EcommerceSourceAbp.Constants;
using EcommerceSourceAbp.Newses.Dtos;
using EcommerceSourceAbp.ProductFiles.Dtos;
using EcommerceSourceAbp.ProductProperties.Dtos;
using EcommerceSourceAbp.TradeMarks.Dtos;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceSourceAbp.Blogs.Dtos
{
    public class BlogDto : ListBaseDto
    {
        public string Descriptions { get; set; }
        public List<CreateUpdateBlogDetailDto> BlogDetails { get; set; }
    }
}
