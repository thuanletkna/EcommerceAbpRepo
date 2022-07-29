using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using EcommerceSourceAbp.Data;
using Volo.Abp.DependencyInjection;

namespace EcommerceSourceAbp.EntityFrameworkCore;

public class EntityFrameworkCoreEcommerceSourceAbpDbSchemaMigrator
    : IEcommerceSourceAbpDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreEcommerceSourceAbpDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the EcommerceSourceAbpDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<EcommerceSourceAbpDbContext>()
            .Database
            .MigrateAsync();
    }
}
