import { Component, Injector, ViewChild } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app-base.component';
import {
  DatatableComponent,
  DatatableOption,
} from 'src/app/shared/components/datatable/datatable.component';
import { EcommerceSourceAbpPermissions } from 'src/app/shared/consts/ecommerce-permissions';
import { Status } from 'src/app/shared/enums';
import { ProductGetRequestInputDto } from 'src/app/shared/models/product/product-get-request-input.dto';
import { ProductDto } from 'src/app/shared/models/product/product.dto';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  templateUrl: './product.component.html',
})
export class ProductComponent extends AppBaseComponent {
  @ViewChild(DatatableComponent) table: DatatableComponent;

  get canAdd(): boolean {
    return this.getGrantedPolicy(EcommerceSourceAbpPermissions.Category.Create);
  }

  keyword: string;
  status: Status;
  tableOptions: DatatableOption<ProductDto> = {
    functionData: (input: ProductGetRequestInputDto) => {
      input.filter = this.keyword;
      // input.status = this.status === 2 ? null : this.status;
      return this.productService.getByPaged(input);
    },
    sortable: true,
    columns: [
      {
        name: 'name',
        displayName: 'Tên sản phẩm',
      },
      {
        name: 'productCode',
        displayName: 'Mã sản phẩm',
      },
      {
        name: 'priceSale',
        displayName: 'Giá bán',
      },

      {
        name: 'status',
        displayName: this.l('::Trạng thái'),
        dataType: 'status',
        width: 100,
        permission: EcommerceSourceAbpPermissions.Product.Edit,
        click: dataRow => {
          // this._toggleStatus(dataRow);
        },
      },
    ],
    actions: [
      {
        icon: 'create',
        click: dataRow => {
          this.redirectTo('edit/' + dataRow.id);
        },
        name: this.l('AbpUi::Edit'),
        color: 'primary',
        permission: EcommerceSourceAbpPermissions.Product.View,
      },
    ],
  };

  constructor(
    injector: Injector,
    // private readonly appHeaderService: AppHeaderService,
    private readonly productService: ProductService
  ) {
    super(injector);

    // this.appHeaderService.option = {
    //     pageTitle: 'Email-Type Of Event Config'
    // }
  }

  create(): void {
    this.redirectTo('create');
  }

  // private _toggleStatus(item: CategoryDto): void {
  //     this.openToggleStatusConfirm(this.l('::Emailofevent'), item.status == Status.Active ? this.l('::Enum:Status_0') : this.l('::Enum:Status_1'),
  //         () => {
  //             this.productService.toggleStatus(item.id).subscribe(() => {
  //                 this.showUpdateSuccess();
  //                 this.table.refresh();
  //             });
  //         });
  // }

  getStatus(status: Status): string {
    return Status[status];
  }

  // getTypeOfEvent(typeofevent: TypeOfEvent): string {
  //     return TypeOfEvent[typeofevent];
  // }
}
