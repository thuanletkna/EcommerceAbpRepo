using EcommerceSourceAbp.BaseEntities;
using EcommerceSourceAbp.Constants;
using System.ComponentModel.DataAnnotations;

namespace EcommerceSourceAbp.Entities
{
    public class Province : ListBaseEntity
    {
        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Type { get; set; }

        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Slug { get; set; }

        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Region { get; set; }

        public bool IsNew { get; set; }
    }
}
