import { AfterViewInit, Component, Inject, Injector, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AppBaseComponent } from "src/app/shared/app-base.component";
import { Status } from "src/app/shared/enums";
import { AppHeaderService } from 'src/app/shared/layout/app-header.service';
import { DatatableComponent } from "src/app/shared/components/datatable/datatable.component";
import { EcommerceSourceAbpPermissions } from "src/app/shared/consts/ecommerce-permissions";
import { CategoryDto } from "src/app/shared/models/category/category.dto";
import { CategoryService } from "src/app/shared/services/category.service";


@Component({
  templateUrl: './create-edit-category-blog.component.html'
})
export class CategoryBlogCreateEditComponent extends AppBaseComponent implements AfterViewInit {
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

  vm: CategoryDto = { status: Status.Active, isBlog: true };
  constructor(
    injector: Injector,
    private readonly appHeaderService: AppHeaderService,
    private readonly categoryService: CategoryService,
  ) {
    super(injector);
    this.appHeaderService.option = {
      pageTitle: this.id ? 'Chỉnh sửa danh mục sản phẩm' : 'Thêm mới danh mục sản phẩm',
      buttons: []
    }
  }

  ngAfterViewInit(): void {
    if (this.id) {
      this.categoryService.getById(this.id).subscribe(result => {
        this.vm = result || {};
      });
    }
  }

  save(): void {

    if (!this.formEdit?.valid) {
      
          this.showError('Missing required information (*).');
      
      return;
  }

    this.categoryService.save(this.vm).subscribe((result) => {
      this.showSaveSuccess();
       this.goback();
      if(this.id) {
        this.goback();
      }
    //   else {
    //     this.redirectTo('/edit/' + result);
    //   }
    });
  }
}

