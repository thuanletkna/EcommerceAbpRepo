using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.Constants;
using System;
using System.ComponentModel.DataAnnotations;

namespace EcommerceSourceAbp.Wards.Dtos
{
    public class CreateUpdateWardDto : ListBaseDto
    {
        [Required]
        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Type { get; set; }

        [Required]
        public Guid DistrictId { get; set; }
    }
}
