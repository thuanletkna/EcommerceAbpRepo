using Volo.Abp.Modularity;

namespace EcommerceSourceAbp;

[DependsOn(
    typeof(EcommerceSourceAbpApplicationModule),
    typeof(EcommerceSourceAbpDomainTestModule)
    )]
public class EcommerceSourceAbpApplicationTestModule : AbpModule
{

}
