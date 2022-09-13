import { AfterViewInit, Component, Inject, Injector, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppBaseComponent } from 'src/app/shared/app-base.component';
import { Status } from 'src/app/shared/enums';
import { AppHeaderService } from 'src/app/shared/layout/app-header.service';
import { DatatableComponent } from 'src/app/shared/components/datatable/datatable.component';
import { EcommerceSourceAbpPermissions } from 'src/app/shared/consts/ecommerce-permissions';
import { FeedBackDto } from 'src/app/shared/models/feedback/feedback.dto';
import { FeedBackFileDto } from 'src/app/shared/models/feedback-file/feedback-file.dto';
import { FeedBackService } from 'src/app/shared/services/feedback.service';

@Component({
  templateUrl: './create-edit-feedback.component.html',
})
export class FeedBackCreateEditComponent extends AppBaseComponent implements AfterViewInit {
  @ViewChild('formEdit') formEdit: NgForm;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  get id() {
    return this.getParam('id');
  }

  get canSave() {
    if (this.id) {
      return this.getGrantedPolicy(EcommerceSourceAbpPermissions.Category.Edit);
    }

    return this.getGrantedPolicy(EcommerceSourceAbpPermissions.Category.Create);
  }

  vm: FeedBackDto = { status: Status.Active };
  constructor(
    injector: Injector,
    private readonly appHeaderService: AppHeaderService,
    private readonly _feedBackService: FeedBackService,
  ) {
    super(injector);
    this.appHeaderService.option = {
      pageTitle: this.id ? 'Chỉnh sửa đánh giá' : 'Thêm mới đánh giá',
      buttons: [],
    };
  }


    get files() {
    if (this.vm.feedBackFiles) {
        return this.vm.feedBackFiles.filter(x => x.fileType === 'feedback-file');
    }
    return [];
    }

    remove(item: FeedBackFileDto) {
    // Delete the item from fileNames list
    const index = this.vm.feedBackFiles.findIndex(x => x === item);
    this.vm.feedBackFiles.splice(index, 1);
    }
    add(fileType: string) {
    if (!this.vm.feedBackFiles) this.vm.feedBackFiles = [];
    this.vm.feedBackFiles.push({ fileType });
    }


  ngAfterViewInit(): void {
    if (this.id) {
      this._feedBackService.getById(this.id).subscribe(result => {
        this.vm = result || {};
      });
    }
  }

  save(): void {
    if (!this.formEdit?.valid) {
      this.showError('Missing required information (*).');

      return;
    }

    this._feedBackService.save(this.vm).subscribe(result => {
      this.showSaveSuccess();
      this.goback();
      // if(this.id) {
      //   this.goback();
      // }
      // else {
      //   this.redirectTo('/edit/' + result);
      // }
    });
  }
}
