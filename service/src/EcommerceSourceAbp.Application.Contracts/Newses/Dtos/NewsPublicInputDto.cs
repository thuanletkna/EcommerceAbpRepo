using System;

namespace EcommerceSourceAbp.Newses.Dtos
{
    public class NewsPublicInputDto
    {
        public Guid? Id { get; set; }
        public bool IsPublic { get; set; }
    }
}
