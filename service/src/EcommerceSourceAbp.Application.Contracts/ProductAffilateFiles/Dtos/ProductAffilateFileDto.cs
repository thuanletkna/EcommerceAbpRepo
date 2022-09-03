using EcommerceSourceAbp.FilesStorage.Dtos;
using System;
using Volo.Abp.Application.Dtos;

namespace EcommerceSourceAbp.ProductAffilateFiles.Dtos
{
    public class ProductAffilateFileDto : EntityDto<Guid?>
    {
        public Guid? ProductAffilateId { get; set; }
        public Guid? FileStorageId { get; set; }
        public string FileType { get; set; }
        public FileStorageDto FilesStorage { get; set; }
    }
}
