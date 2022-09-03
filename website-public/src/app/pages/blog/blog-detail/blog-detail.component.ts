import { Component, Injector, OnInit } from '@angular/core';
import { AppBaseComponent } from 'src/shared/app-base.component';
import { BlogDto } from 'src/shared/model/blog/blog.dto';
import { BlogService } from 'src/shared/services/blog.service';

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
    blogParam?:string;
    blogId:string | undefined;
    blog: BlogDto | undefined;
    blogDetail: BlogDto = {};
    

    constructor(
        protected override readonly injector: Injector,
        private readonly blogService: BlogService,
    ) {
        super(injector);
    }

    ngAfterContentInit() {
       
    }

    ngOnInit() {
        
        
        this.activatedRoute.params.subscribe(params => {
            this.initData();
        });
        
        
    }

    initData() {
        this.blogId = this.activatedRoute.snapshot.params['slug'];
        console.log(this.blogId);
        this.blogService.getBySlug(this.blogId).subscribe(result => {
            this.blogDetail = result || {};
          })
    }
}
