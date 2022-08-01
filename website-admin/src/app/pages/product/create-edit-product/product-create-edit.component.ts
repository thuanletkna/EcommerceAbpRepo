import { AfterViewInit, Component, Inject, Injector, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AppBaseComponent } from "src/app/shared/app-base.component";
import { Status } from "src/app/shared/enums";
import { AppHeaderService } from 'src/app/shared/layout/app-header.service';
import { DatatableComponent } from "src/app/shared/components/datatable/datatable.component";
import { ProductDto } from "src/app/shared/models/product/product.dto";
import { EcommerceSourceAbpPermissions } from "src/app/shared/consts/ecommerce-permissions";
import { ProductService } from "src/app/shared/services/product.service";
import { CategoryDto } from "src/app/shared/models/category/category.dto";
import { CategoryService } from "src/app/shared/services/category.service";


@Component({
  templateUrl: './product-create-edit.component.html'
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
  private _categories: CategoryDto[] = [];
  
  get categories(): CategoryDto[] {
    return this._categories.filter(x => x.isBlog === false);
}
private getCategories() {
  this.categoryService.getAll().subscribe((result) => {
      this._categories = result || [];
  });
}
  constructor(
    injector: Injector,
    private readonly appHeaderService: AppHeaderService,
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
  ) {
    super(injector);
    this.appHeaderService.option = {
      pageTitle: this.id ? 'Chỉnh sửa sản phẩm' : 'Thêm mới sản phẩm',
      buttons: []
    }
  }

  private _categories: CategoryDto[] = [];
  get categories(): CategoryDto[] {
    return this._categories.filter(x => x.isBlog == true);
}
private getCategories() {
  this.categoryService.getAll().subscribe((result) => {
      this._categories = result || [];
  });
}
  ngAfterViewInit(): void {
    this.getCategories();
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

    this.productService.save(this.vm).subscribe((result) => {
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

