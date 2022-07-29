using EcommerceSourceAbp.BaseDtos;
using System;

namespace EcommerceSourceAbp.Accounts.Dtos
{
    public class GetECommerceProfileInput : BaseGetRequestInput
    {
        public Guid? ProvinceId { get; set; }
        public Guid? DistrictId { get; set; }
        public Guid? WardId { get; set; }
    }
}
