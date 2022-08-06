import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductGetRequestInputDto } from '../models/product/product-get-request-input.dto';
import { ProductDto } from '../models/product/product.dto';
import { AppBaseService } from './base';

@Injectable({ providedIn: 'root' })
export class ProductService extends AppBaseService<string, ProductDto, ProductGetRequestInputDto> {
    constructor(restService: RestService) {
        super(restService, 'product');
    }

    getAllProducts() : Observable<any[]> {
        return this.restService.request({
          url: `/api/app/product`,
          method: 'GET'
        });
      }
}
