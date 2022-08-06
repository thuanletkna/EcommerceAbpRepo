import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogGetRequestInputDto } from '../models/blog/blog-get-request-input.dto';
import { BlogDto } from '../models/Blog/Blog.dto';
import { CategoryGetRequestInputDto } from '../models/category/category-get-request-input.dto';
import { CategoryDto } from '../models/category/category.dto';
import { AppListService } from './base';

@Injectable({ providedIn: 'root' })
export class BlogService extends AppListService<string, BlogDto, BlogGetRequestInputDto> {
    constructor(restService: RestService) {
        super(restService, 'blog');
    }

    getAllCategories() : Observable<any[]> {
        return this.restService.request({
          url: `/api/app/category`,
          method: 'GET'
        });
      }
}
