import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { ProductListAllRoutingModule } from './product-list-all-routing.module';
import { ProductListAllComponent } from './product-list-all.component';

@NgModule({
    declarations: [ProductListAllComponent],
    imports: [SharedModule, ProductListAllRoutingModule,SwiperModule],
})
export class ProductListAllModule {}
