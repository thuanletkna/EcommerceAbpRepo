using System;

namespace EcommerceSourceAbp.Newses.Dtos
{
    public class GetNewsForEditDto : CreateUpdateNewsDto
    {
        public bool IsPublic { get; set; }
        public DateTime? PublicDate { get; set; }
    }
}
