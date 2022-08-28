import { Component, Injector, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AppBaseComponent } from 'src/shared/app-base.component';
import { Status } from 'src/shared/enums';
import { CategoryDto } from 'src/shared/model/category.dto';
import { CategoriesService } from 'src/shared/services/categories.service';

@Component({
  selector: 'app-navbar-style-two',
  templateUrl: './navbar-style-two.component.html',
  styleUrls: ['./navbar-style-two.component.scss']
})
export class NavbarStyleTwoComponent extends AppBaseComponent implements OnInit {
  categories: CategoryDto[] = [];
  constructor(
    protected override readonly injector: Injector,
    private readonly categoriesService: CategoriesService,
    // private readonly productService: ProductService,
    // private readonly blogService: BlogService
    ) {
    super(injector);
  }

  ngOnInit(): void {
    forkJoin([
      this.categoriesService.getAllCategory(),
      ]).subscribe(([categories]) => {
      this.categories = categories;
  });
  }
  get categoriesProduct(): CategoryDto[] {
    return this.categories.filter(x => x.status === Status.Active && x.isBlog == false );
  }
  get categoriesBlog(): CategoryDto[] {
    return this.categories.filter(x => x.status === Status.Active && x.isBlog == true );
  }
}
