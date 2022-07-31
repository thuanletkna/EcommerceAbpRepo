
using EcommerceSourceAbp.BaseDtos;

namespace EcommerceSourceAbp.Provinces.Dtos
{
    public class ProvinceDto : ListBaseDto
    {
        public string Type { get; set; }

        public string Slug { get; set; }

        public string Region { get; set; }
    }
}
