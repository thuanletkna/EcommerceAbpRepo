using System.ComponentModel.DataAnnotations;
using EcommerceSourceAbp.Constants;

namespace EcommerceSourceAbp.Accounts.Dtos
{
    public class AccountRegisterInputDto
    {
        [Required]
        [MaxLength(ECommerceProfileConsts.EmailMaxLength)]
        public string Email { get; set; }
        [Required]
        [MaxLength(ECommerceProfileConsts.PhoneNumberMaxLength)]
        public string PhoneNumber { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
