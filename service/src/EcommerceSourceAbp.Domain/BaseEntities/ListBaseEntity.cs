using EcommerceSourceAbp.Constants;
using EcommerceSourceAbp.Enums;
using System.ComponentModel.DataAnnotations;

namespace EcommerceSourceAbp.BaseEntities
{
    public class ListBaseEntity : BaseEntity
    {
        [MaxLength(ListBaseEntityConsts.NameMaxLength)]
        public string Name { get; set; }
        public int Code { get; set; }

        public Status? Status { get; set; }
    }
}
