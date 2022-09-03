import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { BlogDetailRoutingModule } from './blog-detail-routing.module';
import { BlogDetailComponent } from './blog-detail.component';

@NgModule({
    declarations: [BlogDetailComponent],
    imports: [SharedModule, BlogDetailRoutingModule],
})
export class BlogDetailModule {}
