using EcommerceSourceAbp.BaseEntities;
using System.Collections.Generic;

namespace EcommerceSourceAbp.Entities
{
    public class Feedback : ListBaseEntity
    {
        public string Descriptions { get; set; }
        public ICollection<FeedBackFile> FeedBackFile { get; set; }
    }
}
