using EcommerceSourceAbp.BaseEntities;
using EcommerceSourceAbp.Constants;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceSourceAbp.Entities
{
    public class News : BaseEntity
    {
        [MaxLength(NewsContst.TitleMaxLength)]
        public string Slug { get; set; }
        public Guid? CategoryId { get; set; }
        [MaxLength(NewsContst.TitleMaxLength)]
        public string Title { get; set; }
        [MaxLength(NewsContst.DescriptionMaxLength)]
        public string Description { get; set; }
        [Column(TypeName = "ntext")]
        public string Content { get; set; }
        public bool IsPublic { get; set; }
        public DateTime? PublicDate { get; set; }
        [MaxLength(NewsContst.ThumbnailMaxLength)]
        public string Thumbnail { get; set; }

        public bool IsHighlight { get; set; }
        public int? HighlightIndex { get; set; }

        public int View { get; set; }
        public bool IsHot { get; set; }
        public int? HotIndex { get; set; }
        public Category Category { get; set; }
        public ICollection<NewsTag> NewsTags { get; set; }
    }
}
