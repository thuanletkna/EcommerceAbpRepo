using EcommerceSourceAbp.BaseEntities;
using EcommerceSourceAbp.Constants;
using System;
using System.ComponentModel.DataAnnotations;

namespace EcommerceSourceAbp.Entities
{
    public class FileStorage : BaseEntity
    {
        [MaxLength(FileStorageConsts.TypeMaxLength)]
        public string Type { get; set; }
        public Guid? FileId { get; set; }
        [MaxLength(FileStorageConsts.PathMaxLength)]
        public string Path { get; set; }
        [MaxLength(FileStorageConsts.FileExtensionMaxLength)]
        public string FileExtension { get; set; }
        [MaxLength(FileStorageConsts.FileNameMaxLength)]
        public string FileName { get; set; }
        [MaxLength(FileStorageConsts.DownloadFileNameMaxLength)]
        public string DownloadFileName { get; set; }
    }
}
