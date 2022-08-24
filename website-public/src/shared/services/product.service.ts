
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagination, IResponsePaginate, PagedRequest } from '../model/base.dto';
import { ProductFileDto } from '../model/product-file/product-file.dto';
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

    getListFile(id: string|undefined): Observable<ProductFileDto[]> {
      return this.restService.request({
        url: '/api/app/product/' + id + '/file',
        method: 'GET',
      });
    }
    getById(id: string|undefined): Observable<ProductFileDto> {
      return this.restService.request({
        url: '/api/app/product/' + id + '/by-slug-public',
        method: 'GET',
      });
    }

    getByCategoryId(id: string|undefined): Observable<ProductDto[]> {
      return this.restService.request({
        url: '/api/app/product/' + id + '/by-category-id-public',
        method: 'GET',
        params: {
          id,
      },
      });
    }

    getBySlug(slug: string|undefined): Observable<ProductDto> {
      return this.restService.request(
          {
              url: `/api/app/product/by-slug-public?slug=`+ slug,
              method: 'get',
              params: {
                  slug,
              },
          }
      );
  }
}
