import { Component, Injector, ViewChild } from "@angular/core";
import { AppBaseComponent } from "src/app/shared/app-base.component";
import { DatatableComponent, DatatableOption } from "src/app/shared/components/datatable/datatable.component";
import {  EcommerceSourceAbpPermissions } from "src/app/shared/consts/ecommerce-permissions";
import { Status } from "src/app/shared/enums";
import { FeedBackGetRequestInputDto } from "src/app/shared/models/feedback/feedback-get-request-input.dto";
import { FeedBackDto } from "src/app/shared/models/feedback/feedback.dto";
import { FeedBackService } from "src/app/shared/services/feedback.service";

@Component({
    templateUrl: './feeback.component.html'
})
export class FeedBackComponent extends AppBaseComponent {

    @ViewChild(DatatableComponent) table: DatatableComponent;

    get canAdd(): boolean {
        return this.getGrantedPolicy(EcommerceSourceAbpPermissions.Product.Create);
    }

    keyword: string;
    status: Status ;
    tableOptions: DatatableOption<FeedBackDto> = {
        functionData: (input: FeedBackGetRequestInputDto) => {
            input.filter = this.keyword;
            input.status = this.status === 2 ? null : this.status;
            return this._feedBackService.getByPaged(input);
        },
        sortable: true,
        columns: [
            {
                name: 'code',
                displayName: 'Thứ tự',
              },
              {
                name: 'descriptions',
                displayName: 'Đánh giá',
              },
            // {
            //     name: 'name',
            //     displayName: 'Tên sản phẩm',
            //   },
            //   {
            //     name: 'price',
            //     displayName: 'Giá gốc',
            //   },
            //   {
            //     name: 'priceSale',
            //     displayName: 'Giá bán',
            //   },
            {
                name: 'status',
                displayName: this.l('::Trạng thái'),
                dataType: 'status',
                width: 200,
                permission: EcommerceSourceAbpPermissions.Product.Edit,
                click: dataRow => {
                    this._toggleStatus(dataRow);
                },
            },
        ],
        actions: [
            {
                icon: 'create',
                click: dataRow => {
                    this.redirectTo('edit/' + dataRow.id)
                },
                name: this.l('AbpUi::Edit'),
                color: 'primary',
                permission: EcommerceSourceAbpPermissions.Product.View,
            }
        ],
    };

    constructor(
        injector: Injector,
        // private readonly appHeaderService: AppHeaderService,
        private readonly _feedBackService: FeedBackService) {
        super(injector);

        // this.appHeaderService.option = {
        //     pageTitle: 'Email-Type Of Event Config'
        // }
    }

    create(): void {
        this.redirectTo('create');
    }



    private _toggleStatus(item: FeedBackDto): void {
        this.openToggleStatusConfirm(this.l('::đánh giá'), item.status == Status.Active ? this.l('::Enum:Status_0') : this.l('::Enum:Status_1'),
            () => {
                this._feedBackService.toggleStatus(item.id).subscribe(() => {
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
