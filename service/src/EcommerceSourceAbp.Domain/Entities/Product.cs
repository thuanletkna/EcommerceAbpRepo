using EcommerceSourceAbp.BaseEntities;
using EcommerceSourceAbp.Constants;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceSourceAbp.Entities
{
    public class Product : ListBaseEntity
    {
        [Column(TypeName = "ntext")]
        [MaxLength(ListBaseEntityConsts.Comment)]
        public string Description { get; set; }
        public string Slug { get; set; }
        [Column(TypeName = "ntext")]
        [MaxLength(ListBaseEntityConsts.Comment)]
        public string Details { get; set; }
        public string TradeMark { get; set; }
        public string ProductCode { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public decimal PriceSale { get; set; }
        public int ViewCount { get; set; }
        public int NumberOfReview { get; set; }
        public int StarRating { get; set; }
        public bool IsHot { get; set; }
        public int? HotIndex { get; set; }
        public Guid? CategoryId { get; set; }
        public Category Category { get; set; }
        public Guid? ProductTypeId { get; set; }
        public ProductType ProductType { get; set; }
        public ICollection<NewsTag> NewsTags { get; set; }
        public Guid? FileStorageId { get; set; }
        [ForeignKey("FileStorageId")]
        public FileStorage FileStorage { get; set; }
    }
}
