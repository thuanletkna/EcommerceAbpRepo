using System;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities;

namespace EcommerceSourceAbp.Entities
{
    public class BlogFile : BasicAggregateRoot<Guid?>
    {
        public Guid? BlogId { get; set; }
        [ForeignKey("BlogId")]
        public Blog Blog { get; set; }
        public Guid? FileStorageId { get; set; }
        [ForeignKey("FileStorageId")]
        public FileStorage FileStorage { get; set; }

        public string FileType => FileStorage?.Type;
    }
}
