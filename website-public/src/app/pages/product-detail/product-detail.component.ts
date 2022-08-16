import { Component, Injector, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AppBaseComponent } from 'src/shared/app-base.component';
import { ProductDto } from 'src/shared/model/product/product.dto';
import { ProductService } from 'src/shared/services/product.service';
import { CommonHelper } from 'src/shared/utility/common-helper';

@Component({
    templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent extends AppBaseComponent implements OnInit {
    get slug(): string|null {
        // return this.getParam('slug');
        return this.getQueryParam('slug');
    }
    
    get id(): string|null {
        // return this.getParam('slug');
        return this.getQueryParam('id');
    }

    get uuid(): string|null {
        return this.getQueryParam('uuid');
    }
    productParam?:string;
    productId:string | undefined;
    product: ProductDto | undefined;
    productDetail: ProductDto = {};
    // relatedBlogs: NewsModel[] = [];
    // hotBlogs: NewsModel[] = [];

    constructor(
        protected override readonly injector: Injector,
        private readonly productService: ProductService,
    ) {
        super(injector);
    }

    ngAfterContentInit() {
       
    }

    ngOnInit() {
        console.log(this.id);
        
        this.activatedRoute.params.subscribe(params => {
            this.initData();
        });
        
        
    }

    initData() {
        debugger;
        this.productId = this.activatedRoute.snapshot.params['slug'];
        this.productService.getBySlug(this.productId).subscribe(result => {
            this.productDetail = result || {};
          })
        console.log(this.productId);
    }

    // getRelatedBlog() {
    //     if (this.blog?.id) {
    //         this.newsService
    //             .getRelatedNews({ id: this.blog?.id?.toString(), maxResultCount: 3, sorting: 'publicDate DESC' })
    //             .subscribe(relatedBlogs => {
    //                 this.relatedBlogs = relatedBlogs.items;
    //             });
    //     }
    // }

}
