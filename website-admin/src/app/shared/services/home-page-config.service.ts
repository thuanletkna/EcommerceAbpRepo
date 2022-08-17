import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseGetRequestInput, ListBaseGetRequestInput } from '../models/app-dto';
import { HomePageConfigDto } from '../models/home-page-config/home-page-config.dto';
import { ProductFileDto } from '../models/product-file/product-file.dto';
import { ProductDto } from '../models/product/product.dto';
import {  AppListService } from './base';

@Injectable({ providedIn: 'root' })
export class HomePageConfigService extends AppListService<string, HomePageConfigDto, ListBaseGetRequestInput> {
    constructor(restService: RestService) {
        super(restService, 'home-page-config');
    }

   
}
