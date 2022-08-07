import { Component, Injector } from "@angular/core";
import { AppBaseComponent } from "../app-base.component";

@Component({
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent extends AppBaseComponent {
  constructor(injector: Injector) {
    super(injector);
  }
}