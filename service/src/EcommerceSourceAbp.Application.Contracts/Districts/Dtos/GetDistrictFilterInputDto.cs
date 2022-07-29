using System;

namespace EcommerceSourceAbp.Districts.Dtos
{
    public class GetDistrictFilterInputDto
    {
        public Guid? ProvinceId { get; set; }
        public Guid? DistrictId { get; set; }
    }
}
