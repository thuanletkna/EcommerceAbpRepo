
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagination, IResponsePaginate, PagedRequest } from '../model/base.dto';
import { IParamFilterNews, ProductDto } from '../model/product/product.dto';
import { RestService } from '../rest-service/rest.service';
import { CommonHelper } from '../utility/common-helper';
import {  AppListService } from './base';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private readonly restService: RestService) {
  }

    getAllProducts() : Observable<any[]> {
        return this.restService.request({
          url: `/api/app/product`,
          method: 'GET'
        });
      }

      // getListProductPaged(groupId?: number): Observable<IPagination<ProductDto>> {
      //   return this.restService.request({
      //     url: `/api/app/management-report/public-paged`,
      //     method: 'GET',
      //     params: {groupId}
      //   })
      // }
      getPaged(params: PagedRequest): Observable<IResponsePaginate<ProductDto>> {
        return this.restService.request(
            {
                url: `/api/app/product/public-paged` + CommonHelper.getUrlParams(params),
                method: 'get',
                params
            }
        );
    }
}
