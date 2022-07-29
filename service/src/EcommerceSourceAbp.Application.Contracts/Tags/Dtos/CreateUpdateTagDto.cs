using EcommerceSourceAbp.BaseDtos;

namespace EcommerceSourceAbp.Tags.Dtos
{
    public class CreateUpdateTagDto : BaseDto
    {
        public string Name { get; set; }
        public string Slug { get; set; }
    }
}
