using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.Constants;
using System.ComponentModel.DataAnnotations;

namespace EcommerceSourceAbp.Provinces.Dtos
{
    public class CreateUpdateProvinceDto : ListBaseDto
    {
        [Required]
        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Type { get; set; }

        [Required]
        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Slug { get; set; }
    }
}
