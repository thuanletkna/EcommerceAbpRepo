import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeedBackCreateEditComponent } from './create-edit-feedback/create-edit-feedback.component';
import { FeedBackRoutingModule } from './feeback-routing.module';
import { FeedBackComponent } from './feeback.component';


@NgModule({
    declarations: [FeedBackComponent,FeedBackCreateEditComponent],
    imports: [SharedModule, FeedBackRoutingModule],
})
export class FeedBackModule { }