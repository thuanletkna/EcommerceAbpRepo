using EcommerceSourceAbp.BaseDtos;

namespace EcommerceSourceAbp.Contacts.Dtos
{
    public class ContactDto : ListBaseDto
    {
        public string Descriptions { get; set; }
        public string Address { get; set; }
        public int Phone { get; set; }
        public string Email { get; set; }
        public string Facebook { get; set; }
        public string Zalo { get; set; }
        public string Shopee { get; set; }
    }
}
