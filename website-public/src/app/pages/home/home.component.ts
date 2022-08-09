import { Component, Injector, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AppBaseComponent } from 'src/shared/app-base.component';
import { Status } from 'src/shared/enums';
import { CategoryDto } from 'src/shared/model/category.dto';
import { CategoriesService } from 'src/shared/services/categories.service';


@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent extends AppBaseComponent implements OnInit {
  categories: CategoryDto[] = [];
  @Input() category: CategoryDto | undefined;
  constructor(
    protected override readonly injector: Injector,
    private readonly categoriesService: CategoriesService
    ) {
    super(injector);
  }
  get id() {
    return this.getParam('id');
  }
  
  // get categories(): CategoryDto[] {
  //   return this._categories.filter(x => x.status == Status.Active);
  // }
  // private getCategories() {
  //   this.categoriesService.getAll().subscribe(result => {
  //     this._categories = result || [];
  //   });
  // }
    ngOnInit() {
      // this.getCategories();
      this.initData();
  }

 initData() {
        // this.renderMetaSeo({ title: 'Tin tức', meta_seo: AppConst.DEFAULT_META_SEO });
      //   forkJoin([
      //       this.categoriesService.getPaged({ maxResultCount: 3 }),
           
      //   ]).subscribe(([categories]) => {
      //       this.categories = categories.items;
      //   });
        forkJoin([
          this.categoriesService.getAllCategory(),
         
      ]).subscribe(([categories]) => {
          this.categories = categories;
      });
      //   console.log(this.categories);
    }
}
