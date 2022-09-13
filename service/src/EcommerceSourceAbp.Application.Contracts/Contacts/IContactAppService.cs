using EcommerceSourceAbp.Contacts.Dtos;

namespace EcommerceSourceAbp.Contacts
{
    public interface IContactAppService : IAppListService<CreateUpdateContactDto, ContactDto, ContactDto, GetContactRequestInputDto>
    {
    }
}
