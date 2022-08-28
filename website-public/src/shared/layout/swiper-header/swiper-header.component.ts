import { AfterContentInit, Component, Injector, OnInit, ViewEncapsulation } from "@angular/core";
import { Status } from "src/shared/enums";
import { HomePageConfigDto } from "src/shared/model/home-page-config/home-page-config.dto";
import { ImageSettingDto } from "src/shared/model/image-setting/image-setting.dto";
import { HomePageConfigService } from "src/shared/services/home-page-config.service";
import { AppBaseComponent } from "../../app-base.component";
@Component({
  selector: 'swipe-header',
  templateUrl: './swiper-header.component.html'
})
export class SwipeHeaderComponent extends AppBaseComponent implements OnInit {
  encapsulation: ViewEncapsulation.None | undefined;
  private _imageBanner: HomePageConfigDto[] = [];
  private _imageHeader: HomePageConfigDto[] = [];
  fileId?:string;
  constructor(
    protected override readonly injector: Injector,
    private readonly homePageConfigService: HomePageConfigService,

    ) {
    super(injector);
  }
  get id() {
    return this.getParam('id');
  }
  
  ngOnInit(): void {
      this.homePageConfigService.getAllBannerSlide().subscribe((result) => {
        this._imageBanner = result||[];
      });
      this.homePageConfigService.getBannerHeader().subscribe((result) => {
        this._imageHeader = result||[];
      });
      
      
      
  }

  get homepage(): HomePageConfigDto[] {
    return this._imageBanner.filter(x => x.status == Status.Active);
  }
  get imageHeader(): HomePageConfigDto[] {
    return this._imageHeader.filter(x => x.status == Status.Active);
  }
}
