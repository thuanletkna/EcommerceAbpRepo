import { AfterViewInit, Component, Inject, Injector, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AppBaseComponent } from "src/app/shared/app-base.component";
import { Status } from "src/app/shared/enums";
import { DatatableComponent, DatatableOption } from "src/app/shared/components/datatable/datatable.component";
import { AppHeaderService } from 'src/app/shared/layout/app-header.service';
import { ProductPropertyDto } from "src/app/shared/models/product-property/product-property.dto";
import { SubProductPropertyDto } from "src/app/shared/models/sub-product-property/sub-product-property.dto";
import { SubProductPropertyGetRequestInputDto } from "src/app/shared/models/sub-product-property/sub-product-property-get-request-input.dto";
import { ProductPropertyService } from "src/app/shared/services/product-property.service";
import { SubProductPropertyService } from "src/app/shared/services/sub-product-property.service";
import { SubProductPropertyCreateEditComponent } from "../create-update-sub-product-property/sub-product-property-create-edit.component";
import { EcommerceSourceAbpPermissions } from "src/app/shared/consts/ecommerce-permissions";

@Component({
  templateUrl: './product-property-create-edit.component.html'
})
export class ProductPropertyCreateEditComponent extends AppBaseComponent implements AfterViewInit {
  @ViewChild('formEdit') formEdit: NgForm;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  get id() {
    return this.getParam('id');
  }

  get canSave() {
    if (this.id) {
      return this.getGrantedPolicy(EcommerceSourceAbpPermissions.ProductProperty.Edit);
    }

    return this.getGrantedPolicy(EcommerceSourceAbpPermissions.ProductProperty.Create);
  }

  vm: ProductPropertyDto = { status: Status.Active };
  subProductPropertyDto: SubProductPropertyDto = { productPropertyId: this.id };
  tableOptions: DatatableOption<SubProductPropertyDto> = {
    functionData: (input: SubProductPropertyGetRequestInputDto) => {
      input.productPropertyId = this.id;
      return this.subProductPropertyService.getByPaged(input);
    },
    sortable: true,
    columns: [
      {
        name: 'code',
        displayName: this.l('Sub-ProductProperty ID'),
        width: 180
      },
      {
        name: 'name',
        displayName: this.l('Sub-ProductProperty Name'),
      },
      {
        name: 'status',
        displayName: this.l('::Status'),
        dataType: 'status',
        width: 100,
        permission: EcommerceSourceAbpPermissions.SubProductProperty.Edit,
        click: dataRow => {
          // this._toggleStatus(dataRow);
        },
      },
    ],
    actions: [
      {
        icon: 'create',
        click: dataRow => {
          this._openCreateEdit(dataRow);

        },
        name: this.l('AbpUi::Edit'),
        color: 'primary',
        permission: EcommerceSourceAbpPermissions.SubProductProperty.View,
      }
    ],
  };;
  constructor(
    injector: Injector,
    private readonly appHeaderService: AppHeaderService,
    private readonly productPropertyService: ProductPropertyService,
    private readonly subProductPropertyService: SubProductPropertyService
  ) {
    super(injector);
    this.appHeaderService.option = {
      pageTitle: this.id ? 'Edit ProductProperty' : 'Add new ProductProperty',
      buttons: []
    }
  }

  ngAfterViewInit(): void {
    if (this.id) {
      this.productPropertyService.getById(this.id).subscribe(result => {
        this.vm = result || {};
      });
    }
  }

  save(): void {

    if (!this.formEdit?.valid) {
      this.showError('Missing required information (*).');
      return;
    }

    this.productPropertyService.save(this.vm).subscribe((result) => {
      this.showSaveSuccess();
      if(this.id) {
        this.goback();
      }
      else {
        this.redirectTo('/ProductProperty/edit/' + result);
      }
    });
  }

  create(): void {
    this._openCreateEdit(this.subProductPropertyDto);
  }

  private _openCreateEdit(item?: SubProductPropertyDto) {
    const dialogRef = this.matDialog.open<SubProductPropertyCreateEditComponent, SubProductPropertyDto>(SubProductPropertyCreateEditComponent, {
      data: item || {},
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      let stayCurrentPage = false;
      if (item?.id) {
        stayCurrentPage = true;
      }
      this.table.refresh(stayCurrentPage);
    });
  }

//   private _toggleStatus(item: SubProductPropertyDto): void {
//     this.openToggleStatusConfirm(this.l('::SubProductProperty'), item.status == Status.Active ? this.l('::Enum:Status_0') : this.l('::Enum:Status_1'),
//       () => {
//         this.subProductPropertyService.toggleStatus(item.id).subscribe(() => {
//           this.showUpdateSuccess();
//           this.table.refresh();
//         });
//       });
//   }

}

