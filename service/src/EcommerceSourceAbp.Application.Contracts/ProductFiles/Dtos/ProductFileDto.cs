using System;
using Volo.Abp.Application.Dtos;

namespace EcommerceSourceAbp.ProductFiles.Dtos
{
    public class ProductFileDto : EntityDto<Guid?>
    {
        public Guid? ProducttId { get; set; }
        public Guid? FileStorageId { get; set; }
        public string FileType { get; set; }
    }
}
