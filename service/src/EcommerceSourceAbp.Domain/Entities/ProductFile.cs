using System;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities;

namespace EcommerceSourceAbp.Entities
{
    public class ProductFile : BasicAggregateRoot<Guid?>
    {
        public Guid? ProductId { get; set; }
        [ForeignKey("ProductId")]
        public Product Product { get; set; }
        public Guid? FileStorageId { get; set; }
        [ForeignKey("FileStorageId")]
        public FileStorage FileStorage { get; set; }

        public string FileType => FileStorage?.Type;
    }
}
