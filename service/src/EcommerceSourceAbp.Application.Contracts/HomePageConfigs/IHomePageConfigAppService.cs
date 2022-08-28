using EcommerceSourceAbp.HomePageConfigs.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EcommerceSourceAbp.HomePageConfigs
{
    public interface IHomePageConfigAppService : IAppListService<CreateUpdateHomePageConfigDto, GetHomePageConfigForViewDto, GetHomePageConfigForEditDto, GetHomePageConfigRequestInputDto>
    {
        Task<List<GetHomePageConfigForViewDto>> GetAllPublic();
        Task<IEnumerable<GetHomePageConfigForViewDto>> GetHomepageBanner();
        Task<IEnumerable<GetHomePageConfigForViewDto>> GetImageHomepageHeader();
    }
}
