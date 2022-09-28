import { Component, Injector, OnInit } from "@angular/core";
import { forkJoin } from "rxjs";
import { Status } from "src/shared/enums";
import { CategoryDto } from "src/shared/model/category.dto";
import { ContactDto } from "src/shared/model/contact/contact.dto";
import { FeedBackDto } from "src/shared/model/feedback/feedback.dto";
import { CategoriesService } from "src/shared/services/categories.service";
import { ContactService } from "src/shared/services/contact.service";
import { FeedBackService } from "src/shared/services/feedback.service";
import { AppBaseComponent } from "../../app-base.component";
@Component({
  selector: 'footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent extends AppBaseComponent implements OnInit{
  categories: CategoryDto[] = [];
  contact: ContactDto[] = [];
  constructor
  (
    injector: Injector,
    private readonly categoriesService: CategoriesService,
    private readonly contactService: ContactService
  ) 
  {
    super(injector);
  }
  ngOnInit(): void {
    forkJoin([
      this.categoriesService.getAllCategory(),
      this.contactService.getAllContact(),
  ]).subscribe(([categories,contact],) => {
      this.categories = categories;
      this.contact = contact;
  });
  }

  get categoriesProduct(): CategoryDto[] {
    return this.categories.filter(x => x.status === Status.Active && x.isBlog == false );
  }
  get categoriesBlog(): CategoryDto[] {
    return this.categories.filter(x => x.status === Status.Active && x.isBlog == true );
  }
}