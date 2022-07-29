using System;

namespace EcommerceSourceAbp.Accounts.Dtos
{
    public class ChangePasswordByCodeInputDto
    {
        public Guid? Code { get; set; }
        public string NewPassword { get; set; }
    }
}
