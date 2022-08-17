using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.ImageSettings.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace EcommerceSourceAbp.HomePageConfigs.Dto
{
    public class CreateUpdateHomePageConfigDto : ListBaseDto
    {
        public string LinkBanner { get; set; }
        public string Description { get; set; }
        public List<CreateUpdateImageSettingDto> ImageSetting { get; set; }
    }
}
