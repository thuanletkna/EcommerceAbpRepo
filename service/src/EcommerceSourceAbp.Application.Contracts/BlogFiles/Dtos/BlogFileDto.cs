using EcommerceSourceAbp.FilesStorage.Dtos;
using System;
using Volo.Abp.Application.Dtos;

namespace EcommerceSourceAbp.BlogFiles.Dtos
{
    public class BlogFileDto : EntityDto<Guid?>
    {
        public Guid? BlogtId { get; set; }
        public Guid? FileStorageId { get; set; }
        public string FileType { get; set; }
        public FileStorageDto FilesStorage { get; set; }
    }
}
