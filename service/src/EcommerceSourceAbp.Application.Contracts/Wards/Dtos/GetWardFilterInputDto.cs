using System;

namespace EcommerceSourceAbp.Wards.Dtos
{
    public class GetWardFilterInputDto
    {
        public Guid? ProvinceId { get; set; }
        public Guid? DistrictId { get; set; }
        public Guid? WardId { get; set; }
    }
}
