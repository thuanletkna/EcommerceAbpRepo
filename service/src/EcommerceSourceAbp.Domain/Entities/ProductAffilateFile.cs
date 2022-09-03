using System;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities;

namespace EcommerceSourceAbp.Entities
{
    public class ProductAffilateFile : BasicAggregateRoot<Guid?>
    {
        public Guid? ProductAffilateId { get; set; }
        [ForeignKey("ProductAffilateId")]
        public ProductAffilate ProductAffilate { get; set; }
        public Guid? FileStorageId { get; set; }
        [ForeignKey("FileStorageId")]
        public FileStorage FileStorage { get; set; }

        public string FileType => FileStorage?.Type;
    }
}
