import { Component, Injector, ViewChild } from "@angular/core";
import { AppBaseComponent } from "src/app/shared/app-base.component";
import { DatatableComponent, DatatableOption } from "src/app/shared/components/datatable/datatable.component";
import {  EcommerceSourceAbpPermissions } from "src/app/shared/consts/ecommerce-permissions";
import { Status } from "src/app/shared/enums";
import { BlogGetRequestInputDto } from "src/app/shared/models/blog/blog-get-request-input.dto";
import { BlogDto } from "src/app/shared/models/blog/blog.dto";
import { BlogService } from "src/app/shared/services/blog.service";


@Component({
    templateUrl: './blog.component.html'
})
export class BlogComponent extends AppBaseComponent {

    @ViewChild(DatatableComponent) table: DatatableComponent;

    get canAdd(): boolean {
        return this.getGrantedPolicy(EcommerceSourceAbpPermissions.Category.Create);
    }

    keyword: string;
    status: Status ;
    tableOptions: DatatableOption<BlogDto> = {
        functionData: (input: BlogGetRequestInputDto) => {
            input.filter = this.keyword;
            // input.status = this.status === 2 ? null : this.status;
            return this.blogService.getByPaged(input);
        },
        sortable: true,
        columns: [
            {
                name: 'code',
                displayName: 'Thứ tự',
              },
            {
                name: 'name',
                displayName: 'Tên bài đăng',
              },
            {
                name: 'status',
                displayName: this.l('::Trạng thái'),
                dataType: 'status',
                width: 200,
                permission: EcommerceSourceAbpPermissions.Blog.Edit,
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
                permission: EcommerceSourceAbpPermissions.Blog.View,
            }
        ],
    };

    constructor(
        injector: Injector,
        // private readonly appHeaderService: AppHeaderService,
        private readonly blogService: BlogService) {
        super(injector);

        // this.appHeaderService.option = {
        //     pageTitle: 'Email-Type Of Event Config'
        // }
    }

    create(): void {
        this.redirectTo('create');
    }



    private _toggleStatus(item: BlogDto): void {
        this.openToggleStatusConfirm(this.l('::bài đăng'), item.status == Status.Active ? this.l('::Enum:Status_0') : this.l('::Enum:Status_1'),
            () => {
                this.blogService.toggleStatus(item.id).subscribe(() => {
                    this.showUpdateSuccess();
                    this.table.refresh();
                });
            });
    }

    getStatus(status: Status): string {
        return Status[status];
    }

}
