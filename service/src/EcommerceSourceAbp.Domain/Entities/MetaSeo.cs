using EcommerceSourceAbp.Constants;
using EcommerceSourceAbp.Enums;
using System;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.Domain.Entities;

namespace EcommerceSourceAbp.Entities
{
    public class MetaSeo : BasicAggregateRoot<Guid>
    {
        public MetaSeoType Type { get; set; }
        public Guid EntityId { get; set; }
        [MaxLength(MetaSeoConsts.KeyMaxLength)]
        public string Key { get; set; }
        [MaxLength(MetaSeoConsts.ContentMaxLength)]
        public string Content { get; set; }
    }
}

