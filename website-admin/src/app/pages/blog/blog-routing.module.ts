import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogCreateEditComponent } from './create-edit-blog/create-edit-blog.component';


const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: 'create',
    component: BlogCreateEditComponent,
  },
  {
    path: 'edit/:id',
    component: BlogCreateEditComponent,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogRoutingModule { }