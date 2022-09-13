using EcommerceSourceAbp.FilesStorage.Dtos;
using System;
using Volo.Abp.Application.Dtos;

namespace EcommerceSourceAbp.FeedBackFiles.Dtos
{
    public class FeedBackFileDto : EntityDto<Guid?>
    {
        public Guid? FeedBackId { get; set; }
        public Guid? FileStorageId { get; set; }
        public string FileType { get; set; }
        public FileStorageDto FilesStorage { get; set; }
    }
}
