import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubProductPropertyGetRequestInputDto } from '../models/sub-product-property/sub-product-property-get-request-input.dto';
import { SubProductPropertyDto } from '../models/sub-product-property/sub-product-property.dto';
import { AppBaseService } from './base';

@Injectable({ providedIn: 'root' })
export class SubProductPropertyService extends AppBaseService<string, SubProductPropertyDto, SubProductPropertyGetRequestInputDto> {
    constructor(restService: RestService) {
        super(restService, 'sub-product-property');
    }

}
