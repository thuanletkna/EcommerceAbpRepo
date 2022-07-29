using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace EcommerceSourceAbp.BaseEntities
{
    public class BaseEntity : FullAuditedAggregateRoot<Guid?>
    {

    }
    public class BaseEntity<T> : FullAuditedAggregateRoot<T> where T : struct
    {

    }
}
