using EcommerceSourceAbp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace EcommerceSourceAbp;

[DependsOn(
    typeof(EcommerceSourceAbpEntityFrameworkCoreTestModule)
    )]
public class EcommerceSourceAbpDomainTestModule : AbpModule
{

}
