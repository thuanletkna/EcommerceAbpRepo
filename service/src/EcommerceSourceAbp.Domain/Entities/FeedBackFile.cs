using System;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities;

namespace EcommerceSourceAbp.Entities
{
    public class FeedBackFile : BasicAggregateRoot<Guid?>
    {
        public Guid? FeedBackId { get; set; }
        [ForeignKey("FeedBackId")]
        public Feedback Feedback { get; set; }
        public Guid? FileStorageId { get; set; }
        [ForeignKey("FileStorageId")]
        public FileStorage FileStorage { get; set; }

        public string FileType => FileStorage?.Type;
    }
}

