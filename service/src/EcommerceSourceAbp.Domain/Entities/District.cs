using EcommerceSourceAbp.BaseEntities;
using EcommerceSourceAbp.Constants;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceSourceAbp.Entities
{
    public class District : ListBaseEntity
    {
        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Type { get; set; }

        [MaxLength(ListBaseEntityConsts.CodeMaxLength)]
        public string ProvinceCode { get; set; }

        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Slug { get; set; }

        public bool IsNew { get; set; }

        public Guid? ProvinceId { get; set; }

        [ForeignKey("ProvinceId")]
        public Province Province { get; set; }
    }
}
