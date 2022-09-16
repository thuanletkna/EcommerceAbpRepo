using EcommerceSourceAbp.Categories.Dtos;
using EcommerceSourceAbp.Contacts.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EcommerceSourceAbp.Contacts
{
    public interface IContactAppService : IAppListService<CreateUpdateContactDto, GetContactForViewDto, GetContactForUpdateDto, GetContactRequestInputDto>
    {
        Task<List<GetContactForViewDto>> GetAllPublic();
    }
}
