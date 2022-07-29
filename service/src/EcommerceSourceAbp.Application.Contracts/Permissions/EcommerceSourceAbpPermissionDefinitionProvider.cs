using EcommerceSourceAbp.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace EcommerceSourceAbp.Permissions;

public class EcommerceSourceAbpPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(EcommerceSourceAbpPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(EcommerceSourceAbpPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<EcommerceSourceAbpResource>(name);
    }
}
