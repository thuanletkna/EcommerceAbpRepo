using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.Constants;
using EcommerceSourceAbp.MetaSeos.Dtos;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace EcommerceSourceAbp.Newses.Dtos
{
    public class CreateUpdateNewsDto : BaseDto
    {
        [MaxLength(NewsContst.TitleMaxLength)]
        public string Slug { get; set; }
        [Required]
        public Guid? CategoryId { get; set; }
        [Required]
        [MaxLength(NewsContst.TitleMaxLength)]
        public string Title { get; set; }
        [Required]
        [MaxLength(NewsContst.DescriptionMaxLength)]
        public string Description { get; set; }
        [Required]
        public string Content { get; set; }
        [Required]
        [MaxLength(NewsContst.ThumbnailMaxLength)]
        public string Thumbnail { get; set; }
        public int View { get; set; }
        public bool IsHot { get; set; }
        public int? HotIndex { get; set; }
        public bool IsHighlight { get; set; }
        public int? HighlightIndex { get; set; }
        public List<string> Tags { get; set; }

        public List<MetaSeoDto> MetaSeo { get; set; }
    }
}
