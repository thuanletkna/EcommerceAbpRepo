
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePageConfigDto } from '../model/home-page-config/home-page-config.dto';
import { RestService } from '../rest-service/rest.service';


@Injectable({ providedIn: 'root' })
export class HomePageConfigService {
  constructor(private readonly restService: RestService) {
  }

  getAllBanner(): Observable<HomePageConfigDto[]> {
    return this.restService.request({
        url: `/api/app/home-page-config/public`,
        method: 'GET',
    });
  }
  getAllBannerSlide(): Observable<HomePageConfigDto[]> {
    return this.restService.request({
        url: `/api/app/home-page-config/homepage-banner`,
        method: 'GET',
    });
  }
  getBannerHeader(): Observable<HomePageConfigDto[]> {
    return this.restService.request({
        url: `/api/app/home-page-config/image-homepage-header`,
        method: 'GET',
    });
  }
}
