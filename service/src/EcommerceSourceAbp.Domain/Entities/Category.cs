using EcommerceSourceAbp.BaseEntities;
using EcommerceSourceAbp.Constants;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EcommerceSourceAbp.Entities
{
    public class Category : ListBaseEntity
    {
        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Slug { get; set; }
        public int? OrderIndex { get; set; }
        public bool IsBlog { get; set; }
        public ICollection<News> Newses { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
