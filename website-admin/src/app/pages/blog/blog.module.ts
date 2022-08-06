import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { CreateEditBlogDetailComponent } from './create-edit-blog-detail/create-edit-blog-detail.component';
import { BlogCreateEditComponent } from './create-edit-blog/create-edit-blog.component';

@NgModule({
    declarations: [BlogComponent,BlogCreateEditComponent,CreateEditBlogDetailComponent],
    imports: [SharedModule, BlogRoutingModule],
})
export class BlogModule { }