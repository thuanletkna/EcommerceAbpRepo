using EcommerceSourceAbp.BaseEntities;

namespace EcommerceSourceAbp.Entities
{
    public class Contact : ListBaseEntity
    {
        public string Descriptions { get; set; }
        public int Phone { get; set; }
        public string Email { get; set; }
        public string Facebook { get; set; }
        public string Zalo { get; set; }
        public string Shopee { get; set; }
    }
}
