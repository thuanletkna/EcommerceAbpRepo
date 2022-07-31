using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.Provinces.Dtos;
using System;

namespace EcommerceSourceAbp.Districts.Dtos
{
    public class DistrictDto : ListBaseDto
    {
        public string Type { get; set; }

        public string ProvinceCode { get; set; }

        public Guid? ProvinceId { get; set; }

        public ProvinceDto Province { get; set; }
    }
}
