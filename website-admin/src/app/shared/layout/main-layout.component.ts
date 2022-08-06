import { AuthGuard } from '@abp/ng.core';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { AppBaseComponent } from '../app-base.component';
import { CommonHelper } from '../consts/common-helper';
import { ProfileModel } from '../models/profile.model';
import { AccountService } from '../services/account.service';
import { AsideComponent } from './template-parts/aside.component';
declare var $: any;
@Component({
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent extends AppBaseComponent implements OnInit {
  // @ViewChild('aside') aside: AsideComponent;
  constructor(
    protected readonly injector: Injector,
    private readonly accountService: AccountService,
    ) {
    super(injector);
  }
  profile: ProfileModel = new ProfileModel();
  isCollapsed = true;
  menus = [
    {
      level: 1,
      title: 'Trang chủ',
      icon: 'home',
      selected: false,
      route: '/',
      isPermission: true,
    },
    {
      level: 1,
      title: 'Tài khoản',
      icon: 'user',
      selected: false,
      open: false,
      //  isPermission: true,
      isPermission: [AuthGuard],
      //     this.getGrantedPolicy('AbpIdentity.Users') ||
      //     this.getGrantedPolicy('AbpIdentity.Roles'),
      children: [
        {
          level: 2,
          title: 'Quản lý người dùng',
          icon: 'user',
          selected: false,
          route: '/identity/user',
          isPermission: [AuthGuard],
          // isPermission: this.getGrantedPolicy('AbpIdentity.Users'),
        },
        {
          level: 2,
          title: 'Vai trò',
          icon: 'check',
          selected: false,
          route: '/identity/roles',
          isPermission: [AuthGuard],
          // isPermission: this.getGrantedPolicy('AbpIdentity.Roles'),
        },
      ],
    },
    {
      level: 1,
      title: 'Danh mục',
      icon: 'user',
      selected: false,
      route: '/category',
      // isPermission: true,
      isPermission: [AuthGuard],
      
    },
  ];
  ngOnInit(): void {
    this.accountService.myProfile().subscribe((data) => {
      this.profile = data;
  });
  }
  
  logout() {
    this.authService.logout().subscribe(() => {
        this.redirectTo('/account/login');
    });
}
redirectAccount() {
  this.redirectTo('/account');
}

ngAfterViewInit(): void {
 
}

}
