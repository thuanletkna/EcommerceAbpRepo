import { Component, Injector, Input, OnInit } from "@angular/core";
import { forkJoin } from "rxjs";
import { AppBaseComponent } from "../../app-base.component";
import { CategoryDto } from "../../model/category.dto";
import { CategoriesService } from "../../services/categories.service";
@Component({
  selector: 'div[category]',
  templateUrl: './category.component.html'
})
export class CategoryComponent extends AppBaseComponent implements OnInit {
    categories: CategoryDto[] = [];
  @Input() category: CategoryDto | undefined;

  constructor(injector: Injector,
    private readonly categoriesService: CategoriesService) {
    super(injector);
  }
  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    forkJoin([
        this.categoriesService.getPaged({ maxResultCount: 3 }),
       
    ]).subscribe(([categories]) => {
        this.categories = categories.items;
    });
  }
}
