using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.MetaSeos.Dtos;
using System.Collections.Generic;

namespace EcommerceSourceAbp.Categories.Dtos
{
    public class CategoryDto : ListBaseDto
    {
        public string Slug { get; set; }
        public int OrderIndex { get; set; }
        public bool IsBlog { get; set; }

        public List<MetaSeoDto> MetaSeo { get; set; }
    }
}
