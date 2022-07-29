import { Component, Injector } from '@angular/core';
import { AppBaseComponent } from '../../app-base.component';
import { AppHeaderService } from '../app-header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent extends AppBaseComponent {
  get buttons() {
    return this.appHeaderService?.option?.buttons?.filter(x => this.getGrantedPolicy(x.permission) && (x.visible === undefined || x.visible)) || [];
  }
  constructor(
    injector: Injector,
    public readonly appHeaderService: AppHeaderService) {
    super(injector);
  }

  sidebarToggleClick() {
    $('body').toggleClass('sidenav-toggled');
  }
}
