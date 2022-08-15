using System;
using Volo.Abp.Application.Dtos;

namespace EcommerceSourceAbp.BlogFiles.Dtos
{
    public class CreateUpdateBlogFileDto : EntityDto<Guid?>
    {
        public Guid? BlogtId { get; set; }
        public Guid? FileStorageId { get; set; }
        public string FileType { get; set; }
    }
}
