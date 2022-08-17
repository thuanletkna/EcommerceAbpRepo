using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.ImageSettings.Dto;
using System.Collections.Generic;

namespace EcommerceSourceAbp.HomePageConfigs.Dto
{
    public class HomePageConfigDto : ListBaseDto
    {
        public string LinkBanner { get; set; }
        public string Description { get; set; }
        public List<ImageSettingDto> ImageSetting { get; set; }
    }
}
