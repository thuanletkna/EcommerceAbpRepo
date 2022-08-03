using EcommerceSourceAbp.BaseEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EcommerceSourceAbp.Entities
{
    public class SubProductProperty : ListBaseEntity
    {
        public Guid? ProductPropertyId { get; set; }
        [ForeignKey("ProductPropertyId")]
        public ProductProperty ProductProperties { get; set; }
    }
}
