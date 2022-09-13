using EcommerceSourceAbp.BaseDtos;
using System;

namespace EcommerceSourceAbp.BlogFiles.Dtos
{
    public class GetBlogFileRequestInputDto : BaseGetRequestInput
    {
        public Guid? BlogId { get; set; }
        public Guid? FileStorageId { get; set; }
        public string FileType { get; set; }
    }
}
