import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { BaseGetRequestInput } from '../models/app-dto';
import { ProductPropertyDto } from '../models/product-property/product-property.dto';
import {  AppListService } from './base';

@Injectable({ providedIn: 'root' })
export class ProductPropertyService extends AppListService<string, ProductPropertyDto, BaseGetRequestInput> {
    constructor(restService: RestService) {
        super(restService, 'product-property');
    }

}
