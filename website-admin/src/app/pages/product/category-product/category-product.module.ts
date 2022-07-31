import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryProductRoutingModule } from './category-product-routing.module';
import { CategoryProductComponent } from './category-product.component';
import { CategoryProductCreateEditComponent } from './create-update-category-product/category-product-create-edit.component';



@NgModule({
    declarations: [CategoryProductComponent,CategoryProductCreateEditComponent],
    imports: [SharedModule, CategoryProductRoutingModule],
})
export class CategoryProductModule { }