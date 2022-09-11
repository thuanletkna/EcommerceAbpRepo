import { Component, Injector, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AppBaseComponent } from 'src/shared/app-base.component';
import { Status } from 'src/shared/enums';
import { IPaginations } from 'src/shared/model/base.dto';
import { CategoryDto } from 'src/shared/model/category.dto';
import { ProductFileDto } from 'src/shared/model/product-file/product-file.dto';
import { IParamFilterNews, ProductDto } from 'src/shared/model/product/product.dto';
import { CategoriesService } from 'src/shared/services/categories.service';
import { FileStorageService } from 'src/shared/services/file-storage.service';
import { ProductService } from 'src/shared/services/product.service';
import { AppConst } from 'src/shared/utility/app.const';
import { CommonHelper } from 'src/shared/utility/common-helper';


@Component({
  templateUrl: './product.component.html',
})
export class ProductComponent extends AppBaseComponent implements OnInit {
  encapsulation: ViewEncapsulation.None | undefined;
  categories: CategoryDto[] = [];
  @Input() category: CategoryDto | undefined;
  productFile: ProductFileDto[]| undefined = [];
  productItem: ProductDto[] = [];
  
  fileId?:string;
  slug?:string;

  products: IPaginations<ProductDto> = {
    items: [],
    totalCount: 0,
  };
controlledSwiper: any;
  setControlledSwiper(swiper: any) {
    this.controlledSwiper = swiper;
  }
  get skipCount() {
    return this.pageSize * (this.currentPage - 1);
  }
  page: number = 1;
  pageSize: number = 12;
  
  constructor(
    protected override readonly injector: Injector,
    private readonly categoriesService: CategoriesService,
    private readonly productService: ProductService,
    // private readonly blogService: BlogService,
    private readonly fileStorageService: FileStorageService
  ) {
    super(injector);
  }
  get id() {
    return this.getParam('id');
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.slug = this.activatedRoute.snapshot.params['slug'];
    this.activatedRoute.queryParams.subscribe(() => {
      this.initData();
    });
  }
  

  initData() {
    forkJoin([
      this.categoriesService.getAllCategory(),
    ]).subscribe(
      ([
        categories,
      ]) => {
        this.categories = categories;
      }
    );
    

    const query: IParamFilterNews = {
      ...CommonHelper.getOffsetAndSkipByPageAndLimit(this.currentPage, this.pageSize),
    };
    
    if(this.slug) {
      query.slug = this.slug;
      this.productService.getPaged(query).subscribe(result => {
        this.products = result;
      });
    }
    
  
    // this.blogService.getPaged({
    //     // groupId: this.groupId,
    //     // sorting: 'publishDate desc',
    //     skipCount: this.skipCount,
    //     maxResultCount: this.pageSize,
    //   })
    //   .subscribe((result) => {
    //     this.blogs = result || { items: [], totalCount: 0 };
    //     this.blogs.items = this.blogs.items.filter(
    //       (x) => x.status === Status.Active && x.categoryId == this.categoryId
    //     );
    //     this.blogs.items.forEach(element => {
    //       element.blogFile = element.blogFile?.filter(x=>x.fileType === "blogFile")
    //     });
    //   });
      
      // this.productService.getByCategoryId(this.categoryId).subscribe(result =>
      //   {
      //     this.productItem = result|| {};
      //   }
      // )
      
  }
get categoriesBlog(): CategoryDto[] {
    return this.categories.filter(x => x.status === Status.Active && x.isBlog == true );
  }
}
