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

        var trademark = myGroup.AddPermission(EcommerceSourceAbpPermissions.TradeMark.Default, L("TradeMark"));
        trademark.AddChild(EcommerceSourceAbpPermissions.TradeMark.View, L("Permission:View"));
        trademark.AddChild(EcommerceSourceAbpPermissions.TradeMark.Create, L("Permission:Create"));
        trademark.AddChild(EcommerceSourceAbpPermissions.TradeMark.Delete, L("Permission:Delete"));
        trademark.AddChild(EcommerceSourceAbpPermissions.TradeMark.Edit, L("Permission:Edit"));

        var productproperty = myGroup.AddPermission(EcommerceSourceAbpPermissions.ProductProperty.Default, L("ProductProperty"));
        productproperty.AddChild(EcommerceSourceAbpPermissions.ProductProperty.View, L("Permission:View"));
        productproperty.AddChild(EcommerceSourceAbpPermissions.ProductProperty.Create, L("Permission:Create"));
        productproperty.AddChild(EcommerceSourceAbpPermissions.ProductProperty.Delete, L("Permission:Delete"));
        productproperty.AddChild(EcommerceSourceAbpPermissions.ProductProperty.Edit, L("Permission:Edit"));

        var subproductproperty = myGroup.AddPermission(EcommerceSourceAbpPermissions.SubProductProperty.Default, L("SubProductProperty"));
        subproductproperty.AddChild(EcommerceSourceAbpPermissions.SubProductProperty.View, L("Permission:View"));
        subproductproperty.AddChild(EcommerceSourceAbpPermissions.SubProductProperty.Create, L("Permission:Create"));
        subproductproperty.AddChild(EcommerceSourceAbpPermissions.SubProductProperty.Delete, L("Permission:Delete"));
        subproductproperty.AddChild(EcommerceSourceAbpPermissions.SubProductProperty.Edit, L("Permission:Edit"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<EcommerceSourceAbpResource>(name);
    }
}
