using System;

namespace EcommerceSourceAbp.Accounts.Dtos
{
    public class SetAccountStatusInputDto
    {
        public string UserId { get; set; }
        public bool IsActive { get; set; }
    }
}
