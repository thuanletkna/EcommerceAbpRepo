import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';


const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
  },
//   {
//     path: 'create',
//     component: EmailOfEventCreateEditComponent,
//   },
//   {
//     path: 'edit/:id',
//     component: EmailOfEventCreateEditComponent,
//   }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule { }