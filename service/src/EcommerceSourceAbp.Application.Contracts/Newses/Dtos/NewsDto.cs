using System;
using System.Collections.Generic;
using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.Categories.Dtos;
using EcommerceSourceAbp.MetaSeos.Dtos;

namespace EcommerceSourceAbp.Newses.Dtos
{
    public class NewsDto : BaseDto
    {
        public string Slug { get; set; }
        public Guid? CategoryId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public bool IsPublic { get; set; }
        public DateTime? PublicDate { get; set; }
        public string Thumbnail { get; set; }
        public int View { get; set; }
        public bool IsHot { get; set; }
        public int? HotIndex { get; set; }
        public bool IsHighlight { get; set; }
        public int? HighlightIndex { get; set; }

        public GetCategoryForViewDto Category { get; set; }
        public List<NewsTagDto> NewsTags { get; set; }
        public List<MetaSeoDto> MetaSeo { get; set; }
    }
}
