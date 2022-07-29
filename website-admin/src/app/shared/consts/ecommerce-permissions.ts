export class EcommerceSourceAbpPermissions {
  private static GroupName = 'EcommerceSourceAbp';

  static Role = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.Role',
    View: EcommerceSourceAbpPermissions.GroupName + '.Role.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.Role.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.Role.Edit',
    Delete: EcommerceSourceAbpPermissions.GroupName + '.Role.Delete',
  };

  static Location = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.Location',
    View: EcommerceSourceAbpPermissions.GroupName + '.Location.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.Location.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.Location.Edit',
    //Delete: EcommerceSourceAbpPermissions.GroupName + '.Location.Delete',
  };

  static Department = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.Department',
    View: EcommerceSourceAbpPermissions.GroupName + '.Department.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.Department.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.Department.Edit',
    //Delete: EcommerceSourceAbpPermissions.GroupName + '.Department.Delete',
  };

  static Category = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.Category',
    View: EcommerceSourceAbpPermissions.GroupName + '.Category.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.Category.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.Category.Edit',
    //Delete: EcommerceSourceAbpPermissions.GroupName + '.Category.Delete',
  };

  static SubCategory = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.SubCategory',
    View: EcommerceSourceAbpPermissions.GroupName + '.SubCategory.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.SubCategory.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.SubCategory.Edit',
    //Delete: EcommerceSourceAbpPermissions.GroupName + '.SubCategory.Delete',
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

  static Target = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.Target',
    View: EcommerceSourceAbpPermissions.GroupName + '.Target.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.Target.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.Target.Edit',
    //Delete: EcommerceSourceAbpPermissions.GroupName + '.Target.Delete',
  };

  static Nats = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.Nats',
    View: EcommerceSourceAbpPermissions.GroupName + '.Nats.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.Nats.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.Nats.Edit',
    //Delete: EcommerceSourceAbpPermissions.GroupName + '.Nats.Delete',
    Import: EcommerceSourceAbpPermissions.GroupName + '.Nats.Import',
    Export: EcommerceSourceAbpPermissions.GroupName + '.Nats.Export',
  };

  static Configuration = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.Configuration',
    View: EcommerceSourceAbpPermissions.GroupName + '.Configuration.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.Configuration.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.Configuration.Edit',
    //Delete: EcommerceSourceAbpPermissions.GroupName + '.Configuration.Delete',
  };

  static ViewUnlimitedYear = {
      Default: EcommerceSourceAbpPermissions.GroupName + '.ViewUnlimitedYear'
  }

  static SiteSetting = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.SiteSetting',
    EditLogo: EcommerceSourceAbpPermissions.GroupName + '.SiteSetting.EditLogo',
    EditBanner: EcommerceSourceAbpPermissions.GroupName + '.SiteSetting.EditBanner',
    EditContact: EcommerceSourceAbpPermissions.GroupName + '.SiteSetting.EditContact',
  };

  static ConfigTopAchiever = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.ConfigTopAchiever',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.ConfigTopAchiever.Edit'
  };

  static MasterListManagement = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.MasterListManagement',
    View: EcommerceSourceAbpPermissions.GroupName + '.MasterListManagement.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.MasterListManagement.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.MasterListManagement.Edit',
    //Delete: EcommerceSourceAbpPermissions.GroupName + '.MasterListManagement.Delete',
  };

  static EmailOfEvent = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.EmailOfEvent',
    View: EcommerceSourceAbpPermissions.GroupName + '.EmailOfEvent.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.EmailOfEvent.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.EmailOfEvent.Edit',
    //Delete: EcommerceSourceAbpPermissions.GroupName + '.MasterListManagement.Delete',
  };
  static EmailReTarget = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.EmailReTarget',
    View: EcommerceSourceAbpPermissions.GroupName + '.EmailReTarget.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.EmailReTarget.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.EmailReTarget.Edit',
    //Delete: EcommerceSourceAbpPermissions.GroupName + '.EmailReTarget.Delete',
  };
  static EmailReMinder = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.EmailReMinder',
    View: EcommerceSourceAbpPermissions.GroupName + '.EmailReMinder.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.EmailReMinder.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.EmailReMinder.Edit',
    //Delete: EcommerceSourceAbpPermissions.GroupName + '.EmailReMinder.Delete',
  };
  static StatusConfig = {
    Default: EcommerceSourceAbpPermissions.GroupName + '.StatusConfig',
    View: EcommerceSourceAbpPermissions.GroupName + '.StatusConfig.View',
    Create: EcommerceSourceAbpPermissions.GroupName + '.StatusConfig.Create',
    Edit: EcommerceSourceAbpPermissions.GroupName + '.StatusConfig.Edit',
    //Delete: EcommerceSourceAbpPermissions.GroupName + '.StatusConfig.Delete',
  };
}
