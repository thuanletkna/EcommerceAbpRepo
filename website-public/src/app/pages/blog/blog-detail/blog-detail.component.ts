import { Component, Injector, OnInit } from '@angular/core';
import { AppBaseComponent } from 'src/shared/app-base.component';
import { Status } from 'src/shared/enums';
import { IsHot } from 'src/shared/enums/ishot';
import { IPaginations } from 'src/shared/model/base.dto';
import { BlogDto } from 'src/shared/model/blog/blog.dto';
import { CategoryDto } from 'src/shared/model/category.dto';
import { IParamFilterNews } from 'src/shared/model/product/product.dto';
import { BlogService } from 'src/shared/services/blog.service';
import { CategoriesService } from 'src/shared/services/categories.service';
import { AppConst } from 'src/shared/utility/app.const';
import { CommonHelper } from 'src/shared/utility/common-helper';

@Component({
    templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent extends AppBaseComponent implements OnInit {
    get slug(): string|null {
        return this.getQueryParam('slug');
    }
    
    get id(): string|null {
        return this.getQueryParam('id');
    }

    get uuid(): string|null {
        return this.getQueryParam('uuid');
    }
    categories: CategoryDto[] = [];
    blogParam?:string;
    blogId:string | undefined;
    blog: BlogDto | undefined;
    blogDetail: BlogDto = {};
    blogs: IPaginations<BlogDto> = {
        items: [],
        totalCount: 0,
      };

    constructor(
        protected override readonly injector: Injector,
        private readonly blogService: BlogService,
        private readonly categoriesService: CategoriesService,
    ) {
        super(injector);
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.initData();
        });
        
    }
    
    initData() {
        this.blogId = this.activatedRoute.snapshot.params['slug'];
        this.blogService.getBySlug(this.blogId).subscribe(result => {
            this.blogDetail = result || {};
        })

        this.categoriesService.getAllCategory().subscribe(result => {
            this.categories = result || {};
        })

        const query: IParamFilterNews = {
            ...CommonHelper.getOffsetAndSkipByPageAndLimit(this.currentPage, AppConst.ITEM_PER_PAGE),
        };

        if(this.blogDetail) {
            // query.categoryId = this.blogDetail.categoryId;
            this.blogService.getPaged(query).subscribe(result => {
              this.blogs = result;
            });
            
        }
    }
    get categoriesSameBlog(): BlogDto[] {
        return this.blogs.items.filter(x => x.categoryId == this.blogDetail.categoryId);
    }

    get blogHot(): BlogDto[] {
        return this.blogs.items.filter(x => x.isHot == IsHot.True);
    }
    get categoriesBlog(): CategoryDto[] {
        return this.categories.filter(x => x.status === Status.Active && x.isBlog == true );
      }
}
