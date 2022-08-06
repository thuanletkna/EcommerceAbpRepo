using EcommerceSourceAbp.BaseEntities;
using System.Collections.Generic;

namespace EcommerceSourceAbp.Entities
{
    public class Blog : ListBaseEntity
    {
        public string Descriptions { get; set; }
        public ICollection<BlogDetail> BlogDetails { get; set; }
    }
}
