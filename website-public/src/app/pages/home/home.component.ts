import { Component, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AppBaseComponent } from 'src/shared/app-base.component';
import { Status } from 'src/shared/enums';
import { IsHot } from 'src/shared/enums/ishot';
import { IPaginations } from 'src/shared/model/base.dto';
import { BlogDto } from 'src/shared/model/blog/blog.dto';
import { CategoryDto } from 'src/shared/model/category.dto';
import { FeedBackDto } from 'src/shared/model/feedback/feedback.dto';
import { ProductFileDto } from 'src/shared/model/product-file/product-file.dto';
import { ProductDto } from 'src/shared/model/product/product.dto';
import { BlogService } from 'src/shared/services/blog.service';
import { CategoriesService } from 'src/shared/services/categories.service';
import { FeedBackService } from 'src/shared/services/feedback.service';
import { ProductService } from 'src/shared/services/product.service';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';


@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent extends AppBaseComponent implements OnInit {
  @ViewChild(SwiperComponent, { static: false }) swiper?: SwiperComponent;
  categories: CategoryDto[] = [];
  @Input() category: CategoryDto | undefined;
  feedbacks: FeedBackDto[] = [];
  productFile: ProductFileDto[]| undefined = [];
  fileId?:string;
  get skipCount() {
    return this.pageSize * (this.currentPage - 1);
  }
  page: number = 1;
  pageSize: number = 12;
  products: IPaginations<ProductDto> = {
    items: [],
    totalCount: 0,
  };
  blogs: IPaginations<BlogDto> = {
    items: [],
    totalCount: 0,
  };
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  constructor(
    protected override readonly injector: Injector,
    private readonly categoriesService: CategoriesService,
    private readonly productService: ProductService,
    private readonly blogService: BlogService,
    private readonly feedBackService: FeedBackService,
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
      // this.actionFiles();
      this.activatedRoute.queryParams.subscribe(() => {
        this.initData();
      });
  }

  get categoriesById(): CategoryDto[] {
    return this.categories.filter(x => x.status === Status.Active && x.isBlog === false );
  }

 initData() {
      forkJoin([
          this.categoriesService.getAllCategory(),
          this.feedBackService.getAllFeedBack(),
      ]).subscribe(([categories,feedbacks],) => {
          this.categories = categories;
          this.feedbacks = feedbacks;
      });
      this.productService.getPaged({skipCount: this.skipCount,maxResultCount: this.pageSize})
      .subscribe((result) => {
        this.products = result || { items: [], totalCount: 0 };
        this.products.items = this.products.items.filter(x => x.status === Status.Active && x.isHot === IsHot.True);
        this.products.items.forEach(element => {
          element.productFile = element.productFile?.filter(x=>x.fileType === "productFile")
        });
      });

      this.blogService
      .getPaged({
        skipCount: this.skipCount,
        maxResultCount: this.pageSize,
      })
      .subscribe((result) => {
        this.blogs = result || { items: [], totalCount: 0 };
        this.blogs.items = this.blogs.items.filter(
          (x) => x.status === Status.Active
        );
        this.blogs.items.forEach(element => {
          element.blogFile = element.blogFile?.filter(x=>x.fileType === "blogFile")
        });
      });
    }
}

