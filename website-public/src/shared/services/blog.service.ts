
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponsePaginate } from '../model/base.dto';
import { BlogFileDto } from '../model/blog-file/blog-file.dto';
import { BlogDto } from '../model/blog/blog.dto';
import { IParamFilterNews } from '../model/product/product.dto';
import { RestService } from '../rest-service/rest.service';
import { CommonHelper } from '../utility/common-helper';
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

    getBySlug(slug: string|undefined): Observable<BlogDto> {
      return this.restService.request(
          {
              url: `/api/app/blog/by-slug-public?slug=`+ slug,
              method: 'get',
              params: {
                  slug,
              },
          }
      );
    }
}
