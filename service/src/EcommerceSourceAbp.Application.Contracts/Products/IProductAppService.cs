using EcommerceSourceAbp.ProductFiles.Dtos;
using EcommerceSourceAbp.Products.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EcommerceSourceAbp.Products
{
    public interface IProductAppService : IAppListService<CreateUpdateProductDto, GetProductForViewDto, GetProductForUpdateDto, GetProductRequestInputDto>
    {
        Task<List<GetProductFileForViewDto>> GetListFile(Guid id);
        Task<GetProductForViewDto> GetBySlugPublic(string slug);
        Task<GetProductForViewDto> GetByIdPublic(Guid id);
    }
}
