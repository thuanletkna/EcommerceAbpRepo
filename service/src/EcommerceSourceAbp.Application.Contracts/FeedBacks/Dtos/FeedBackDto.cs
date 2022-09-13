using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.BlogFiles.Dtos;
using EcommerceSourceAbp.FeedBackFiles.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace EcommerceSourceAbp.FeedBacks.Dtos
{
    public class FeedBackDto : ListBaseDto
    {
        public string Descriptions { get; set; }
        public List<CreateUpdateFeedBackFileDto> FeedBackFiles { get; set; }
    }
}
