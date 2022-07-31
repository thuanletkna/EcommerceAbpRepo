using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.Districts.Dtos;
using System;

namespace EcommerceSourceAbp.Wards.Dtos
{
    public class WardDto : ListBaseDto
    {
        public string Type { get; set; }

        public string DistrictCode { get; set; }

        public Guid? DistrictId { get; set; }

        public DistrictDto District { get; set; }
    }
}
