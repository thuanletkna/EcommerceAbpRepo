// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <abp-loader-bar></abp-loader-bar>
//     <abp-dynamic-layout></abp-dynamic-layout>
//   `,
// })
// export class AppComponent {}
 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <router-outlet></router-outlet>
    <!-- <modal></modal> -->
  `,
})
export class AppComponent {}
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   // styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   // isCollapsed = false;
// }

