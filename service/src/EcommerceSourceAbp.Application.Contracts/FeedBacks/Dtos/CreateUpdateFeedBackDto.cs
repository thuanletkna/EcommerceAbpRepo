using EcommerceSourceAbp.BaseDtos;
using EcommerceSourceAbp.FeedBackFiles.Dtos;
using System.Collections.Generic;

namespace EcommerceSourceAbp.FeedBacks.Dtos
{
    public class CreateUpdateFeedBackDto : ListBaseDto
    {
        public string Descriptions { get; set; }
        public List<CreateUpdateFeedBackFileDto> FeedBackFiles { get; set; }
    }
}
