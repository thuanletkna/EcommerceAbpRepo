using EcommerceSourceAbp.BaseEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceSourceAbp.Entities
{
    public class ProductAffilate : ListBaseEntity
    {
        public Guid? ProductDetailId { get; set; }
        [ForeignKey("ProductDetailId")]
        public BlogDetail ProductDetail { get; set; }
        public decimal Price { get; set; }
        public decimal PriceSale { get; set; }
        public bool IsAffilateInDetailBlog{ get; set; }
        public string LinkAffilateShopee { get; set; }
        public string LinkAffilateLazada { get; set; }
        public string LinkAffilateTiki { get; set; }
        public string LinkAffilateOther { get; set; }
        public ICollection<ProductAffilateFile> ProductAffilateFile { get; set; }
    }
}
