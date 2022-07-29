using EcommerceSourceAbp.Tags.Dtos;

namespace EcommerceSourceAbp.Tags
{
    public interface ITagAppService : IAppBaseService<CreateUpdateTagDto, GetTagForViewDto, GetTagForEditDto, GetTagRequestInputDto>
    {
    }
}