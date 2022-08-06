import { Component, Injector, ViewChild } from "@angular/core";
import { AppBaseComponent } from "src/app/shared/app-base.component";
import { DatatableComponent, DatatableOption } from "src/app/shared/components/datatable/datatable.component";
import { EcommerceSourceAbpPermissions } from "src/app/shared/consts/ecommerce-permissions";

import { Status } from "src/app/shared/enums";
import { AppHeaderService } from "src/app/shared/layout/app-header.service";
import { ProductPropertyGetRequestInputDto } from "src/app/shared/models/product-property/product-property-get-request-input.dto";
import { ProductPropertyDto } from "src/app/shared/models/product-property/product-property.dto";
import { ProductPropertyService } from "src/app/shared/services/product-property.service";
import { SubProductPropertyViewListComponent } from "./product-property-view-list/product-property-view-list.component";


@Component({
    templateUrl: './product-property.component.html'
})
export class ProductPropertyComponent extends AppBaseComponent {

    @ViewChild(DatatableComponent) table: DatatableComponent;

    get canAdd(): boolean {
        return this.getGrantedPolicy(EcommerceSourceAbpPermissions.ProductProperty.Create);
    }

    keyword: string;
    subProductPropertyName: string;
    status: Status = 2;


    tableOptions: DatatableOption<ProductPropertyDto> = {
        functionData: (input: ProductPropertyGetRequestInputDto) => {
             input.filter = this.keyword;
            // input.subProductPropertyName = this.subProductPropertyName;
            input.status = this.status === 2 ? null : this.status;
            return this.productPropertyService.getByPaged(input);
        },
        sortable: true,
        columns: [
            // {
            //     name: 'code',
            //     displayName: 'ProductProperty ID',
            //     width: 200
            // },
            // {
            //     name: 'orderIndex',
            //     displayName: 'Thứ tự',
            //     width: 200
            // },
            {
                name: 'name',
                displayName: 'Tên thuộc tính',
            },
            // {
            //     name: 'list-subcatgory',
            //     displayName: this.l('::SubProductProperty'),
            //     customRender: dataRow => `<p class="text-primary"><u>View list</u></p>`,
            //     dataType: 'string',
            //     click: dataRow => {
            //       this._openViewList(dataRow);
            //     }
            // },
            {
                name: 'status',
                displayName: this.l('::Trạng thái'),
                dataType: 'status',
                width: 100,
                permission: EcommerceSourceAbpPermissions.ProductProperty.Edit,
                click: dataRow => {
                    this._toggleStatus(dataRow);
                },
            },
        ],
        actions: [
            {
                icon: 'view-list',
                click: dataRow => {
                    this._openViewList(dataRow);
                },
                name: 'View sub-categories',
                color: 'primary',
                permission: EcommerceSourceAbpPermissions.SubProductProperty.Default,
            },
            {
                icon: 'create',
                click: dataRow => {
                    this.redirectTo('edit/' + dataRow.id)
                },
                name: this.l('AbpUi::Edit'),
                color: 'primary',
                permission: EcommerceSourceAbpPermissions.ProductProperty.View,
            }
        ],
    };

    constructor(
        injector: Injector,
        private readonly appHeaderService: AppHeaderService,
        private readonly productPropertyService: ProductPropertyService) {
        super(injector);

        this.appHeaderService.option = {
            pageTitle: 'ProductProperty Management',
            buttons: [{
                name: 'new',
                title: 'Add new ProductProperty',
                permission: EcommerceSourceAbpPermissions.ProductProperty.Create,
                click: () => {
                    this.create();
                }
            }]
        }
    }

    create(): void {
        this.redirectTo('create');
    }

    private _openViewList(item?: ProductPropertyDto) {
        const dialogRef = this.matDialog.open<SubProductPropertyViewListComponent, ProductPropertyDto>(SubProductPropertyViewListComponent, {
            data: item || {},
            width: '600px',
        });

        dialogRef.afterClosed().subscribe((result: string) => {
            let stayCurrentPage = false;
            if (item?.id) {
                stayCurrentPage = true;
            }
            this.table.refresh(stayCurrentPage);
        });
    }

    private _toggleStatus(item: ProductPropertyDto): void {
        this.openToggleStatusConfirm(this.l('::thuộc tính sản phẩm'), item.status == Status.Active ? this.l('::Enum:Status_0') : this.l('::Enum:Status_1'),
            () => {
                this.productPropertyService.toggleStatus(item.id).subscribe(() => {
                    this.showUpdateSuccess();
                    this.table.refresh();
                });
            });
    }

    getStatus(status: Status): string {
        return Status[status];
    }
}
