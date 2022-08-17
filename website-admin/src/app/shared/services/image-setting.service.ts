import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListBaseGetRequestInput } from '../models/app-dto';
import { ImageSettingDto } from '../models/image-setting/image-setting.dto';
import { SaveBannerSettingDto } from '../models/image-setting/save-banner-setting.dto';
import {  AppListService } from './base';

@Injectable({ providedIn: 'root' })
export class ImageSettingService extends AppListService<string, ImageSettingDto, ListBaseGetRequestInput> {
    constructor(restService: RestService) {
        super(restService, 'image-setting');
    }

    getSetting(type: string): Observable<ImageSettingDto[]> {
        return this.restService.request({
          url: '/api/app/image-setting/images',
          method: 'GET',
          params: { type }
        });
      }
  
      getLogo(): Observable<ImageSettingDto> {
        return this.restService.request({
          url: '/api/app/site-setting/logo',
          method: 'GET'
        });
      }
  
      saveLogo(fileId: string): Observable<string> {
        return this.restService.request({
          url: '/api/app/site-setting/save-logo/' + fileId,
          method: 'POST'
        });
      }
  
      saveBanner(body: SaveBannerSettingDto[]): Observable<void> {
        return this.restService.request({
          url: '/api/app/image-setting/save-banner',
          method: 'POST',
          body
        });
      }
}
