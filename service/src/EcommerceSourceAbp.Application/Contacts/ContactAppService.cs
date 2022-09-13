using EcommerceSourceAbp.Contacts.Dtos;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Permissions;
using System;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.Contacts
{
    public class ContactAppService :
        AppListService<Contact, CreateUpdateContactDto, ContactDto, ContactDto, GetContactRequestInputDto>,
        IContactAppService
    {

        public ContactAppService(IRepository<Contact, Guid?> repository
           ) : base(repository)
        {
        }

        protected override string GetPolicyName => EcommerceSourceAbpPermissions.Contact.View;
        protected override string GetListPolicyName => EcommerceSourceAbpPermissions.Contact.Default;
        protected override string CreatePolicyName => EcommerceSourceAbpPermissions.Contact.Create;
        protected override string UpdatePolicyName => EcommerceSourceAbpPermissions.Contact.Edit;
        protected override string DeletePolicyName => EcommerceSourceAbpPermissions.Contact.Delete;


    }
}