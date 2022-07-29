using EcommerceSourceAbp.Newses.Dtos;
using System.Threading.Tasks;

namespace EcommerceSourceAbp.Newses
{
    public interface INewsAppService :
        IAppBaseService<CreateUpdateNewsDto, GetNewsForViewDto, GetNewsForEditDto, GetNewsRequestInputDto>
    {
        //Task Public(NewsPublicInputDto input);
        //Task<GetNewsForViewDto> GetBySlug(string slug);
        //Task<TagDto> GetTagBySlug(string slug);
    }
}
