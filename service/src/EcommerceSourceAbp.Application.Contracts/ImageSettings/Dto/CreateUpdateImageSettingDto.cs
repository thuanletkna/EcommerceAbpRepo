using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.FilesStorage.Dtos;
using System;
using Volo.Abp.Application.Dtos;

namespace EcommerceSourceAbp.ImageSettings.Dto
{
    public class CreateUpdateImageSettingDto : EntityDto<Guid?>
    {
        public Guid? HomePageConfigId { get; set; }
        public Guid? FileStorageId { get; set; }
        public string FileType { get; set; }
    }
}