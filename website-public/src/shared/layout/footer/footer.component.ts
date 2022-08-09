import { Component, Injector, OnInit } from "@angular/core";
import { AppBaseComponent } from "../../app-base.component";
@Component({
  selector: 'footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent extends AppBaseComponent implements OnInit{
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit(): void {
  }
}