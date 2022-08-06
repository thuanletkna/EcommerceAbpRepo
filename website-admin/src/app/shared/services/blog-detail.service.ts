import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogDetailGetRequestInputDto } from '../models/blog-detail/blog-detail-get-request-input.dto';
import { BlogDetailDto } from '../models/blog-detail/blog-detail.dto';

import {  AppListService } from './base';

@Injectable({ providedIn: 'root' })
export class BlogDetailService extends AppListService<string, BlogDetailDto, BlogDetailGetRequestInputDto> {
    constructor(restService: RestService) {
        super(restService, 'blog-detail');
    }
   
}
