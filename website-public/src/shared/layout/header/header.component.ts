import { AfterContentInit, Component, Injector } from "@angular/core";
import { AppBaseComponent } from "../../app-base.component";
@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent extends AppBaseComponent implements AfterContentInit {

  constructor(injector: Injector) {
    super(injector);
  }
  ngAfterContentInit(): void {
    
  }

//   closeMenu() {
//     $('.header .menu-header .navbar-bottom nav.navbar .navbar-collapse').removeClass('show');
//   }

//   private hoverDropdown() {
//     $('.dropdown-login').on('mouseover', function(){
//       $('.dropdown-toggle', this).trigger('click');
//     }).on('mouseout', function(){
//         $('.dropdown-toggle', this).trigger('click').blur();
//     });
//   }

}
