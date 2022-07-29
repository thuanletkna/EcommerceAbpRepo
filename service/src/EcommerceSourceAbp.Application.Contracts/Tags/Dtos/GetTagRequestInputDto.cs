
using EcommerceSourceAbp.BaseDtos;

namespace EcommerceSourceAbp.Tags.Dtos
{
    public class GetTagRequestInputDto : BaseGetRequestInput
    {
        public string Slug { get; set; }
    }
}