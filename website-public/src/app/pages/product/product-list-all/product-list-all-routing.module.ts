import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListAllComponent } from './product-list-all.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProductListAllComponent
  },
//   {
//     path: ':categoryId',
//     component: ProductListAllComponent,
// },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductListAllRoutingModule {}
