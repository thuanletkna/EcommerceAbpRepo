using EcommerceSourceAbp.BaseEntities;
using EcommerceSourceAbp.Enums;
using System.Collections.Generic;

namespace EcommerceSourceAbp.Entities
{
    public class Blog : ListBaseEntity
    {
        public string Descriptions { get; set; }
        public IsHot? isHot  { get; set; }
        public ICollection<BlogDetail> BlogDetails { get; set; }
        public ICollection<BlogFile> BlogFile { get; set; }
    }
}
