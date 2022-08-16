using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.Categories.Dtos;
using EcommerceSourceAbp.Constants;
using EcommerceSourceAbp.Enums;
using EcommerceSourceAbp.Newses.Dtos;
using EcommerceSourceAbp.ProductFiles.Dtos;
using EcommerceSourceAbp.ProductProperties.Dtos;
using EcommerceSourceAbp.TradeMarks.Dtos;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceSourceAbp.Products.Dtos
{
    public class ProductDto : ListBaseDto
    {
        [Column(TypeName = "ntext")]
        [MaxLength(ListBaseEntityConsts.Comment)]
        public string Description { get; set; }
        public string Slug { get; set; }
        [Column(TypeName = "ntext")]
        [MaxLength(ListBaseEntityConsts.Comment)]
        public string Details { get; set; }
        public string ProductCode { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public decimal PriceSale { get; set; }
        public int ViewCount { get; set; }
        public int NumberOfReview { get; set; }
        public int StarRating { get; set; }
        public IsHot? isHot { get; set; }
        public int? HotIndex { get; set; }
        public Guid? CategoryId { get; set; }
        public CategoryDto Category { get; set; }
        public Guid? TradeMarkId { get; set; }
        public TradeMarkDto TradeMarks { get; set; }
        public ICollection<NewsTagDto> NewsTags { get; set; }
        public List<CreateUpdateProductFileDto> ProductFile { get; set; }
        public Guid? ProductPropertyId { get; set; }
        public CreateUpdateProductPropertyDto ProductProperties { get; set; }
    }
}
