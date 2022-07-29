using Volo.Abp.Application.Dtos;

namespace EcommerceSourceAbp.Newses.Dtos
{
    public class GetHighlightNewsRequestInputDto : PagedResultRequestDto
    {
        public string Filter { get; set; }
        public bool? IsBlog { get; set; }
        public string CategorySlug { get; set; }
        public string TagSlug { get; set; }
    }
}