using EcommerceSourceAbp.BaseDtos;

namespace EcommerceSourceAbp.Newses.Dtos
{
    public class GetNewsRequestInputDto : BaseGetRequestInput
    {
        public bool? IsBlog { get; set; }
        public string CategorySlug { get; set; }
        public string TagSlug { get; set; }
    }
}
