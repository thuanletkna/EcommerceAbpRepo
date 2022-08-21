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
  imageHomePage: HomePageConfigDto[] | undefined;
  ImageSettingFile: ImageSettingDto[]| undefined = [];
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
    this.homePageConfigService.getAllBanner().subscribe((result) => {
      this.imageHomePage = result;
    console.log(this.imageHomePage);
  });
  }
}
