import { AfterViewInit, Component, Injector } from '@angular/core';
import { AppBaseComponent } from '../../app-base.component';
import { AppHeaderService } from '../app-header.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[nav-menu]',
  templateUrl: './nav-menu.component.html',
})
export class NavMenuComponent extends AppBaseComponent implements AfterViewInit {
  menuItems: MenuItem[] = [
    new MenuItem('Dashboard', '', 'icon-home', '/home'),
    
  ];

  logoFileId: string;

  constructor(injector: Injector, private readonly _appHeaderService: AppHeaderService) {
    super(injector);

    this._appHeaderService.logoUpdate.subscribe(result => {
      if (result) this.logoFileId = result;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const activatedPath = window.location.pathname;

      const targetAnchor = $('[href="' + activatedPath + '"]');
      const collapseAncestors = targetAnchor.parents('.collapse');

      targetAnchor.addClass('active');

      collapseAncestors.each(function () {
        $(this).addClass('show');
        $('[data-target="#' + this.id + '"]').removeClass('collapsed');
      });
    }, 1000);
  }

  showMenuItem(menuItem: MenuItem): boolean {
    if (menuItem.permissionName) {
      return this.getGrantedPolicy(menuItem.permissionName);
    }

    if (menuItem.items?.length) {
      for (let i = 0; i < menuItem.items.length; i++) {
        if (this.showMenuItem(menuItem.items[i])) {
          return true;
        }
      }
      return false;
    }

    return true;
  }

  logOut() {
    this.authService.logout().subscribe(() => {
      this.redirectTo('/account/login');
    });
  }
}

class MenuItem {
  name = '';
  permissionName = '';
  icon = '';
  route = '';
  items: MenuItem[];

  constructor(
    name: string,
    permissionName: string,
    icon: string,
    route: string,
    childItems: MenuItem[] = null
  ) {
    this.name = name;
    this.permissionName = permissionName;
    this.icon = icon;
    this.route = route;

    if (childItems) {
      this.items = childItems;
    } else {
      this.items = [];
    }
  }
}
