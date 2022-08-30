
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagination, IResponsePaginate, PagedRequest } from '../model/base.dto';
import { BlogFileDto } from '../model/blog-file/blog-file.dto';
import { BlogDto } from '../model/blog/blog.dto';
import { ProductFileDto } from '../model/product-file/product-file.dto';
import { IParamFilterNews, ProductDto } from '../model/product/product.dto';
import { RestService } from '../rest-service/rest.service';
import { CommonHelper } from '../utility/common-helper';
import {  AppListService } from './base';

@Injectable({ providedIn: 'root' })
export class BlogService {
  constructor(private readonly restService: RestService) {
  }

    getAllProducts() : Observable<any[]> {
        return this.restService.request({
          url: `/api/app/blog`,
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
      getPaged(params: IParamFilterNews): Observable<IResponsePaginate<BlogDto>> {
        return this.restService.request(
            {
                url: `/api/app/blog/public-paged` + CommonHelper.getUrlParams(params),
                method: 'get',
                params
            }
        );
    }

    getListFile(id: string|undefined): Observable<BlogFileDto[]> {
      return this.restService.request({
        url: '/api/app/blog/' + id + '/file',
        method: 'GET',
      });
    }
}
