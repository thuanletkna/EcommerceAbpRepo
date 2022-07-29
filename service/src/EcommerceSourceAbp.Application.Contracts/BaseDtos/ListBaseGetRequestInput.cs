using EcommerceSourceAbp.Enums;

namespace EcommerceSourceAbp.BaseDtos
{
    public class ListBaseGetRequestInput : BaseGetRequestInput
    {
        public Status? Status { get; set; }
    }
}
