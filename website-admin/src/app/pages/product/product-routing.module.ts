import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateEditComponent } from './create-edit-product/product-create-edit.component';
import { ProductComponent } from './product.component';


const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'create',
    component: ProductCreateEditComponent,
  },
  {
    path: 'edit/:id',
    component: ProductCreateEditComponent,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule { }