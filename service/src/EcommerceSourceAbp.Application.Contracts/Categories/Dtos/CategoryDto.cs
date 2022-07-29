using EcommerceSourceAbp.BaseDtos;

namespace EcommerceSourceAbp.Categories.Dtos
{
    public class CategoryDto : ListBaseDto
    {
        public int Level { get; set; }
        public int? ParentId { get; set; }
    }
}
