using EcommerceSourceAbp.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace EcommerceSourceAbp.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(EcommerceSourceAbpEntityFrameworkCoreModule),
    typeof(EcommerceSourceAbpApplicationContractsModule)
    )]
public class EcommerceSourceAbpDbMigratorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
    }
}
