using EcommerceSourceAbp.BaseEntities;
using EcommerceSourceAbp.Constants;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EcommerceSourceAbp.Entities
{
    public class Tag : BaseEntity
    {
        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Name { get; set; }
        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Slug { get; set; }
        public ICollection<NewsTag> NewsTags { get; set; }
    }
}
