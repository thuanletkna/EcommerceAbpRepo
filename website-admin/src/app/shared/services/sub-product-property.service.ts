import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseGetRequestInput } from '../models/app-dto';
import { ProductDto } from '../models/product/product.dto';
import { SubProductPropertyDto } from '../models/sub-product-property/sub-product-property.dto';
import { AppBaseService } from './base';

@Injectable({ providedIn: 'root' })
export class SubProductPropertyService extends AppBaseService<string, SubProductPropertyDto, BaseGetRequestInput> {
    constructor(restService: RestService) {
        super(restService, 'sub-product-property');
    }

}
