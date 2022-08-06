import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryBlogRoutingModule } from './category-blog-routing.module';
import { CategoryBlogComponent } from './category-blog.component';
import { CategoryBlogCreateEditComponent } from './create-edit-category-blog/create-edit-category-blog.component';



@NgModule({
    declarations: [CategoryBlogComponent,CategoryBlogCreateEditComponent],
    imports: [SharedModule, CategoryBlogRoutingModule],
})
export class CategoryBlogModule { }