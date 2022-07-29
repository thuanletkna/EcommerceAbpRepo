using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Tags.Dtos;
using System;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.Tags
{
    public class TagAppService : AppBaseService<Tag, CreateUpdateTagDto, GetTagForViewDto, GetTagForEditDto, GetTagRequestInputDto>,
        ITagAppService
    {

        public TagAppService(IRepository<Tag, Guid?> repository) : base(repository)
        {
        }

        protected override string GetPolicyName => String.Empty;

        protected override string GetListPolicyName => String.Empty;

        protected override string CreatePolicyName => String.Empty;
        protected override string UpdatePolicyName => String.Empty;

        protected override string DeletePolicyName => String.Empty;
    }
}