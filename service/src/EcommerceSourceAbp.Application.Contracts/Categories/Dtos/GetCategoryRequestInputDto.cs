using EcommerceSourceAbp.BaseDtos;

namespace EcommerceSourceAbp.Categories.Dtos
{
    public class GetCategoryRequestInputDto : ListBaseGetRequestInput
    {
        public bool? IsBlog { get; set; }
    }
}
