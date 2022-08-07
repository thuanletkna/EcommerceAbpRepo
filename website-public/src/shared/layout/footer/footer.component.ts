import { Component, Injector } from "@angular/core";
import { AppBaseComponent } from "../../app-base.component";
@Component({
  selector: 'footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent extends AppBaseComponent {
  constructor(injector: Injector) {
    super(injector);
  }
}