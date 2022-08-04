using EcommerceSourceAbp.BaseDtos;
using System;

namespace EcommerceSourceAbp.FilesStorage.Dtos
{
    public class FileStorageDto : BaseDto
    {
        public string Type { get; set; }
        public Guid? NatsId { get; set; }
        public string Path { get; set; }
        public string FileExtension { get; set; }
        public string FileName { get; set; }
        public string DownloadFileName { get; set; }
    }
}