import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryGetRequestInputDto } from '../models/category/category-get-request-input.dto';
import { CategoryDto } from '../models/category/category.dto';
import { AppListService } from './base';

@Injectable({ providedIn: 'root' })
export class CategoryService extends AppListService<string, CategoryDto, CategoryGetRequestInputDto> {
    constructor(restService: RestService) {
        super(restService, 'category');
    }

    getAllCategories() : Observable<any[]> {
        return this.restService.request({
          url: `/api/app/category`,
          method: 'GET'
        });
      }
}
