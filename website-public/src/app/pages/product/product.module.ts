import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

@NgModule({
    declarations: [ProductComponent],
    imports: [SharedModule, ProductRoutingModule,SwiperModule],
})
export class ProductModule {}
