import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCreateEditComponent } from './create-edit-product/product-create-edit.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';


@NgModule({
    declarations: [ProductComponent,ProductCreateEditComponent],
    imports: [SharedModule, ProductRoutingModule],
})
export class ProductModule { }