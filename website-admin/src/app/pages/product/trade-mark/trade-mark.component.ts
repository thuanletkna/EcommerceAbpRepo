import { Component, Injector, ViewChild } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app-base.component';
import {
  DatatableComponent,
  DatatableOption,
} from 'src/app/shared/components/datatable/datatable.component';
import { EcommerceSourceAbpPermissions } from 'src/app/shared/consts/ecommerce-permissions';
import { Status } from 'src/app/shared/enums';
import { TypeOfEvent } from 'src/app/shared/enums/typeofevent';
import { TradeMarkGetRequestInputDto } from 'src/app/shared/models/trade-mark/trade-mark-get-request-input.dto';
import { TradeMarkDto } from 'src/app/shared/models/trade-mark/trade-mark.dto';
import { TradeMarkService } from 'src/app/shared/services/trade-mark.service';

@Component({
  templateUrl: './trade-mark.component.html',
})
export class TradeMarkComponent extends AppBaseComponent {
  @ViewChild(DatatableComponent) table: DatatableComponent;

  get canAdd(): boolean {
    return this.getGrantedPolicy(EcommerceSourceAbpPermissions.TradeMark.Create);
  }

  keyword: string;
  status: Status;
  tableOptions: DatatableOption<TradeMarkDto> = {
    functionData: (input: TradeMarkGetRequestInputDto) => {
      input.filter = this.keyword;
      input.status = this.status === 2 ? null : this.status;
      return this.tradeMarkService.getByPaged(input);
    },
    sortable: true,
    columns: [
      {
        name: 'name',
        displayName: 'Tên thương hiệu',
      },
      // {
      //   name: 'orderIndex',
      //   displayName: 'Thứ tự hiển thị',
      // },

      {
        name: 'status',
        displayName: this.l('::Trạng thái'),
        dataType: 'status',
        width: 200,
        // permission: EcommerceSourceAbpPermissions.TradeMark.Edit,
        click: dataRow => {
          this._toggleStatus(dataRow);
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
        // permission: EcommerceSourceAbpPermissions.TradeMark.View,
      },
    ],
  };

  constructor(
    injector: Injector,
    // private readonly appHeaderService: AppHeaderService,
    private readonly tradeMarkService: TradeMarkService
  ) {
    super(injector);

    // this.appHeaderService.option = {
    //     pageTitle: 'Email-Type Of Event Config'
    // }
  }

  create(): void {
    this.redirectTo('create');
  }

  private _toggleStatus(item: TradeMarkDto): void {
      this.openToggleStatusConfirm(this.l('::thương hiệu'), item.status == Status.Active ? this.l('::Enum:Status_0') : this.l('::Enum:Status_1'),
          () => {
              this.tradeMarkService.toggleStatus(item.id).subscribe(() => {
                  this.showUpdateSuccess();
                  this.table.refresh();
              });
          });
   }

  getStatus(status: Status): string {
    return Status[status];
  }

  // getTypeOfEvent(typeofevent: TypeOfEvent): string {
  //     return TypeOfEvent[typeofevent];
  // }
}
