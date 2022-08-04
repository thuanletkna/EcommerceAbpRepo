using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.FilesStorage.Dtos;

namespace EcommerceSourceAbp.FilesStorage
{
    public class FileStorageAutoMapperProfile : Profile
    {
        public FileStorageAutoMapperProfile()
        {
            CreateMap<FileStorage, FileStorageDto>(MemberList.None);
        }
    }
}