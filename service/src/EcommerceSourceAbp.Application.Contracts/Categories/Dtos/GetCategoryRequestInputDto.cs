using EcommerceSourceAbp.BaseDtos;

namespace EcommerceSourceAbp.Categories.Dtos
{
    public class GetCategoryRequestInputDto : ListBaseGetRequestInput
    {
        public int Level { get; set; }
        public int? ParentId { get; set; }
    }
}
