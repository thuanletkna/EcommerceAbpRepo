using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace EcommerceSourceAbp.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class EcommerceSourceAbpDbContextFactory : IDesignTimeDbContextFactory<EcommerceSourceAbpDbContext>
{
    public EcommerceSourceAbpDbContext CreateDbContext(string[] args)
    {
        EcommerceSourceAbpEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<EcommerceSourceAbpDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new EcommerceSourceAbpDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../EcommerceSourceAbp.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
