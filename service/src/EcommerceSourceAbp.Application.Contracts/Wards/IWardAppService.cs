using EcommerceSourceAbp.Wards.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EcommerceSourceAbp.Wards
{
    public interface IWardAppService :
        IAppListService<CreateUpdateWardDto, WardDto, WardDto, RequestWardInputDto>
    {
        //Task<List<WardDto>> GetFilter(GetWardFilterInputDto input);
    }
}
