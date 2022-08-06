using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.Categories.Dtos;
using EcommerceSourceAbp.Constants;
using EcommerceSourceAbp.Newses.Dtos;
using EcommerceSourceAbp.TradeMarks.Dtos;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceSourceAbp.BlogDetails.Dtos
{
    public class BlogDetailDto : ListBaseDto
    {
        public Guid? BlogId { get; set; }
    }
}
