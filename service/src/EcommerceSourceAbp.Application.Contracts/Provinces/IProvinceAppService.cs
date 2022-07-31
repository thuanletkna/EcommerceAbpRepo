using EcommerceSourceAbp.Provinces.Dtos;

namespace EcommerceSourceAbp.Provinces
{
    public interface IProvinceAppService :
        IAppListService<CreateUpdateProvinceDto, ProvinceDto, ProvinceDto, RequestProvinceInputDto>
    {

    }
}
