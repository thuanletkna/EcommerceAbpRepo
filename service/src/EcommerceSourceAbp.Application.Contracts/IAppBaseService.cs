using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace EcommerceSourceAbp
{
    public interface IAppBaseService
        <TPrimaryKey, in TCreateUpdate, TViewOutput, TEditOutput, in TGetInput> : IApplicationService
        where TPrimaryKey : struct
        where TCreateUpdate : EntityDto<TPrimaryKey?>
        where TViewOutput : EntityDto<TPrimaryKey?>
        where TEditOutput : EntityDto<TPrimaryKey?>
        where TGetInput : PagedAndSortedResultRequestDto
    {
        Task<PagedResultDto<TViewOutput>> GetListPaged(TGetInput input);
        Task<TEditOutput> Get(TPrimaryKey id);
        Task Delete(TPrimaryKey id);
        Task<TPrimaryKey?> Save(TCreateUpdate input);
        Task<List<TViewOutput>> GetAll();
        Task<List<TViewOutput>> GetUsingFilter(TGetInput input);
    }

    public interface IAppBaseService<in TCreateUpdate, TViewOutput, TEditOutput, in TGetInput> :
        IAppBaseService<Guid, TCreateUpdate, TViewOutput, TEditOutput, TGetInput>
        where TCreateUpdate : EntityDto<Guid?>
        where TViewOutput : EntityDto<Guid?>
        where TEditOutput : EntityDto<Guid?>
        where TGetInput : PagedAndSortedResultRequestDto
    { }
}
