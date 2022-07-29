using System;
using EcommerceSourceAbp.Enums;

namespace EcommerceSourceAbp.Accounts.Dtos
{
    public class AccountBasicInfoDto
    {
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        public Guid? UserId { get; set; }
        public int RedeemingPoint { get; set; }
        public int EarningPoint { get; set; }
        public AccountStatus AccountStatus { get; set; }

        //public BasicMembershipClassDto MembershipClass { get; set; }
    }
}
