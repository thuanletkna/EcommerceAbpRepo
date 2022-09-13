using AutoMapper;
using EcommerceSourceAbp.Contacts.Dtos;
using EcommerceSourceAbp.Entities;

namespace EcommerceSourceAbp.Contacts
{
    public class ContactAutoMapperProfile : Profile
    {
        public ContactAutoMapperProfile()
        {
            CreateMap<CreateUpdateContactDto, Contact>(MemberList.None);
            CreateMap<Contact, GetContactForUpdateDto>(MemberList.None);
            CreateMap<Contact, GetContactForViewDto>(MemberList.None);
            CreateMap<Contact, ContactDto>(MemberList.None);
            CreateMap<Contact, CreateUpdateContactDto>(MemberList.None);
        }
    }
}
