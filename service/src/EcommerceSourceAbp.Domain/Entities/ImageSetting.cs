using EcommerceSourceAbp.BaseEntities;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities;

namespace EcommerceSourceAbp.Entities
{
    public class ImageSetting : BasicAggregateRoot<Guid?>
    {
        public Guid? FileStorageId { get; set; }
        [ForeignKey("FileStorageId")]
        public FileStorage FileStorage { get; set; }
        public string FileType => FileStorage?.Type;
        public Guid? HomePageConfigId { get; set; }
        [ForeignKey("HomePageConfigId")]
        public HomePageConfig HomePageConfig { get; set; }
    }
}
