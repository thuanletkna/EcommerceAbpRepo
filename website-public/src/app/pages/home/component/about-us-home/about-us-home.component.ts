import { Component, Injector } from "@angular/core";
import { AppBaseComponent } from "src/shared/app-base.component";

@Component({
  selector: 'section[about-us-home]',
  templateUrl: './about-us-home.component.html'
})
export class AboutUsHomeComponent extends AppBaseComponent {
  constructor(injector: Injector) {
    super(injector);
  }

}