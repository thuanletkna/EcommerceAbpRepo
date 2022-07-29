using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.Constants;
using System;
using System.ComponentModel.DataAnnotations;


namespace EcommerceSourceAbp.Districts.Dtos
{
    public class CreateUpdateDistrictDto : ListBaseDto
    {
        [Required]
        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Type { get; set; }

        [Required]
        public Guid ProvinceId { get; set; }
    }
}
