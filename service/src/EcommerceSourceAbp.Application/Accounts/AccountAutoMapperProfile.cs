using AutoMapper;
using EcommerceSourceAbp.Accounts.Dtos;
using EcommerceSourceAbp.Entities;

namespace EcommerceSourceAbp.Accounts
{
    public class AccountAutoMapperProfile : Profile
    {
        public AccountAutoMapperProfile()
        {
            CreateMap<ECommerceProfile, AccountInfoDto>(MemberList.None);
            CreateMap<AccountUpdateBasicInfoInputDto, ECommerceProfile>(MemberList.None);
        }
    }
}
