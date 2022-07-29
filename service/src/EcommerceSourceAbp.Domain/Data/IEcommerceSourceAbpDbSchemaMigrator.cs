using System.Threading.Tasks;

namespace EcommerceSourceAbp.Data;

public interface IEcommerceSourceAbpDbSchemaMigrator
{
    Task MigrateAsync();
}
