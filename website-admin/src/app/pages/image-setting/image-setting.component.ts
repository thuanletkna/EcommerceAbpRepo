import { Component, Injector, ViewChild } from "@angular/core";
import { AppBaseComponent } from "src/app/shared/app-base.component";
import { DatatableComponent, DatatableOption } from "src/app/shared/components/datatable/datatable.component";
import { EcommerceSourceAbpPermissions } from "src/app/shared/consts/ecommerce-permissions";
import { Status } from "src/app/shared/enums";
import { AppHeaderService } from "src/app/shared/layout/app-header.service";
import { HomePageConfigDto } from "src/app/shared/models/home-page-config/home-page-config.dto";
import { HomePageConfigGetRequestInputDto } from "src/app/shared/models/home-page-config/home-page-get-request-input.dto";
import { HomePageConfigService } from "src/app/shared/services/home-page-config.service";


@Component({
    templateUrl: './image-setting.component.html'
})
export class ImageSettingComponent extends AppBaseComponent {

    @ViewChild(DatatableComponent) table: DatatableComponent;

    get canAdd(): boolean {
        return this.getGrantedPolicy(EcommerceSourceAbpPermissions.HomePageConfig.Create);
    }

    keyword: string;
    status: Status ;
    tableOptions: DatatableOption<HomePageConfigDto> = {
        functionData: (input: HomePageConfigGetRequestInputDto) => {
            input.filter = this.keyword;
            input.status = this.status === 2 ? null : this.status;
            return this.homePageConfigService.getByPaged(input);
        },
        sortable: true,
        columns: [
            // {
            //     name: 'code',
            //     displayName: 'Thứ tự',
            //   },
            {
                name: 'name',
                displayName: 'Tên bài đăng',
              },
              {
                name:'imageSetting.fileType',
                displayName:'Loại Banner',
              },
            {
                name: 'status',
                displayName: this.l('::Trạng thái'),
                dataType: 'status',
                width: 200,
                permission: EcommerceSourceAbpPermissions.HomePageConfig.Edit,
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
                permission: EcommerceSourceAbpPermissions.HomePageConfig.View,
            }
        ],
    };

    constructor(
        injector: Injector,
        private readonly appHeaderService: AppHeaderService,
        private readonly homePageConfigService: HomePageConfigService) {
        super(injector);

        // this.appHeaderService.option = {
        //     pageTitle: 'Email-Type Of Event Config'
        // }
    }

    create(): void {
        this.redirectTo('create');
    }



    private _toggleStatus(item: HomePageConfigDto): void {
        this.openToggleStatusConfirm(this.l('::banner'), item.status == Status.Active ? this.l('::Enum:Status_0') : this.l('::Enum:Status_1'),
            () => {
                this.homePageConfigService.toggleStatus(item.id).subscribe(() => {
                    this.showUpdateSuccess();
                    this.table.refresh();
                });
            });
    }

    getStatus(status: Status): string {
        return Status[status];
    }

}
