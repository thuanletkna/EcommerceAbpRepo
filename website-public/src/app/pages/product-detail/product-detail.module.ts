import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
    declarations: [ProductDetailComponent],
    imports: [SharedModule, ProductDetailRoutingModule],
})
export class ProductDetailModule {}
