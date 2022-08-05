using EcommerceSourceAbp.BaseEntities;
using System.Collections.Generic;

namespace EcommerceSourceAbp.Entities
{
    public class ProductProperty : ListBaseEntity
    {
        public ICollection<SubProductProperty> SubProductProperties { get; set; }
    }
}
