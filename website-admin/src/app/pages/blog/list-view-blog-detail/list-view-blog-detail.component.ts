import { OnInit, Component, Inject, Injector, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppBaseComponent } from "src/app/shared/app-base.component";
import { DatatableOption } from "src/app/shared/components/datatable/datatable.component";
import { BlogDetailDto } from "src/app/shared/models/blog-detail/blog-detail.dto";
import { BlogDetailGetRequestInputDto } from "src/app/shared/models/blog-detail/blog-detail-get-request-input.dto";
import { BlogDetailService } from "src/app/shared/services/blog-detail.service";

@Component({
    templateUrl: './list-view-blog-detail.component.html'
})
export class BlogDetailViewListComponent extends AppBaseComponent implements OnInit {

    vm: BlogDetailDto;
    input: BlogDetailGetRequestInputDto;

    selectionTableOptions: DatatableOption<BlogDetailDto> = {
        functionData: (input: BlogDetailGetRequestInputDto) => {
            if (this.data.id) {
                input.maxResultCount = 1000;
                // input.socReportId = this.data.id;
                input.sorting = input.sorting || 'orderIndex asc';
                return this.blogDetailService.getByPaged(input);
            }
        },
        sortable: true,
        columns: [
            {
                name: 'code',
                displayName: this.l('::Thứ tự'),
                width: 200,
            },
            {
                name: 'name',
                displayName: this.l('::Title'),
                width: 200
            },
            {
                name: 'status',
                displayName: this.l('::Trạng thái'),
                dataType: 'status',
                width: 100,
            },
        ],
        actions: [],
    }

    constructor(
        injector: Injector,
        private readonly blogDetailService: BlogDetailService,
        private readonly dialogRef: MatDialogRef<BlogDetailViewListComponent>,
        @Inject(MAT_DIALOG_DATA) private readonly data: BlogDetailDto
    ) {
        super(injector);
    }
    ngOnInit() {
        if (this.data?.id) {
            this.vm = this.data;
        }
    }
    // drop(event: CdkDragDrop<string[]>) {
    //     moveItemInArray(this.vm.subCategories, event.previousIndex, event.currentIndex);
    // }
}

