import { AfterViewInit, Component, Inject, Injector, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AppBaseComponent } from "src/app/shared/app-base.component";
import { Status } from "src/app/shared/enums";
import { AppHeaderService } from 'src/app/shared/layout/app-header.service';
import { DatatableComponent } from "src/app/shared/components/datatable/datatable.component";
import { EcommerceSourceAbpPermissions } from "src/app/shared/consts/ecommerce-permissions";
import { TradeMarkDto } from "src/app/shared/models/trade-mark/trade-mark.dto";
import { TradeMarkService } from "src/app/shared/services/trade-mark.service";


@Component({
  templateUrl: './trade-mark-create-edit.component.html'
})
export class TradeMarkCreateEditComponent extends AppBaseComponent implements AfterViewInit {
  @ViewChild('formEdit') formEdit: NgForm;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  get id() {
    return this.getParam('id');
  }

  get canSave() {
    if (this.id) {
        return this.getGrantedPolicy(EcommerceSourceAbpPermissions.TradeMark.Edit);
    }

    return this.getGrantedPolicy(EcommerceSourceAbpPermissions.TradeMark.Create);
  }

  vm: TradeMarkDto = { status: Status.Active};
  constructor(
    injector: Injector,
    private readonly appHeaderService: AppHeaderService,
    private readonly tradeMarkService: TradeMarkService,
  ) {
    super(injector);
    this.appHeaderService.option = {
      pageTitle: this.id ? 'Chỉnh sửa thương hiệu' : 'Thêm mới thương hiệu',
      buttons: []
    }
  }

  ngAfterViewInit(): void {
    if (this.id) {
      this.tradeMarkService.getById(this.id).subscribe(result => {
        this.vm = result || {};
      });
    }
  }

  save(): void {

    if (!this.formEdit?.valid) {
      
          this.showError('Missing required information (*).');
      
      return;
  }

    this.tradeMarkService.save(this.vm).subscribe((result) => {
      this.showSaveSuccess();
       this.goback();
      if(this.id) {
        this.goback();
      }
      else {
        this.redirectTo('/edit/' + result);
      }
    });
  }
}

