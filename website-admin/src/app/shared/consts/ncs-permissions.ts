export class NcsPermissions {
  private static GroupName = 'NcsNats';

  static Role = {
    Default: NcsPermissions.GroupName + '.Role',
    View: NcsPermissions.GroupName + '.Role.View',
    Create: NcsPermissions.GroupName + '.Role.Create',
    Edit: NcsPermissions.GroupName + '.Role.Edit',
    Delete: NcsPermissions.GroupName + '.Role.Delete',
  };

  static Location = {
    Default: NcsPermissions.GroupName + '.Location',
    View: NcsPermissions.GroupName + '.Location.View',
    Create: NcsPermissions.GroupName + '.Location.Create',
    Edit: NcsPermissions.GroupName + '.Location.Edit',
    //Delete: NcsPermissions.GroupName + '.Location.Delete',
  };

  static Department = {
    Default: NcsPermissions.GroupName + '.Department',
    View: NcsPermissions.GroupName + '.Department.View',
    Create: NcsPermissions.GroupName + '.Department.Create',
    Edit: NcsPermissions.GroupName + '.Department.Edit',
    //Delete: NcsPermissions.GroupName + '.Department.Delete',
  };

  static Category = {
    Default: NcsPermissions.GroupName + '.Category',
    View: NcsPermissions.GroupName + '.Category.View',
    Create: NcsPermissions.GroupName + '.Category.Create',
    Edit: NcsPermissions.GroupName + '.Category.Edit',
    //Delete: NcsPermissions.GroupName + '.Category.Delete',
  };

  static SubCategory = {
    Default: NcsPermissions.GroupName + '.SubCategory',
    View: NcsPermissions.GroupName + '.SubCategory.View',
    Create: NcsPermissions.GroupName + '.SubCategory.Create',
    Edit: NcsPermissions.GroupName + '.SubCategory.Edit',
    //Delete: NcsPermissions.GroupName + '.SubCategory.Delete',
  };

  static SubCategorySelection = {
    Default: NcsPermissions.GroupName + '.SubCategorySelection',
    View: NcsPermissions.GroupName + '.SubCategorySelection.View',
    Create: NcsPermissions.GroupName + '.SubCategorySelection.Create',
    Edit: NcsPermissions.GroupName + '.SubCategorySelection.Edit',
  }

  static Staff = {
    Default: NcsPermissions.GroupName + '.Staff',
    View: NcsPermissions.GroupName + '.Staff.View',
    Create: NcsPermissions.GroupName + '.Staff.Create',
    Edit: NcsPermissions.GroupName + '.Staff.Edit',
    Delete: NcsPermissions.GroupName + '.Staff.Delete',
  };

  static Team = {
    Default: NcsPermissions.GroupName + '.Team',
    View: NcsPermissions.GroupName + '.Team.View',
    Create: NcsPermissions.GroupName + '.Team.Create',
    Edit: NcsPermissions.GroupName + '.Team.Edit',
    //Delete: NcsPermissions.GroupName + '.Team.Delete',
  };

  static Target = {
    Default: NcsPermissions.GroupName + '.Target',
    View: NcsPermissions.GroupName + '.Target.View',
    Create: NcsPermissions.GroupName + '.Target.Create',
    Edit: NcsPermissions.GroupName + '.Target.Edit',
    //Delete: NcsPermissions.GroupName + '.Target.Delete',
  };

  static Nats = {
    Default: NcsPermissions.GroupName + '.Nats',
    View: NcsPermissions.GroupName + '.Nats.View',
    Create: NcsPermissions.GroupName + '.Nats.Create',
    Edit: NcsPermissions.GroupName + '.Nats.Edit',
    //Delete: NcsPermissions.GroupName + '.Nats.Delete',
    Import: NcsPermissions.GroupName + '.Nats.Import',
    Export: NcsPermissions.GroupName + '.Nats.Export',
  };

  static Configuration = {
    Default: NcsPermissions.GroupName + '.Configuration',
    View: NcsPermissions.GroupName + '.Configuration.View',
    Create: NcsPermissions.GroupName + '.Configuration.Create',
    Edit: NcsPermissions.GroupName + '.Configuration.Edit',
    //Delete: NcsPermissions.GroupName + '.Configuration.Delete',
  };

  static ViewUnlimitedYear = {
      Default: NcsPermissions.GroupName + '.ViewUnlimitedYear'
  }

  static SiteSetting = {
    Default: NcsPermissions.GroupName + '.SiteSetting',
    EditLogo: NcsPermissions.GroupName + '.SiteSetting.EditLogo',
    EditBanner: NcsPermissions.GroupName + '.SiteSetting.EditBanner',
    EditContact: NcsPermissions.GroupName + '.SiteSetting.EditContact',
  };

  static ConfigTopAchiever = {
    Default: NcsPermissions.GroupName + '.ConfigTopAchiever',
    Edit: NcsPermissions.GroupName + '.ConfigTopAchiever.Edit'
  };

  static MasterListManagement = {
    Default: NcsPermissions.GroupName + '.MasterListManagement',
    View: NcsPermissions.GroupName + '.MasterListManagement.View',
    Create: NcsPermissions.GroupName + '.MasterListManagement.Create',
    Edit: NcsPermissions.GroupName + '.MasterListManagement.Edit',
    //Delete: NcsPermissions.GroupName + '.MasterListManagement.Delete',
  };

  static EmailOfEvent = {
    Default: NcsPermissions.GroupName + '.EmailOfEvent',
    View: NcsPermissions.GroupName + '.EmailOfEvent.View',
    Create: NcsPermissions.GroupName + '.EmailOfEvent.Create',
    Edit: NcsPermissions.GroupName + '.EmailOfEvent.Edit',
    //Delete: NcsPermissions.GroupName + '.MasterListManagement.Delete',
  };
  static EmailReTarget = {
    Default: NcsPermissions.GroupName + '.EmailReTarget',
    View: NcsPermissions.GroupName + '.EmailReTarget.View',
    Create: NcsPermissions.GroupName + '.EmailReTarget.Create',
    Edit: NcsPermissions.GroupName + '.EmailReTarget.Edit',
    //Delete: NcsPermissions.GroupName + '.EmailReTarget.Delete',
  };
  static EmailReMinder = {
    Default: NcsPermissions.GroupName + '.EmailReMinder',
    View: NcsPermissions.GroupName + '.EmailReMinder.View',
    Create: NcsPermissions.GroupName + '.EmailReMinder.Create',
    Edit: NcsPermissions.GroupName + '.EmailReMinder.Edit',
    //Delete: NcsPermissions.GroupName + '.EmailReMinder.Delete',
  };
  static StatusConfig = {
    Default: NcsPermissions.GroupName + '.StatusConfig',
    View: NcsPermissions.GroupName + '.StatusConfig.View',
    Create: NcsPermissions.GroupName + '.StatusConfig.Create',
    Edit: NcsPermissions.GroupName + '.StatusConfig.Edit',
    //Delete: NcsPermissions.GroupName + '.StatusConfig.Delete',
  };
}
