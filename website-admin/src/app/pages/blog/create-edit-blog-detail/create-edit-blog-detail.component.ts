import { AfterViewInit, Component, Inject, Injector, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppBaseComponent } from "src/app/shared/app-base.component";
import { CommonHelper } from "src/app/shared/consts/common-helper";
import { EcommerceSourceAbpPermissions } from "src/app/shared/consts/ecommerce-permissions";
import { Status } from "src/app/shared/enums";
import { BlogDetailDto } from "src/app/shared/models/blog-detail/blog-detail.dto";
import { BlogDetailService } from "src/app/shared/services/blog-detail.service";


@Component({
    templateUrl: './create-edit-blog-detail.component.html'
})
export class CreateEditBlogDetailComponent extends AppBaseComponent implements AfterViewInit {
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

    
    vm: BlogDetailDto = { id: CommonHelper.newId(),status: Status.Active };
    dateFormat = 'dd/MM/yyyy';

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
    
}

