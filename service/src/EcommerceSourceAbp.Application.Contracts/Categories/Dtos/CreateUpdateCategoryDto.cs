using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.Constants;
using EcommerceSourceAbp.MetaSeos.Dtos;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EcommerceSourceAbp.Categories.Dtos
{
    public class CreateUpdateCategoryDto : ListBaseDto
    {
        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Slug { get; set; }
        public int OrderIndex { get; set; }
        public bool IsBlog { get; set; }

        public List<MetaSeoDto> MetaSeo { get; set; }
    }
}
