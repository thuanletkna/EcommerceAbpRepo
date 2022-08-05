using EcommerceSourceAbp.BaseEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceSourceAbp.Entities
{
    public class BlogDetail : ListBaseEntity
    {
        public Guid? BlogId { get; set; }
        [ForeignKey("BlogId")]
        public Blog Blog { get; set; }
        public ICollection<ProductAffilate> ProductAffilates { get; set; }
    }
}
