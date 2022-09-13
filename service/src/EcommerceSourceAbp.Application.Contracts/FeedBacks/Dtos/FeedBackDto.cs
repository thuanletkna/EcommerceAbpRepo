using EcommerceSourceAbp.BaseDtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace EcommerceSourceAbp.FeedBacks.Dtos
{
    public class FeedBackDto : ListBaseDto
    {
        public string Descriptions { get; set; }
        public ICollection<FeedBackFile> FeedBackFile { get; set; }
    }
}
