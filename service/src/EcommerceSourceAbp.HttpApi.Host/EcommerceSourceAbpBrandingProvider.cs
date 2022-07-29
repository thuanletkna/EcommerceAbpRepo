using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace EcommerceSourceAbp;

[Dependency(ReplaceServices = true)]
public class EcommerceSourceAbpBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "EcommerceSourceAbp";
}
