import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseGetRequestInput } from '../models/app-dto';
import { ProductFileDto } from '../models/product-file/product-file.dto';
import { ProductDto } from '../models/product/product.dto';
import {  AppListService } from './base';

@Injectable({ providedIn: 'root' })
export class ProductService extends AppListService<string, ProductDto, BaseGetRequestInput> {
    constructor(restService: RestService) {
        super(restService, 'product');
    }

    getAllProducts() : Observable<any[]> {
        return this.restService.request({
          url: `/api/app/product`,
          method: 'GET'
        });
      }

      getListFile(id: string): Observable<ProductFileDto[]> {
        return this.restService.request({
          url: '/api/app/product/' + id + '/file',
          method: 'GET',
        });
      }
}
