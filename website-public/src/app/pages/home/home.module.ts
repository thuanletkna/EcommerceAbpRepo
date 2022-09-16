import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { AboutUsHomeComponent } from './component/about-us-home/about-us-home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent,AboutUsHomeComponent,],
    imports: [SharedModule, HomeRoutingModule,SwiperModule],
})
export class HomeModule {}
