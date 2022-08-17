using EcommerceSourceAbp.BaseEntities;
using System.Collections.Generic;

namespace EcommerceSourceAbp.Entities
{
    public class HomePageConfig : ListBaseEntity
    {
        public string LinkBanner { get; set; }
        public string Description { get; set; }
        public ICollection<ImageSetting> ImageSetting { get; set; }
    }
}
