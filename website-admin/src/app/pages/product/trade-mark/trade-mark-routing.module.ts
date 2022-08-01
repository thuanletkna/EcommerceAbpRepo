import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeMarkCreateEditComponent } from './create-edit-trade-mark/trade-mark-create-edit.component';
import { TradeMarkComponent } from './trade-mark.component';



const routes: Routes = [
  {
    path: '',
    component: TradeMarkComponent,
  },
  {
    path: 'create',
    component: TradeMarkCreateEditComponent,
  },
  {
    path: 'edit/:id',
    component: TradeMarkCreateEditComponent,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TradeMarkRoutingModule { }