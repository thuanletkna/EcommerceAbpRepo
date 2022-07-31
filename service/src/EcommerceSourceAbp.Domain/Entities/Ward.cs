using EcommerceSourceAbp.BaseEntities;
using EcommerceSourceAbp.Constants;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceSourceAbp.Entities
{
    public class Ward : ListBaseEntity
    {
        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Type { get; set; }

        [MaxLength(ListBaseEntityConsts.CodeMaxLength)]
        public string DistrictCode { get; set; }

        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Slug { get; set; }

        public bool IsNew { get; set; }

        public Guid? DistrictId { get; set; }

        [ForeignKey("DistrictId")]
        public District District { get; set; }
    }
}
