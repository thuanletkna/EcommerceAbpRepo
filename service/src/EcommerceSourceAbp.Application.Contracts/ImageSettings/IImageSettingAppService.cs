using EcommerceSourceAbp.ImageSettings.Dto;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EcommerceSourceAbp.ImageSettings
{
    public interface IImageSettingAppService : IAppBaseService<CreateUpdateImageSettingDto, GetImageSettingForViewDto, GetImageSettingForEditDto, GetImageSettingRequestInputDto>
    {
        Task<List<GetImageSettingForViewDto>> GetAllPublic(Guid? id);
    }
}
