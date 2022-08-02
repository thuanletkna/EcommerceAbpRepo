using EcommerceSourceAbp.BaseDtos;
using System;

namespace EcommerceSourceAbp.ProductFiles.Dtos
{
    public class GetProductFileRequestInputDto : BaseGetRequestInput
    {
        public Guid? ProducttId { get; set; }
        public Guid? FileStorageId { get; set; }
        public string FileType { get; set; }
    }
}
