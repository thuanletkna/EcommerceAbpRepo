import { AfterViewInit, Component, Inject, Injector, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppBaseComponent } from "src/app/shared/app-base.component";
import { EcommerceSourceAbpPermissions } from "src/app/shared/consts/ecommerce-permissions";
import { Status } from "src/app/shared/enums";
import { SubProductPropertyDto } from "src/app/shared/models/sub-product-property/sub-product-property.dto";
import { SubProductPropertyService } from "src/app/shared/services/sub-product-property.service";

@Component({
    templateUrl: './sub-product-property-create-edit.component.html'
})
export class SubProductPropertyCreateEditComponent extends AppBaseComponent implements AfterViewInit {
    @ViewChild('formEdit') formEdit: NgForm;

    get canSave() {
      if (this.data?.id) {
        return this.getGrantedPolicy(EcommerceSourceAbpPermissions.SubProductProperty.Edit);
      }

      return this.getGrantedPolicy(EcommerceSourceAbpPermissions.SubProductProperty.Create);
    }

    vm: SubProductPropertyDto = { status: Status.Active};
    constructor(
        injector: Injector,
        private readonly subProductPropertyService: SubProductPropertyService,
        private readonly dialogRef: MatDialogRef<SubProductPropertyCreateEditComponent>,
        @Inject(MAT_DIALOG_DATA) private readonly data: SubProductPropertyDto
    ) {
        super(injector);
    }
    ngAfterViewInit(): void {
        if (this.data?.id) {
            this.subProductPropertyService.getById(this.data.id).subscribe(result => {
                this.vm = result || {};
            });
        }

        if (this.data?.productPropertyId) {
            this.vm.productPropertyId = this.data.productPropertyId;
        }
        
    }

    save(): void {

        if (!this.formEdit?.valid) {
            this.showError('Missing required information (*).');
            return;
        }

        this.subProductPropertyService.save(this.vm).subscribe((result) => {
            this.showSaveSuccess();
            this.dialogRef.close(result);
        });
    }
}

