namespace EcommerceSourceAbp.Permissions;

public static class EcommerceSourceAbpPermissions
{
    public const string GroupName = "EcommerceSourceAbp";

    public class Category
    {
        public const string Default = GroupName + ".Category";
        public const string Create = Default + ".Create";
        public const string View = Default + ".View";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }
    public class Product
    {
        public const string Default = GroupName + ".Product";
        public const string Create = Default + ".Create";
        public const string View = Default + ".View";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }
    public class TradeMark
    {
        public const string Default = GroupName + ".Trademark";
        public const string Create = Default + ".Create";
        public const string View = Default + ".View";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }
    public class ProductProperty
    {
        public const string Default = GroupName + ".ProductProperty";
        public const string Create = Default + ".Create";
        public const string View = Default + ".View";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }
    public class SubProductProperty
    {
        public const string Default = GroupName + ".SubProductProperty";
        public const string Create = Default + ".Create";
        public const string View = Default + ".View";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }
}
