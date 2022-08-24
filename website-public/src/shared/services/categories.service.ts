import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IPagination, IResponsePaginate } from '../model/base.dto';
import { CategoryDto, IParamFilterCategory } from '../model/category.dto';
import { Rest } from '../rest-service/rest';
import { RestService } from '../rest-service/rest.service';
import { CommonHelper } from '../utility/common-helper';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
    constructor(private readonly restService: RestService) {
    }
    getPaged(params: IParamFilterCategory): Observable<IResponsePaginate<CategoryDto>> {
        return this.restService.request(
            {
                // url: `https://localhost:44314/api/app/category/paged`,
                url: `/api/app/category/paged`,
                method: 'get',
            },
        );
    }
    getAllCategory(isBlog?: boolean): Observable<CategoryDto[]> {
        const request: Rest.Request<null> = {
            url: `/api/app/category/public`,
            method: 'GET',
        };

        return this.restService
            .request<null, HttpResponse<any>>(request, {
                observe: Rest.Observe.Response,
            })
            .pipe(
                map(response => {
                    const data = response.body;
                    if (isBlog !== undefined) {
                        return data.filter((v: { isBlog: boolean; }) => v.isBlog === isBlog);
                    }
                    return data;
                }),
            );
    }

    getAllProductsByCategory() : Observable<CategoryDto[]> {
        return this.restService.request({
          url: `/api/app/category/product-by-category`,
          method: 'GET'
        });
      }
}
