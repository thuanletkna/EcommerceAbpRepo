using EcommerceSourceAbp.BaseDtos;
using System;

namespace EcommerceSourceAbp.Newses.Dtos
{
    public class GetRelatedNewsRequestInputDto : BaseGetRequestInput
    {
        public Guid Id { get; set; }
        public string CategorySlug { get; set; }
        public string TagSlug { get; set; }
    }
}