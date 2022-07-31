import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryProductComponent } from './category-product.component';
import { CategoryProductCreateEditComponent } from './create-update-category-product/category-product-create-edit.component';



const routes: Routes = [
  {
    path: '',
    component: CategoryProductComponent,
  },
  {
    path: 'create',
    component: CategoryProductCreateEditComponent,
  },
  {
    path: 'edit/:id',
    component: CategoryProductCreateEditComponent,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryProductRoutingModule { }