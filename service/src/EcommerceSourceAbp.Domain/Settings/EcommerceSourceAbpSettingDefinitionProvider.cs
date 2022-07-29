using Volo.Abp.Settings;

namespace EcommerceSourceAbp.Settings;

public class EcommerceSourceAbpSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(EcommerceSourceAbpSettings.MySetting1));
    }
}
