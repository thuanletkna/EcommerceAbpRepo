using EcommerceSourceAbp.BaseEntities;
using EcommerceSourceAbp.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceSourceAbp.Entities
{
    public class Blog : ListBaseEntity
    {
        public string Descriptions { get; set; }
        public IsHot? isHot  { get; set; }
        public string Slug { get; set; }
        public Guid? CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public Category Category { get; set; }
        public ICollection<NewsTag> NewsTags { get; set; }
        public ICollection<BlogDetail> BlogDetails { get; set; }
        public ICollection<BlogFile> BlogFile { get; set; }
    }
}
