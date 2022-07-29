using Volo.Abp.Application.Dtos;

namespace EcommerceSourceAbp.BaseDtos
{
    public class BaseGetRequestInput : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}
