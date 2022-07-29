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
  isCollapsed = false;
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
       isPermission: true,
      // isPermission: [AuthGuard],
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
  initMenu(isCollapsed: boolean) {
    this.selectMenu(this.menus, null, isCollapsed);
  }
  selectMenu(menus, parent?, isCollapsed?) {
    const pathname = window.location.pathname;
    menus.forEach(element => {
      if (element.route === pathname) {
        element.selected = true;
        if (parent) {
          parent.open = !isCollapsed;
        }
      }
      if (element.route !== pathname) {
        element.selected = false;
        element.open = false;
      }
      if (element.children) {
        this.selectMenu(element.children, element, isCollapsed);
      }
    });
  }
  onClickMenu(menu) {
    if (menu?.children?.length) {
      if (menu.children.find(v => v.route === window.location.pathname)) {
        return;
      }
      const path = menu.children.find(v => v.isPermission === true)?.route;
      if (path) {
        this.redirectTo(path);
      }
    }
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
  $('#app')
      .find('.ant-spin-nested-loading')
      .first()
      .find('div')
      .first()
      .addClass('spin-content');
  setTimeout(() => {
      //TO DO remove after page home imp api
      CommonHelper.removeElementSpin();
  }, 2000);

  // $('.scrollbar-macosx').scrollbar();
}


// onMouseoverMenu() {
//   if(!this.isCollapsed) return;
//   this.isCollapsed = false;
//   // this.aside?.initMenu(this.isCollapsed);
// }

// onMouseleaveMenu() {
//   if(this.isCollapsed) return;
//   this.isCollapsed = true;
//   // this.aside?.initMenu(this.isCollapsed);
// }
}
