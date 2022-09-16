import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedBackCreateEditComponent } from './create-edit-feedback/create-edit-feedback.component';
import { FeedBackComponent } from './feeback.component';


const routes: Routes = [
  {
    path: '',
    component: FeedBackComponent,
  },
  {
    path: 'create',
    component: FeedBackCreateEditComponent,
  },
  {
    path: 'edit/:id',
    component: FeedBackCreateEditComponent,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FeedBackRoutingModule { }