import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryBlogComponent } from './category-blog.component';
import { CategoryBlogCreateEditComponent } from './create-edit-category-blog/create-edit-category-blog.component';



const routes: Routes = [
  {
    path: '',
    component: CategoryBlogComponent,
  },
  {
    path: 'create',
    component: CategoryBlogCreateEditComponent,
  },
  {
    path: 'edit/:id',
    component: CategoryBlogCreateEditComponent,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryBlogRoutingModule { }