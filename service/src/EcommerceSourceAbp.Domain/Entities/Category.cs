using EcommerceSourceAbp.BaseEntities;

namespace EcommerceSourceAbp.Entities
{
    public class Category : ListBaseEntity
    {
        public int Level { get; set; }
        public int? ParentId { get; set; }
    }
}
