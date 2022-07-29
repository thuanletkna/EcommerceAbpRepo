using EcommerceSourceAbp.Constants;
using EcommerceSourceAbp.Enums;
using System.ComponentModel.DataAnnotations;

namespace EcommerceSourceAbp.BaseDtos
{
    public class ListBaseDto : BaseDto
    {
        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Name { get; set; }
        [MaxLength(ListBaseEntityConsts.CodeMaxLength)]
        public string Code { get; set; }

        public Status? Status { get; set; }
    }
}
