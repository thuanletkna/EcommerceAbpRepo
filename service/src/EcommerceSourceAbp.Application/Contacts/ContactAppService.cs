using EcommerceSourceAbp.Categories.Dtos;
using EcommerceSourceAbp.Contacts.Dtos;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Enums;
using EcommerceSourceAbp.Permissions;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.Contacts
{
    public class ContactAppService :
        AppListService<Contact, CreateUpdateContactDto, GetContactForViewDto, GetContactForUpdateDto, GetContactRequestInputDto>,
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

        [AllowAnonymous]
        public async Task<List<GetContactForViewDto>> GetAllPublic()
        {
            var query = await Repository.GetQueryableAsync();
            var result = query.Where(x => x.Status == Status.Active);
               //.OrderBy(x => x.OrderIndex);
            return result.Select(MapToViewOutput).ToList();
        }
    }
}