using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.FilesStorage.Dtos;
using EcommerceSourceAbp.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.BlobStoring;
using Volo.Abp.Data;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.MultiTenancy;

namespace EcommerceSourceAbp.FilesStorage
{
    [Authorize]
    public class FileStorageAppService : EcommerceSourceAbpAppService, IFileStorageAppService
    {
        private readonly IRepository<FileStorage, Guid?> _fileStorageRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IBlobContainer _blobContainer;
        private readonly IDataFilter _dataFilter;
        public FileStorageAppService(IRepository<FileStorage, Guid?> fileStorageRepository,
            IHttpContextAccessor httpContextAccessor, IBlobContainer blobContainer, IDataFilter dataFilter)
        {
            _fileStorageRepository = fileStorageRepository;
            _httpContextAccessor = httpContextAccessor;
            _blobContainer = blobContainer;
            _dataFilter = dataFilter;
        }

        public async Task<List<Guid?>> Upload([FromQuery] string type)
        {
            return await SaveFile(_httpContextAccessor.HttpContext?.Request, type);
        }


        public async Task<FileStorageDto> GetDetail(Guid id)
        {
            var result = await _fileStorageRepository.FirstOrDefaultAsync(x => x.Id == id);

            return result == null ? null : ObjectMapper.Map<FileStorage, FileStorageDto>(result);
        }

        public async Task Delete(Guid id)
        {
            var fileStorage = await _fileStorageRepository.GetAsync(id);
            if (fileStorage == null) return;

            var filePath = GetFilePath(fileStorage);

            await _fileStorageRepository.DeleteAsync(fileStorage);
            await _blobContainer.DeleteAsync(filePath);
        }

        [AllowAnonymous]
        public async Task<object> Get(Guid id)
        {
            var fileStorage = await _fileStorageRepository.GetAsync(id);
            if (fileStorage == null) return null;

            var filePath = GetFilePath(fileStorage);

            var bytes = await _blobContainer.GetAllBytesOrNullAsync(filePath);

            if (bytes == null) return null;

            var result = new FileStreamResult(new MemoryStream(bytes), FileHelper.GetMimeType(fileStorage.FileExtension));

            return result;
        }

        [HttpGet]
        public async Task<object> Download(Guid id)
        {
            var fileStorage = await _fileStorageRepository.GetAsync(id);
            if (fileStorage == null) throw NotFoundException;
            var filePath = GetFilePath(fileStorage);

            var bytes = await _blobContainer.GetAllBytesOrNullAsync(filePath);

            if (bytes == null) throw NotFoundException;

            var result = new FileStreamResult(new MemoryStream(bytes), FileHelper.GetMimeType(fileStorage.FileExtension))
            {
                FileDownloadName = fileStorage.DownloadFileName
            };

            return result;
        }

        public async Task<List<FileStorageDto>> GetNatsFile(Guid? natsId)
        {
            _dataFilter.Disable<IMultiTenant>();
            var entity = await _fileStorageRepository.GetQueryableAsync();
            var fileStorage = await entity.Where(x => x.Id == natsId).ToListAsync();
            if (fileStorage == null) return null;
            return ObjectMapper.Map<List<FileStorage>, List<FileStorageDto>>(fileStorage);
        }

        public async Task<List<Guid?>> SaveNatsFile(Guid? natsId, string storage = "NatsCard")
        {
            return await SaveFile(_httpContextAccessor.HttpContext?.Request, storage, natsId);
        }

        private string GetFilePath(FileStorage fileStorage)
        {
            var filePath = $"{fileStorage.Path}/{fileStorage.FileName}";
            if (fileStorage.FileId.HasValue)
            {
                filePath = $"{fileStorage.FileId}/{filePath}";
            }

            if (!string.IsNullOrWhiteSpace(fileStorage.Type))
            {
                filePath = $"{fileStorage.Type}/{filePath}";
            }

            return filePath;
        }

        private async Task<List<Guid?>> SaveFile(HttpRequest request, string type)
        {
            return await SaveFile(request, type, null);
        }
        private async Task<List<Guid?>> SaveFile(HttpRequest request, string type, Guid? natsId)
        {
            var files = request?.Form?.Files;

            if (files == null || files.Count == 0) return null;

            var result = new List<Guid?>();

            foreach (var file in files)
            {
                var fileStorage = await _fileStorageRepository.InsertAsync(new FileStorage());
                await CurrentUnitOfWork.SaveChangesAsync();

                fileStorage.Type = type;
                fileStorage.FileId = natsId;
                fileStorage.FileExtension = Path.GetExtension(file.FileName);
                fileStorage.FileName = fileStorage.Id + fileStorage.FileExtension;
                fileStorage.Path = $"{fileStorage.CreationTime.Year}/{fileStorage.CreationTime.Month:00}/{fileStorage.CreationTime.Day:00}";
                fileStorage.DownloadFileName = file.FileName;

                var filePath = GetFilePath(fileStorage);

                await _blobContainer.SaveAsync(filePath, await file.GetAllBytesAsync());

                result.Add(fileStorage.Id);
            }

            return result;
        }
    }
}
