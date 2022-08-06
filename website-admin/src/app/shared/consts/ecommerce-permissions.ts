export class EcommerceSourceAbpPermissions {
  private static GroupName = 'EcommerceSourceAbp';

  static Role = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.Role',
    View: EcommerceSourceAbpPermissions.GroupName + '.Role.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.Role.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.Role.Edit',
    Delete: EcommerceSourceAbpPermissions.GroupName + '.Role.Delete',
  };

  static Category = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.Category',
    View: EcommerceSourceAbpPermissions.GroupName + '.Category.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.Category.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.Category.Edit',
    //Delete: EcommerceSourceAbpPermissions.GroupName + '.Category.Delete',
  };

  static Product = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.Product',
    View: EcommerceSourceAbpPermissions.GroupName + '.Product.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.Product.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.Product.Edit',
    //Delete: EcommerceSourceAbpPermissions.GroupName + '.Product.Delete',
  };

  static TradeMark = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.TradeMark',
    View: EcommerceSourceAbpPermissions.GroupName + '.TradeMark.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.TradeMark.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.TradeMark.Edit',
    Delete: EcommerceSourceAbpPermissions.GroupName + '.TradeMark.Delete',
  };
  
  static ProductProperty = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.ProductProperty',
    View: EcommerceSourceAbpPermissions.GroupName + '.ProductProperty.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.ProductProperty.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.ProductProperty.Edit',
    Delete: EcommerceSourceAbpPermissions.GroupName + '.ProductProperty.Delete',
  };

  static SubProductProperty = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.SubProductProperty',
    View: EcommerceSourceAbpPermissions.GroupName + '.SubProductProperty.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.SubProductProperty.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.SubProductProperty.Edit',
    Delete: EcommerceSourceAbpPermissions.GroupName + '.SubProductProperty.Delete',
  };

  static Blog = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.Blog',
    View: EcommerceSourceAbpPermissions.GroupName + '.Blog.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.Blog.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.Blog.Edit',
    Delete: EcommerceSourceAbpPermissions.GroupName + '.Blog.Delete',
  };

  static BlogDetail = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.BlogDetail',
    View: EcommerceSourceAbpPermissions.GroupName + '.BlogDetail.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.BlogDetail.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.BlogDetail.Edit',
    Delete: EcommerceSourceAbpPermissions.GroupName + '.BlogDetail.Delete',
  };
  
  static SubCategorySelection = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.SubCategorySelection',
    View: EcommerceSourceAbpPermissions.GroupName + '.SubCategorySelection.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.SubCategorySelection.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.SubCategorySelection.Edit',
  }

  static Staff = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.Staff',
    View: EcommerceSourceAbpPermissions.GroupName + '.Staff.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.Staff.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.Staff.Edit',
    Delete: EcommerceSourceAbpPermissions.GroupName + '.Staff.Delete',
  };

  static Team = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.Team',
    View: EcommerceSourceAbpPermissions.GroupName + '.Team.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.Team.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.Team.Edit',
    //Delete: EcommerceSourceAbpPermissions.GroupName + '.Team.Delete',
  };



  static ViewUnlimitedYear = {
      Default: EcommerceSourceAbpPermissions.GroupName + '.ViewUnlimitedYear'
  }

}
