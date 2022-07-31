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

        var category = myGroup.AddPermission(EcommerceSourceAbpPermissions.Category.Default, L("Category"));
        category.AddChild(EcommerceSourceAbpPermissions.Category.View, L("Permission:View"));
        category.AddChild(EcommerceSourceAbpPermissions.Category.Create, L("Permission:Create"));
        category.AddChild(EcommerceSourceAbpPermissions.Category.Delete, L("Permission:Delete"));
        category.AddChild(EcommerceSourceAbpPermissions.Category.Edit, L("Permission:Edit"));

        var product = myGroup.AddPermission(EcommerceSourceAbpPermissions.Product.Default, L("Product"));
        product.AddChild(EcommerceSourceAbpPermissions.Product.View, L("Permission:View"));
        product.AddChild(EcommerceSourceAbpPermissions.Product.Create, L("Permission:Create"));
        product.AddChild(EcommerceSourceAbpPermissions.Product.Delete, L("Permission:Delete"));
        product.AddChild(EcommerceSourceAbpPermissions.Product.Edit, L("Permission:Edit"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<EcommerceSourceAbpResource>(name);
    }
}
