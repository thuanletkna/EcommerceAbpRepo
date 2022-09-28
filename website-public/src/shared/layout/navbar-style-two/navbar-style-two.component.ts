import { Component, Injector, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AppBaseComponent } from 'src/shared/app-base.component';
import { Status } from 'src/shared/enums';
import { CategoryDto } from 'src/shared/model/category.dto';
import { HomePageConfigDto } from 'src/shared/model/home-page-config/home-page-config.dto';
import { CategoriesService } from 'src/shared/services/categories.service';
import { HomePageConfigService } from 'src/shared/services/home-page-config.service';

@Component({
  selector: 'app-navbar-style-two',
  templateUrl: './navbar-style-two.component.html',
  styleUrls: ['./navbar-style-two.component.scss']
})
export class NavbarStyleTwoComponent extends AppBaseComponent implements OnInit {
  categories: CategoryDto[] = [];
  private _imageLogo: HomePageConfigDto[] = [];
  constructor(
    protected override readonly injector: Injector,
    private readonly categoriesService: CategoriesService,
    private readonly homePageConfigService: HomePageConfigService,
    // private readonly blogService: BlogService
    ) {
    super(injector);
  }

  ngOnInit(): void {
    this.homePageConfigService.getLogo().subscribe((result) => {
      this._imageLogo = result||[];
    });
    forkJoin([
      this.categoriesService.getAllCategory(),
      ]).subscribe(([categories]) => {
      this.categories = categories;
  });
  }

  get logo(): HomePageConfigDto[] {
    return this._imageLogo.filter(x => x.status == Status.Active);
  }

  get categoriesProduct(): CategoryDto[] {
    return this.categories.filter(x => x.status === Status.Active && x.isBlog == false );
  }
  get categoriesBlog(): CategoryDto[] {
    return this.categories.filter(x => x.status === Status.Active && x.isBlog == true );
  }
}
