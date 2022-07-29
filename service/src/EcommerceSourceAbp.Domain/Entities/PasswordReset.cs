using EcommerceSourceAbp.BaseEntities;
using EcommerceSourceAbp.Enums;
using System;

namespace EcommerceSourceAbp.Entities
{
    public class PasswordReset : BaseEntity
    {
        public DateTime ExpiredDate { get; set; }
        public Guid UserId { get; set; }
        public Status Status { get; set; }
        public string Type { get; set; }
    }
}