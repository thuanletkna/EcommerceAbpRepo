export class IdentityPermission {
  static GroupName = 'AbpIdentity';
  static Users = {
    default: IdentityPermission.GroupName + '.Users',
    view: IdentityPermission.GroupName + '.Users.View',
    create: IdentityPermission.GroupName + '.Users.Create',
    edit: IdentityPermission.GroupName + '.Users.Update',
    delete: IdentityPermission.GroupName + '.Users.Delete',
    managePermission: IdentityPermission.GroupName + '.Users.ManagePermissions',
  };

  static Roles = {
    default: IdentityPermission.GroupName + '.Roles',
    view: IdentityPermission.GroupName + '.Roles.View',
    create: IdentityPermission.GroupName + '.Roles.Create',
    edit: IdentityPermission.GroupName + '.Roles.Update',
    delete: IdentityPermission.GroupName + '.Roles.Delete',
    managePermission: IdentityPermission.GroupName + '.Roles.ManagePermissions',
  };

}
