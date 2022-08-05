import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThirdPartyModule } from 'src/app/shared/third-party.module';
import { ProductPropertyCreateEditComponent } from './create-update-product-property/product-property-create-edit.component';
import { SubProductPropertyCreateEditComponent } from './create-update-sub-product-property/sub-product-property-create-edit.component';
import { ProductPropertyRoutingModule } from './product-property-routing.module';
import { SubProductPropertyViewListComponent } from './product-property-view-list/product-property-view-list.component';
import { ProductPropertyComponent } from './product-property.component';

@NgModule({
    declarations: [ProductPropertyComponent, ProductPropertyCreateEditComponent, SubProductPropertyCreateEditComponent, SubProductPropertyViewListComponent],
    imports: [SharedModule, ProductPropertyRoutingModule,ThirdPartyModule],
})
export class ProductPropertyModule { }
