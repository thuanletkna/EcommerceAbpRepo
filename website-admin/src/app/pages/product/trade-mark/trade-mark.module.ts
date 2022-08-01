import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TradeMarkCreateEditComponent } from './create-edit-trade-mark/trade-mark-create-edit.component';
import { TradeMarkRoutingModule } from './trade-mark-routing.module';
import { TradeMarkComponent } from './trade-mark.component';



@NgModule({
    declarations: [TradeMarkComponent,TradeMarkCreateEditComponent],
    imports: [SharedModule, TradeMarkRoutingModule],
})
export class TradeMarkModule { }