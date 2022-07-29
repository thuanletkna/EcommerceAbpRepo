using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Newses.Dtos;
using System;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.Newses
{
    public class NewsAppService :
        AppBaseService<News, CreateUpdateNewsDto, GetNewsForViewDto, GetNewsForEditDto, GetNewsRequestInputDto>,
        INewsAppService
    {

        public NewsAppService(IRepository<News, Guid?> repository) : base(repository)
        {
        }

        protected override string GetPolicyName =>string.Empty;
        protected override string GetListPolicyName => string.Empty;
        protected override string CreatePolicyName => string.Empty;
        protected override string UpdatePolicyName => string.Empty;
        protected override string DeletePolicyName => string.Empty;

        
    }
}
