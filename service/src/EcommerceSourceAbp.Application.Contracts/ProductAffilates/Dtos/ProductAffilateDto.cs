using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.ProductAffilateFiles.Dtos;
using System;
using System.Collections.Generic;

namespace EcommerceSourceAbp.ProductAffilates.Dtos
{
    public class ProductAffilateDto : ListBaseDto
    {
        public Guid? ProductDetailId { get; set; }
        public decimal Price { get; set; }
        public decimal PriceSale { get; set; }
        public bool IsAffilateInDetailBlog { get; set; }
        public string LinkAffilateShopee { get; set; }
        public string LinkAffilateLazada { get; set; }
        public string LinkAffilateTiki { get; set; }
        public string LinkAffilateOther { get; set; }
        public List<CreateUpdateProductAffilateFileDto> ProductAffilateFile { get; set; }
    }
}
