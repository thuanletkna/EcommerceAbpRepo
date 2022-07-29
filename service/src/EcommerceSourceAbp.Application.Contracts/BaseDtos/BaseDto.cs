using System;
using Volo.Abp.Application.Dtos;

namespace EcommerceSourceAbp.BaseDtos
{
    public class BaseDto : AuditedEntityDto<Guid?>
    {
    }

    public class BaseDto<T> : AuditedEntityDto<T> where T : struct
    {

    }
}
