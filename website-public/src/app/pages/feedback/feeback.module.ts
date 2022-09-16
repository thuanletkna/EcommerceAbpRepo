import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { FeedBackRoutingModule } from './feeback-routing.module';
import { FeedBackComponent } from './feeback.component';


@NgModule({
    declarations: [FeedBackComponent],
    imports: [SharedModule, FeedBackRoutingModule],
})
export class FeedBackModule { }