import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
    declarations: [BlogComponent],
    imports: [SharedModule, BlogRoutingModule,SwiperModule],
})
export class BlogModule {}
