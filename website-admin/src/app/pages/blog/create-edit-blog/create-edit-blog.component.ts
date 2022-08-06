import { AfterViewInit, Component, Inject, Injector, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppBaseComponent } from 'src/app/shared/app-base.component';
import { Status } from 'src/app/shared/enums';
import { AppHeaderService } from 'src/app/shared/layout/app-header.service';
import { DatatableComponent, DatatableOption } from 'src/app/shared/components/datatable/datatable.component';
import { EcommerceSourceAbpPermissions } from 'src/app/shared/consts/ecommerce-permissions';
import { CategoryDto } from 'src/app/shared/models/category/category.dto';
import { CategoryService } from 'src/app/shared/services/category.service';
import { BlogDetailDto } from 'src/app/shared/models/blog-detail/blog-detail.dto';
import { CreateEditBlogDetailComponent } from '../create-edit-blog-detail/create-edit-blog-detail.component';
import { CommonHelper } from 'src/app/shared/consts/common-helper';
import { BlogService } from 'src/app/shared/services/blog.service';
import { BlogDto } from 'src/app/shared/models/blog/blog.dto';


@Component({
  templateUrl: './create-edit-blog.component.html',
})
export class BlogCreateEditComponent extends AppBaseComponent implements AfterViewInit {
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

  vm: BlogDto = { status: Status.Active };

  selectionTableOptions: DatatableOption<BlogDetailDto> = {
    sortable: true,
    columns: [
        {
            name: 'code',
            displayName: this.l('::Thứ tự'),
            width: 200
        },
        {
            name: 'name',
            displayName: this.l('::Title bài đăng'),
            width: 200
        },
        
    ],
    actions: [
        {
            icon: 'create',
            click: dataRow => {
                 this.editBlogDetail(dataRow);
            },
            name: this.l('AbpUi::Edit'),
            color: 'primary',
            permission: EcommerceSourceAbpPermissions.BlogDetail.View,
        },
        {
            icon: 'delete',
            click: dataRow => {
                this._delete(dataRow);
                //   this.editSelection(dataRow.id);
            },
            name: this.l('AbpUi::Delete'),
            color: 'primary',
            // permission: NcsPermissions.SubCategory.View,
        }
    ],
}


  constructor(
    injector: Injector,
    private readonly appHeaderService: AppHeaderService,
    private readonly blogService: BlogService,
    private readonly categoryService: CategoryService,
  ) {
    super(injector);
    this.appHeaderService.option = {
      pageTitle: this.id ? 'Chỉnh sửa sản phẩm' : 'Thêm mới sản phẩm',
      buttons: [],
    };
  }


  addBlogDetail(): void {
    this._openBlogDetailCreateEditDialog();
}
private _delete(item: BlogDetailDto) {

    this.openDeleteConfirm(item.name, () => {
        const index: number = this.vm.blogDetails.indexOf(item);
       
        if (index !== -1) {
            this.vm.blogDetails.splice(index, 1);
        }
        // this.showSuccess("Soc Report Action deleted successfully");
        this.table.refresh();
    });
}

editBlogDetail(blogId: BlogDetailDto) {
    this._openBlogDetailCreateEditDialog( blogId);
}
private _openBlogDetailCreateEditDialog(item?: BlogDetailDto) {
    const dialogRef = this.matDialog.open<CreateEditBlogDetailComponent, BlogDetailDto>(CreateEditBlogDetailComponent, {
        data: { ...item, blogId: this.vm.id },
        width: '1000px',
    });
    dialogRef.afterClosed().subscribe((result?: BlogDetailDto) => {
        if (!result) return;
        if (!this.vm.blogDetails) this.vm.blogDetails = [];
        const index = this.vm.blogDetails.findIndex(x => x.id === result.id);
        if (index > -1) {
            this.vm.blogDetails[index] = result;
        }
        else {
            this.vm.blogDetails.push(result);
        }
        this.vm.blogDetails = [...this.vm.blogDetails];
        console.log(this.vm.blogDetails);
        
        this.table.refresh();
    });
}

  
  private _categories: CategoryDto[] = [];
  get categories(): CategoryDto[] {
    return this._categories.filter(x => x.isBlog == true);
  }
  private getCategories() {
    this.categoryService.getAll().subscribe(result => {
      this._categories = result || [];
    });
  }

  ngAfterViewInit(): void {
    this.getCategories();
    if (this.id) {
      this.blogService.getById(this.id).subscribe(result => {
        this.vm = result || {};
      });
    }
  }

  save(): void {
    if (!this.formEdit?.valid) {
      this.showError('Missing required information (*).');

      return;
    }

    this.blogService.save(this.vm).subscribe(result => {
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
