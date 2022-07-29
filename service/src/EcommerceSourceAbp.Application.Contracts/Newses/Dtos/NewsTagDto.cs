using System;
using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.Tags.Dtos;

namespace EcommerceSourceAbp.Newses.Dtos
{
    public class NewsTagDto : BaseDto
    {
        public Guid? NewsId { get; set; }
        public Guid? TagId { get; set; }
        public TagDto Tag { get; set; }
    }
}
