using EcommerceSourceAbp.Districts.Dtos;

namespace EcommerceSourceAbp.Districts
{
    public interface IDistrictAppService :
        IAppListService<CreateUpdateDistrictDto, DistrictDto, DistrictDto, RequestDistrictInputDto>
    {
        //Task<List<DistrictDto>> GetFilter(GetDistrictFilterInputDto input);
    }
}
