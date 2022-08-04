using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using EcommerceSourceAbp.FilesStorage.Dtos;
using Volo.Abp.Application.Services;

namespace EcommerceSourceAbp.FilesStorage
{
    public interface IFileStorageAppService : IApplicationService
    {
        Task<List<FileStorageDto>> GetNatsFile(Guid? natsId);
        Task<FileStorageDto> GetDetail(Guid id);
        Task<List<Guid?>> Upload(string type);
        Task Delete(Guid id);
        Task<object> Get(Guid id);
        Task<object> Download(Guid id);
        Task<List<Guid?>> SaveNatsFile(Guid? natsId, string storage = "NatsCard");
    }
}
