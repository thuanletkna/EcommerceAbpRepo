import { AfterViewInit, Component, Inject, Injector, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppBaseComponent } from "src/app/shared/app-base.component";
import { DatatableComponent, DatatableOption } from "src/app/shared/components/datatable/datatable.component";
import { CommonHelper } from "src/app/shared/consts/common-helper";
import { EcommerceSourceAbpPermissions } from "src/app/shared/consts/ecommerce-permissions";
import { Status } from "src/app/shared/enums";
import { BlogDetailDto } from "src/app/shared/models/blog-detail/blog-detail.dto";
import { ProductAffilateDto } from "src/app/shared/models/product-affilate/product-affilate.dto";
import { BlogDetailService } from "src/app/shared/services/blog-detail.service";
import { CreateEditProductAffilateComponent } from "../create-edit-product-affilate/create-edit-product-affilate.component";


@Component({
    templateUrl: './create-edit-blog-detail.component.html'
})
export class CreateEditBlogDetailComponent extends AppBaseComponent implements AfterViewInit {
    @ViewChild('formEdit') formEdit: NgForm;
    @ViewChild(DatatableComponent) table: DatatableComponent;
    private _isProcessing = false;

    get id(): string {
        return this.getParam('id');
    }


    get canSave() {
        if (this.id) {
            return this.getGrantedPolicy(EcommerceSourceAbpPermissions.BlogDetail.Edit);
        }

        return this.getGrantedPolicy(EcommerceSourceAbpPermissions.BlogDetail.Create);
    }

    get disableSave() {
        return this._isProcessing;
    }

    
    vm: BlogDetailDto = { id: CommonHelper.newId(),status: Status.Active, productAffilates:[] };
    vmProductAff: ProductAffilateDto = { id: CommonHelper.newId(),status: Status.Active };
    dateFormat = 'dd/MM/yyyy';

    selectionTableOptions: DatatableOption<ProductAffilateDto> = {
        sortable: true,
        columns: [
          {
            name: 'code',
            displayName: this.l('::Thứ tự'),
            width: 200,
          },
          {
            name: 'name',
            displayName: this.l('::Title bài đăng'),
            width: 200,
          },
        ],
        actions: [
          {
            icon: 'create',
            click: dataRow => {
              this.editProductAffilate(dataRow);
            },
            name: this.l('AbpUi::Edit'),
            color: 'primary',
            permission: EcommerceSourceAbpPermissions.BlogDetail.View,
          },
          {
            icon: 'delete',
            click: dataRow => {
              this._delete(dataRow);
              //   this.editSelection(dataRow.id);
            },
            name: this.l('AbpUi::Delete'),
            color: 'primary',
            // permission: NcsPermissions.SubCategory.View,
          },
        ],
      };
    constructor(
        injector: Injector,
        private readonly blogDetailService: BlogDetailService,
        private readonly dialogRef: MatDialogRef<CreateEditBlogDetailComponent>,
        @Inject(MAT_DIALOG_DATA) private readonly data: BlogDetailDto
    ) {
        super(injector);
        // this.vm = data||{} ;
    }
    

    ngAfterViewInit(): void {
        if (this.data?.id) {
            // this.socReportActionService.getById(this.data.id).subscribe(result => {
            //     this.vm = result || { id: CommonHelper.newId() };
            // });
            this.vm = this.data || { id: CommonHelper.newId() }
        }

        if (this.data?.blogId) {
            this.vm.blogId = this.data.blogId;
        }
        
    }
    
    save(): void {
        if (!this.formEdit?.valid) {
            this.showError('Missing required information (*).');
            return;
        }
        
        this.dialogRef.close(this.vm);
        
    }

    private _delete(item: ProductAffilateDto) {
        this.openDeleteConfirm(item.name, () => {
          const index: number = this.vm.productAffilates.indexOf(item);
    
          if (index !== -1) {
            this.vm.productAffilates.splice(index, 1);
          }
          // this.showSuccess("Soc Report Action deleted successfully");
          this.table.refresh();
        });
      }
    addProductAffilate(): void {
        this._openProductAffilateCreateEditDialog();
    }
    editProductAffilate(blogId: ProductAffilateDto) {
    this._openProductAffilateCreateEditDialog(blogId);
    }
    private _openProductAffilateCreateEditDialog(item?: ProductAffilateDto) {
        const dialogRef = this.matDialog.open<CreateEditProductAffilateComponent, ProductAffilateDto>(
            CreateEditProductAffilateComponent,
          {
            data: { ...item, productDetailId: this.vm.id },
            width: '1000px',
          }
        );
        dialogRef.afterClosed().subscribe((result?: BlogDetailDto) => {
          if (!result) return;
          if (!this.vm.productAffilates) this.vm.productAffilates = [];
          const index = this.vm.productAffilates.findIndex(x => x.id === result.id);
          if (index > -1) {
            this.vm.productAffilates[index] = result;
          } else {
            this.vm.productAffilates.push(result);
          }
          this.vm.productAffilates = [...this.vm.productAffilates];
          console.log(this.vm.productAffilates);
    
          this.table.refresh();
        });
    }  
}

