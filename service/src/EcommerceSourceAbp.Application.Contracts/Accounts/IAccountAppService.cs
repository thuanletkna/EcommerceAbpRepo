using EcommerceSourceAbp.Accounts.Dtos;
using EcommerceSourceAbp.Enums;
using EcommerceSourceAbp.PasswordResets.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace EcommerceSourceAbp.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        //Task<Guid?> Register(AccountRegisterInputDto input);

        //Task<bool> ResendActiveCode();

        //Task<AccountActiveStatus> Activate(string activeCode);

        //Task<bool> UpdateProfile(AccountUpdateBasicInfoInputDto input);

        Task<AccountInfoDto> GetMyProfile();

        //Task<List<AccountInfoDto>> GetByUserIds(List<Guid?> userIds);

        //Task RequestChangePassword(RequestChangePasswordDto input);

        //Task<bool> ValidChangePasswordCode(Guid code);

        //Task ChangePassword(ChangePasswordByCodeInputDto input);

        //Task<PagedResultDto<AccountInfoDto>> GetPaged(GetECommerceProfileInput input);

        //Task<AccountInfoDto> Get(Guid? id);

        //Task<bool> SetStatus(SetAccountStatusInputDto userId);

        //Task<AccountInfoDto> GetProfileByUserId(Guid? userId);

    }
}