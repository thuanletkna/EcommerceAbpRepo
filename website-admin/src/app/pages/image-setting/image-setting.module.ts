import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateEditImageSettingComponent } from './create-edit-image-setting/create-edit-image-setting.component';
import { ImageSettingRoutingModule } from './image-setting-routing.module';
import { ImageSettingComponent } from './image-setting.component';

@NgModule({
    declarations: [ImageSettingComponent,CreateEditImageSettingComponent],
    imports: [SharedModule, ImageSettingRoutingModule],
})
export class ImageSettingModule { }