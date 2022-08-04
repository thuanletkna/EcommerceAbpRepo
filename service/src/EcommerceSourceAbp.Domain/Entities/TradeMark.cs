using EcommerceSourceAbp.BaseEntities;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceSourceAbp.Entities
{
    public class TradeMark : ListBaseEntity
    {
        public Guid? FileStorageId { get; set; }
        [ForeignKey("FileStorageId")]
        public FileStorage FileStorage { get; set; }
    }
}
