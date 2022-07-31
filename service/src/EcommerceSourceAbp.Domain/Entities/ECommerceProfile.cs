using EcommerceSourceAbp.BaseEntities;
using EcommerceSourceAbp.Constants;
using EcommerceSourceAbp.Enums;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceSourceAbp.Entities
{
    public class ECommerceProfile : BaseEntity
    {
        [MaxLength(ECommerceProfileConsts.ProfileImageMaxLength)]
        public string ProfileImage { get; set; }
        [MaxLength(ECommerceProfileConsts.PhoneNumberMaxLength)]
        public string PhoneNumber { get; set; }
        [MaxLength(ECommerceProfileConsts.EmailMaxLength)]
        public string Email { get; set; }
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

        [ForeignKey("ProvinceId")]
        public Province Province { get; set; }
        [ForeignKey("DistrictId")]
        public District District { get; set; }
        [ForeignKey("WardId")]
        public Ward Ward { get; set; }
        [MaxLength(ECommerceProfileConsts.ActiveCodeMaxLength)]
        public string ActiveCode { get; set; }
        public DateTime? ActiveDate { get; set; }
        public AccountStatus AccountStatus { get; set; }
        [MaxLength(ECommerceProfileConsts.UserCodeMaxLength)]
        public string UserCode { get; set; }
        public Guid? UserId { get; set; }
        public bool IsFirstLogin { get; set; }

        [Column(TypeName = "decimal (20, 2)")]
        public decimal RedeemingPoint { get; set; }
        [Column(TypeName = "decimal (20, 2)")]
        public decimal EarningPoint { get; set; }
        public DateTime? LastOrderTime { get; set; }

        //public Guid? MembershipClassId { get; set; }

        //[ForeignKey("MembershipClassId")]
        //public MembershipClass MembershipClass { get; set; }
    }
}
