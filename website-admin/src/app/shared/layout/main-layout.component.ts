import { Component } from '@angular/core';

@Component({
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
  constructor() {}

  sideNavClick() {
    const BOOTSTRAP_LG_WIDTH = 992;
    if (window.innerWidth >= 992) {
      return;
    }
    if ($('body').hasClass('sidenav-toggled')) {
      $('body').toggleClass('sidenav-toggled');
    }
  }
}
