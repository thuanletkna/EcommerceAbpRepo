using EcommerceSourceAbp.FilesStorage.Dtos;
using System;
using Volo.Abp.Application.Dtos;

namespace EcommerceSourceAbp.ProductAffilateFiles.Dtos
{
    public class CreateUpdateProductAffilateFileDto : EntityDto<Guid?>
    {
        public Guid? ProductAffilateId { get; set; }
        public Guid? FileStorageId { get; set; }
        public string FileType { get; set; }
        public FileStorageDto FilesStorage { get; set; }
    }
}