using System;
using System.ComponentModel.DataAnnotations;
using EcommerceSourceAbp.Constants;
using EcommerceSourceAbp.Enums;

namespace EcommerceSourceAbp.Accounts.Dtos
{
    public class AccountUpdateBasicInfoInputDto
    {
        [MaxLength(ECommerceProfileConsts.ProfileImageMaxLength)]
        public string ProfileImage { get; set; }
        [MaxLength(ECommerceProfileConsts.FullNameMaxLength)]
        public string FullName { get; set; }
        public DateTime? Dob { get; set; }
        public Gender? Gender { get; set; }
        public Guid? ProvinceId { get; set; }
        public Guid? DistrictId { get; set; }
        public Guid? WardId { get; set; }
        [MaxLength(ECommerceProfileConsts.AddressMaxLength)]
        public string Address { get; set; }
        [MaxLength(ECommerceProfileConsts.FacebookProfileUrlMaxLength)]
        public string FacebookProfileUrl { get; set; }

    }
}
