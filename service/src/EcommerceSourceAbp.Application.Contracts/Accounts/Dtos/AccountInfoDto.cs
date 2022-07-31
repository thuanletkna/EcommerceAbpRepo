using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.Constants;
using EcommerceSourceAbp.Districts.Dtos;
using EcommerceSourceAbp.Enums;
using EcommerceSourceAbp.Provinces.Dtos;
using EcommerceSourceAbp.Wards.Dtos;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceSourceAbp.Accounts.Dtos
{
    public class AccountInfoDto : BaseDto
    {
        public string ProfileImage { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        public DateTime? Dob { get; set; }
        public Gender? Gender { get; set; }
        public Guid? ProvinceId { get; set; }
        public Guid? DistrictId { get; set; }
        public Guid? WardId { get; set; }
        public string Address { get; set; }
        public string FacebookProfileUrl { get; set; }

        [ForeignKey("ProvinceId")]
        public GetProvinceDto Province { get; set; }
        [ForeignKey("DistrictId")]
        public GetDistrictDto District { get; set; }
        [ForeignKey("WardId")]
        public GetWardDto Ward { get; set; }
        [MaxLength(ECommerceProfileConsts.ActiveCodeMaxLength)]
        public DateTime? ActiveDate { get; set; }
        public AccountStatus AccountStatus { get; set; }
        [MaxLength(ECommerceProfileConsts.UserCodeMaxLength)]
        public string UserCode { get; set; }
        public Guid? UserId { get; set; }

        public bool IsFirstLogin { get; set; }

        public int RedeemingPoint { get; set; }
        public int EarningPoint { get; set; }
        public DateTime? LastOrderTime { get; set; }

        //public MembershipClassDto MembershipClass { get; set; }
        //public MembershipClassDto NextMembershipClass { get; set; }
    }
}
