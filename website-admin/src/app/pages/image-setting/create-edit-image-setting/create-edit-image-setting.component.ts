import { AfterViewInit, Component, Inject, Injector, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppBaseComponent } from 'src/app/shared/app-base.component';
import { Status } from 'src/app/shared/enums';
import { AppHeaderService } from 'src/app/shared/layout/app-header.service';
import { DatatableComponent } from 'src/app/shared/components/datatable/datatable.component';
import { EcommerceSourceAbpPermissions } from 'src/app/shared/consts/ecommerce-permissions';
import { ProductPropertyService } from 'src/app/shared/services/product-property.service';
import { HomePageConfigDto } from 'src/app/shared/models/home-page-config/home-page-config.dto';
import { HomePageConfigService } from 'src/app/shared/services/home-page-config.service';
import { ImageSettingDto } from 'src/app/shared/models/image-setting/image-setting.dto';

@Component({
  templateUrl: './create-edit-image-setting.component.html',
})
export class CreateEditImageSettingComponent extends AppBaseComponent implements AfterViewInit {
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

  vm: HomePageConfigDto = { status: Status.Active };
  constructor(
    injector: Injector,
    private readonly appHeaderService: AppHeaderService,
    private readonly homePageConfigService: HomePageConfigService,
    private readonly productPropertyService: ProductPropertyService
  ) {
    super(injector);
    this.appHeaderService.option = {
      pageTitle: this.id ? 'Chỉnh sửa sản phẩm' : 'Thêm mới sản phẩm',
      buttons: [],
    };
  }
  get bannerFiles() {
    if (this.vm.imageSetting) {
        return this.vm.imageSetting.filter(x => x.fileType === 'BannerSlide');
    }
    return [];
  }
  get bannerProduct() {
    if (this.vm.imageSetting) {
        return this.vm.imageSetting.filter(x => x.fileType === 'BannerHeader');
    }
    return [];
  }


remove(item: ImageSettingDto) {
  // Delete the item from fileNames list
  const index = this.vm.imageSetting.findIndex(x => x === item);
  this.vm.imageSetting.splice(index, 1);
}
add(fileType: string) {
  if (!this.vm.imageSetting) this.vm.imageSetting = [];
  this.vm.imageSetting.push({ fileType });
}

removeProduct(item: ImageSettingDto) {
  // Delete the item from fileNames list
  const index = this.vm.imageSetting.findIndex(x => x === item);
  this.vm.imageSetting.splice(index, 1);
}
addProduct(fileType: string) {
  if (!this.vm.imageSetting) this.vm.imageSetting = [];
  this.vm.imageSetting.push({ fileType });
}


  ngAfterViewInit(): void {
    
    if (this.id) {
      this.homePageConfigService.getById(this.id).subscribe(result => {
        this.vm = result || {};
      });
    }
  }

  save(): void {
    if (!this.formEdit?.valid) {
      this.showError('Missing required information (*).');

      return;
    }

    this.homePageConfigService.save(this.vm).subscribe(result => {
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
