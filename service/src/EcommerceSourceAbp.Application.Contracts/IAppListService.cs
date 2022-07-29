using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace EcommerceSourceAbp
{
    public interface IAppListService<in TCreateUpdate, TViewOutput, TEditOutput, in TGetInput> :
        IAppBaseService<TCreateUpdate, TViewOutput, TEditOutput, TGetInput>
        where TCreateUpdate : EntityDto<Guid?>
        where TViewOutput : EntityDto<Guid?>
        where TEditOutput : EntityDto<Guid?>
        where TGetInput : PagedAndSortedResultRequestDto
    {
        Task ToggleStatus(Guid? id);
        Task<List<TViewOutput>> GetByIds(List<Guid> ids);
    }
}
