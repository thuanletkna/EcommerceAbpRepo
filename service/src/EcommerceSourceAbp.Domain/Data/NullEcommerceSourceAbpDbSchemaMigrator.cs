using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace EcommerceSourceAbp.Data;

/* This is used if database provider does't define
 * IEcommerceSourceAbpDbSchemaMigrator implementation.
 */
public class NullEcommerceSourceAbpDbSchemaMigrator : IEcommerceSourceAbpDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
