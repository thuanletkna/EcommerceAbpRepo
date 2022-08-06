import { AfterViewInit, Component, Inject, Injector, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppBaseComponent } from 'src/app/shared/app-base.component';
import { Status } from 'src/app/shared/enums';
import { AppHeaderService } from 'src/app/shared/layout/app-header.service';
import { DatatableComponent } from 'src/app/shared/components/datatable/datatable.component';
import { ProductDto } from 'src/app/shared/models/product/product.dto';
import { EcommerceSourceAbpPermissions } from 'src/app/shared/consts/ecommerce-permissions';
import { ProductService } from 'src/app/shared/services/product.service';
import { CategoryDto } from 'src/app/shared/models/category/category.dto';
import { CategoryService } from 'src/app/shared/services/category.service';
import { TradeMarkDto } from 'src/app/shared/models/trade-mark/trade-mark.dto';
import { TradeMarkService } from 'src/app/shared/services/trade-mark.service';
import { ProductFileDto } from 'src/app/shared/models/product-file/product-file.dto';
import { ProductPropertyDto } from 'src/app/shared/models/product-property/product-property.dto';
import { ProductPropertyService } from 'src/app/shared/services/product-property.service';

@Component({
  templateUrl: './product-create-edit.component.html',
})
export class ProductCreateEditComponent extends AppBaseComponent implements AfterViewInit {
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

  vm: ProductDto = { status: Status.Active };
  constructor(
    injector: Injector,
    private readonly appHeaderService: AppHeaderService,
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
    private readonly tradeMarkService: TradeMarkService,
    private readonly productPropertyService: ProductPropertyService
  ) {
    super(injector);
    this.appHeaderService.option = {
      pageTitle: this.id ? 'Chỉnh sửa sản phẩm' : 'Thêm mới sản phẩm',
      buttons: [],
    };
  }

  private _categories: CategoryDto[] = [];
  get categories(): CategoryDto[] {
    return this._categories.filter(x => x.isBlog == false);
  }
  private getCategories() {
    this.categoryService.getAll().subscribe(result => {
      this._categories = result || [];
    });
  }

  private _tradeMark: TradeMarkDto[] = [];
  get trademarks(): TradeMarkDto[] {
    return this._tradeMark.filter(x => x.status == Status.Active);
  }
  private getTrademarks() {
    this.tradeMarkService.getAll().subscribe(result => {
      this._tradeMark = result || [];
    });
  }

  private _productProperty: ProductPropertyDto[] = [];
  get productProperties(): ProductPropertyDto[] {
    return this._productProperty.filter(x => x.status == Status.Active);
  }
  private getProductProperty() {
    this.productPropertyService.getAll().subscribe(result => {
      this._productProperty = result || [];
    });
  }

  get videoFiles() {
    if (this.vm.productFile) {
        return this.vm.productFile.filter(x => x.fileType === 'productVideo');
    }
    return [];
}

get files() {
  if (this.vm.productFile) {
      return this.vm.productFile.filter(x => x.fileType === 'productFile');
  }
  return [];
}

get subFiles() {
  if (this.vm.productFile) {
      return this.vm.productFile.filter(x => x.fileType === 'subProductFile');
  }
  return [];
}

remove(item: ProductFileDto) {
  // Delete the item from fileNames list
  const index = this.vm.productFile.findIndex(x => x === item);
  this.vm.productFile.splice(index, 1);
}
add(fileType: string) {
  if (!this.vm.productFile) this.vm.productFile = [];
  this.vm.productFile.push({ fileType });
}


  ngAfterViewInit(): void {
    this.getCategories();
    this.getTrademarks();
    this.getProductProperty();
    if (this.id) {
      this.productService.getById(this.id).subscribe(result => {
        this.vm = result || {};
      });
    }
  }

  save(): void {
    if (!this.formEdit?.valid) {
      this.showError('Missing required information (*).');

      return;
    }

    this.productService.save(this.vm).subscribe(result => {
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
