using System;

namespace EcommerceSourceAbp.Accounts.Dtos
{
    public class AdminAccountBasicInfo
    {
        public Guid? Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}