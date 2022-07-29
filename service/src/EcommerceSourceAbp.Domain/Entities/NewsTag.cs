using System;
using Volo.Abp.Domain.Entities;

namespace EcommerceSourceAbp.Entities
{
    public class NewsTag : BasicAggregateRoot<Guid?>
    {
        public Guid? NewsId { get; set; }
        public Guid? TagId { get; set; }
        public News News { get; set; }
        public Tag Tag { get; set; }
    }
}
