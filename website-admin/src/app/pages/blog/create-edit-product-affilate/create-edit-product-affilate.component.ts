import { AfterViewInit, Component, Inject, Injector, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppBaseComponent } from "src/app/shared/app-base.component";
import { CommonHelper } from "src/app/shared/consts/common-helper";
import { EcommerceSourceAbpPermissions } from "src/app/shared/consts/ecommerce-permissions";
import { Status } from "src/app/shared/enums";
import { BlogDetailDto } from "src/app/shared/models/blog-detail/blog-detail.dto";
import { ProductAffilateFileDto } from "src/app/shared/models/product-affilate-file/product-affilate-file.dto";
import { ProductAffilateDto } from "src/app/shared/models/product-affilate/product-affilate.dto";
import { BlogDetailService } from "src/app/shared/services/blog-detail.service";


@Component({
    templateUrl: './create-edit-product-affilate.component.html'
})
export class CreateEditProductAffilateComponent extends AppBaseComponent implements AfterViewInit {
    @ViewChild('formEdit') formEdit: NgForm;
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

    get productAffilateFile() {
        if (this.vmProductAff.productAffilateFile) {
            return this.vmProductAff.productAffilateFile.filter(x => x.fileType === 'product_affilate');
        }
        return [];
    }
    
    remove(item: ProductAffilateFileDto) {
        // Delete the item from fileNames list
        const index = this.vmProductAff.productAffilateFile.findIndex(x => x === item);
        this.vmProductAff.productAffilateFile.splice(index, 1);
      }
      add(fileType: string) {
        if (!this.vmProductAff.productAffilateFile) this.vmProductAff.productAffilateFile = [];
        this.vmProductAff.productAffilateFile.push({ fileType });
      }
    vm: BlogDetailDto = { id: CommonHelper.newId(),status: Status.Active, productAffilates:[] };
    vmProductAff: ProductAffilateDto = { id: CommonHelper.newId(),status: Status.Active };
    dateFormat = 'dd/MM/yyyy';

    constructor(
        injector: Injector,
        private readonly blogDetailService: BlogDetailService,
        private readonly dialogRef: MatDialogRef<CreateEditProductAffilateComponent>,
        @Inject(MAT_DIALOG_DATA) private readonly data: ProductAffilateDto
    ) {
        super(injector);
        // this.vm = data||{} ;
    }
    

    ngAfterViewInit(): void {
        if (this.data?.id) {
            // this.socReportActionService.getById(this.data.id).subscribe(result => {
            //     this.vm = result || { id: CommonHelper.newId() };
            // });
            this.vmProductAff = this.data || { id: CommonHelper.newId() }
        }

        if (this.data?.productDetailId) {
            this.vmProductAff.productDetailId = this.data.productDetailId;
        }
        
    }
    
    save(): void {
        if (!this.formEdit?.valid) {
            this.showError('Missing required information (*).');
            return;
        }
        
        this.dialogRef.close(this.vmProductAff);
        
    }
}

