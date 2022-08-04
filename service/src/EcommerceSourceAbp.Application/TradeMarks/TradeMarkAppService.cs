using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Permissions;
using EcommerceSourceAbp.TradeMarks.Dtos;
using System;
using Volo.Abp.Domain.Repositories;

namespace EcommerceSourceAbp.TradeMarks
{
    public class TradeMarkAppService : AppListService<TradeMark, CreateUpdateTradeMarkDto, GetTradeMarkForViewDto, GetTradeMarkForEditDto, GetTradeMarkRequestInputDto>,
        ITradeMarkAppService
    {
        public TradeMarkAppService(IRepository<TradeMark, Guid?> repository) : base(repository)
        {
        }
        protected override string GetPolicyName => EcommerceSourceAbpPermissions.TradeMark.View;
        protected override string GetListPolicyName => EcommerceSourceAbpPermissions.TradeMark.Default;
        protected override string CreatePolicyName => EcommerceSourceAbpPermissions.TradeMark.Create;
        protected override string UpdatePolicyName => EcommerceSourceAbpPermissions.TradeMark.Edit;
        protected override string DeletePolicyName => EcommerceSourceAbpPermissions.TradeMark.Delete;

    }
}
