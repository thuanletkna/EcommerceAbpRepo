using EcommerceSourceAbp.BlogFiles.Dtos;
using EcommerceSourceAbp.Entities;
using System;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.BlogFiles
{
    public class BlogFileAppService : AppBaseService<BlogFile, CreateUpdateBlogFileDto, GetBlogFileForViewDto, GetBlogFileForEditDto, GetBlogFileRequestInputDto>, IBlogFileAppService
    {
        private readonly IRepository<BlogFile, Guid?> _BlogRepository;
        public BlogFileAppService(IRepository<BlogFile, Guid?> repository) : base(repository)
        {
        }

        protected override string GetPolicyName => String.Empty;

        protected override string GetListPolicyName => String.Empty;

        protected override string CreatePolicyName => String.Empty;

        protected override string UpdatePolicyName => String.Empty;

        protected override string DeletePolicyName => String.Empty;

    }
}