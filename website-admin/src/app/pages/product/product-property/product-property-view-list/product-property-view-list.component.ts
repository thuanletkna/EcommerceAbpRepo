import { OnInit, Component, Inject, Injector, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppBaseComponent } from "src/app/shared/app-base.component";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SubProductPropertyService } from "src/app/shared/services/sub-product-property.service";
import { ProductPropertyDto } from "src/app/shared/models/product-property/product-property.dto";
import { SubProductPropertyGetRequestInputDto } from "src/app/shared/models/sub-product-property/sub-product-property-get-request-input.dto";

@Component({
    templateUrl: './product-property-view-list.component.html'
})
export class SubProductPropertyViewListComponent extends AppBaseComponent implements OnInit {

    vm: ProductPropertyDto;
    input: SubProductPropertyGetRequestInputDto;
    constructor(
        injector: Injector,
        private readonly subProductPropertyService: SubProductPropertyService,
        private readonly dialogRef: MatDialogRef<SubProductPropertyViewListComponent>,
        @Inject(MAT_DIALOG_DATA) private readonly data: ProductPropertyDto
    ) {
        super(injector);
    }
    ngOnInit() {
        if (this.data?.id) {
            this.vm = this.data;;
        }
    }
    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.vm.subProductProperties, event.previousIndex, event.currentIndex);
    }
}

