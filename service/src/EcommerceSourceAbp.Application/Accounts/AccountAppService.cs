using EcommerceSourceAbp.Accounts.Dtos;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Enums;
using EcommerceSourceAbp.PasswordResets.Dtos;
using EcommerceSourceAbp.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Emailing;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Identity;

namespace EcommerceSourceAbp.Accounts
{
    public class AccountAppService : EcommerceSourceAbpAppService, IAccountAppService
    {
        private readonly IdentityUserManager _identityUserManager;
        private readonly IRepository<AppUser> _appUserRepository;
        private readonly IRepository<PasswordReset> _passwordResetRepository;
        private readonly IRepository<ECommerceProfile, Guid?> _eCommerceProfileRepository;
        private readonly IEmailSender _emailSender;
        private readonly IConfiguration _configuration;
        private readonly IDistributedEventBus _distributedEventBus;
        public AccountAppService(IdentityUserManager identityUserManager,
            IRepository<ECommerceProfile, Guid?> eCommerceProfileRepository,
            IRepository<AppUser> appUserRepository,
            IRepository<PasswordReset> passwordResetRepository,
            IEmailSender emailSender,
            IConfiguration configuration, IDistributedEventBus distributedEventBus)
           
        {
            _identityUserManager = identityUserManager;
            _eCommerceProfileRepository = eCommerceProfileRepository;
            _appUserRepository = appUserRepository;
            _passwordResetRepository = passwordResetRepository;
            _emailSender = emailSender;
            _configuration = configuration;
            _distributedEventBus = distributedEventBus;
        }
        [Authorize]
        public async Task<AccountInfoDto> GetMyProfile()
        {
            var profile = await _eCommerceProfileRepository
                //.Include(x => x.Province)
                //.Include(x => x.District)
                //.Include(x => x.Ward)
                //.Include(x => x.MembershipClass)
                .FirstOrDefaultAsync(x => x.UserId == CurrentUser.Id);


            if (profile == null)
            {
                return new AccountInfoDto
                {
                    PhoneNumber = CurrentUser.PhoneNumber,
                    Email = CurrentUser.Email,
                    FullName = CurrentUser.Name,
                };
            }

            AccountInfoDto result;

            result = ObjectMapper.Map<ECommerceProfile, AccountInfoDto>(profile);

            if (profile.IsFirstLogin)
            {
                profile.IsFirstLogin = false;
                result.Id = null;
            }

            return result;
        }
    }
}