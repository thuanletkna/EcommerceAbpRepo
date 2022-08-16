import { Component, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AppBaseComponent } from 'src/shared/app-base.component';
import { Status } from 'src/shared/enums';
import { IPagination, IPaginations } from 'src/shared/model/base.dto';
import { CategoryDto } from 'src/shared/model/category.dto';
import { ProductFileDto } from 'src/shared/model/product-file/product-file.dto';
import { ProductDto } from 'src/shared/model/product/product.dto';
import { CategoriesService } from 'src/shared/services/categories.service';
import { FileStorageService } from 'src/shared/services/file-storage.service';
import { ProductService } from 'src/shared/services/product.service';

import Swiper, { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  templateUrl: './product.component.html',
})
export class ProductComponent extends AppBaseComponent implements OnInit {
  @ViewChild(SwiperComponent, { static: false }) swiper?: SwiperComponent;
  categories: CategoryDto[] = [];
  @Input() category: CategoryDto | undefined;
  productFile: ProductFileDto[]| undefined = [];
  productItem: ProductDto[]| undefined = [];
  get productItems(): ProductDto|undefined {
    return this.productItem?.[0] ;
}
  fileId?:string;
  products: IPaginations<ProductDto> = {
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
  groupId: number = 1;

  get skipCount() {
    return this.pageSize * (this.currentPage - 1);
  }
  page: number = 1;
  pageSize: number = 8;
  constructor(
    protected override readonly injector: Injector,
    private readonly categoriesService: CategoriesService,
    private readonly productService: ProductService,
    private readonly fileStorageService: FileStorageService
  ) {
    super(injector);
  }
  get id() {
    return this.getParam('id');
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(() => {
      this.initData();
    });
    
    
  }


  initData() {
    forkJoin([this.categoriesService.getAllCategory()]).subscribe(
      ([categories]) => {
        this.categories = categories;
      }
    );
    this.productService
      .getPaged({
        // groupId: this.groupId,
        // sorting: 'publishDate desc',
        skipCount: this.skipCount,
        maxResultCount: this.pageSize,
      })
      .subscribe((result) => {
        this.products = result || { items: [], totalCount: 0 };
        this.productItem = this.products.items;
        this.products.items = this.products.items.filter((x) => x.status === Status.Active);
        this.products.items.forEach(element => {
          element.productFile = element.productFile?.filter(x=>x.fileType === 'productFile' )
        });
      });
      
      
  }

}
