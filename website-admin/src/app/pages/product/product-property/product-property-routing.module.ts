import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPropertyCreateEditComponent } from './create-update-product-property/product-property-create-edit.component';
import { ProductPropertyComponent } from './product-property.component';



const routes: Routes = [
  {
    path: '',
    component: ProductPropertyComponent,
  },
  {
    path: 'create',
    component: ProductPropertyCreateEditComponent,
  },
  {
    path: 'edit/:id',
    component: ProductPropertyCreateEditComponent,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductPropertyRoutingModule { }