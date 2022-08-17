import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEditImageSettingComponent } from './create-edit-image-setting/create-edit-image-setting.component';
import { ImageSettingComponent } from './image-setting.component';


const routes: Routes = [
  {
    path: '',
    component: ImageSettingComponent,
  },
  {
    path: 'create',
    component: CreateEditImageSettingComponent,
  },
  {
    path: 'edit/:id',
    component: CreateEditImageSettingComponent,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ImageSettingRoutingModule { }