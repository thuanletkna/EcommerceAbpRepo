using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.FeedBackFiles.Dtos;
using System;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.FeedBackFiles
{
    public class FeedBackFileAppService : AppBaseService<FeedBackFile, CreateUpdateFeedBackFileDto, GetFeedBackFileForViewDto, GetFeedBackFileForEditDto, GetFeedBackFileRequestInputDto>, IFeedBackFileAppService
    {
        private readonly IRepository<FeedBackFile, Guid?> _BlogRepository;
        public FeedBackFileAppService(IRepository<FeedBackFile, Guid?> repository) : base(repository)
        {
        }

        protected override string GetPolicyName => String.Empty;

        protected override string GetListPolicyName => String.Empty;

        protected override string CreatePolicyName => String.Empty;

        protected override string UpdatePolicyName => String.Empty;

        protected override string DeletePolicyName => String.Empty;

    }
}