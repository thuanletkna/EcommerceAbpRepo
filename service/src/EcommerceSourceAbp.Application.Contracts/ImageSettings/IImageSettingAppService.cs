using EcommerceSourceAbp.ImageSettings.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EcommerceSourceAbp.ImageSettings
{
    public interface IImageSettingAppService : IAppBaseService<CreateUpdateImageSettingDto, GetImageSettingForViewDto, GetImageSettingForEditDto, GetImageSettingRequestInputDto>
    {
        
    }
}
