import { Component, Injector, ViewChild } from "@angular/core";
import { AppBaseComponent } from "src/app/shared/app-base.component";
import { DatatableComponent, DatatableOption } from "src/app/shared/components/datatable/datatable.component";
import {  EcommerceSourceAbpPermissions } from "src/app/shared/consts/ecommerce-permissions";
import { Status } from "src/app/shared/enums";
import { CategoryGetRequestInputDto } from "src/app/shared/models/category/category-get-request-input.dto";
import { CategoryDto } from "src/app/shared/models/category/category.dto";
import { CategoryService } from "src/app/shared/services/category.service";

@Component({
    templateUrl: './category-blog.component.html'
})
export class CategoryBlogComponent extends AppBaseComponent {

    @ViewChild(DatatableComponent) table: DatatableComponent;

    get canAdd(): boolean {
        return this.getGrantedPolicy(EcommerceSourceAbpPermissions.Category.Create);
    }

    keyword: string;
    status: Status ;
    tableOptions: DatatableOption<CategoryDto> = {
        functionData: (input: CategoryGetRequestInputDto) => {
            input.filter = this.keyword;
            input.isBlog = true;
            input.status = this.status === 2 ? null : this.status;
            return this.categoryService.getByPaged(input);
        },
        sortable: true,
        columns: [
            {
                name: 'name',
                displayName: 'name',
              },
            {
                name: 'slug',
                displayName: 'slug',
              },
              {
                name: 'orderIndex',
                displayName: 'Thứ tự hiển thị',
              },
            
            {
                name: 'Trạng thái',
                displayName: this.l('::Status'),
                dataType: 'status',
                width: 100,
                permission: EcommerceSourceAbpPermissions.Category.Edit,
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
                permission: EcommerceSourceAbpPermissions.Category.View,
            }
        ],
    };

    constructor(
        injector: Injector,
        // private readonly appHeaderService: AppHeaderService,
        private readonly categoryService: CategoryService) {
        super(injector);

        // this.appHeaderService.option = {
        //     pageTitle: 'Email-Type Of Event Config'
        // }
    }

    create(): void {
        this.redirectTo('create');
    }



    private _toggleStatus(item: CategoryDto): void {
        this.openToggleStatusConfirm(this.l('::Emailofevent'), item.status == Status.Active ? this.l('::Enum:Status_0') : this.l('::Enum:Status_1'),
            () => {
                this.categoryService.toggleStatus(item.id).subscribe(() => {
                    this.showUpdateSuccess();
                    this.table.refresh();
                });
            });
    }

    getStatus(status: Status): string {
        return Status[status];
    }

    
}
