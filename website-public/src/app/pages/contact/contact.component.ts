import { Component, Injector, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AppBaseComponent } from 'src/shared/app-base.component';
import { ContactDto } from 'src/shared/model/contact/contact.dto';
import { ContactService } from 'src/shared/services/contact.service';


@Component({
  templateUrl: './contact.component.html',
})
export class ContactComponent extends AppBaseComponent implements OnInit {
  contact: ContactDto[] = [];
  constructor(
    protected override readonly injector: Injector,
    private readonly contactService: ContactService,
  ) {
    super(injector);
  }
  get id() {
    return this.getParam('id');
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.activatedRoute.queryParams.subscribe(() => {
      this.initData();
    });
  }
  

  initData() {
    forkJoin([
      this.contactService.getAllContact(),
    ]).subscribe(
      ([
        contact,
      ]) => {
        this.contact = contact;
      }
    );
   
  }
}
