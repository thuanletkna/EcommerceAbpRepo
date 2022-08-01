import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { TradeMarkGetRequestInputDto } from '../models/trade-mark/trade-mark-get-request-input.dto';
import { TradeMarkDto } from '../models/trade-mark/trade-mark.dto';
import { AppListService } from './base';

@Injectable({ providedIn: 'root' })
export class TradeMarkService extends AppListService<string, TradeMarkDto, TradeMarkGetRequestInputDto> {
    constructor(restService: RestService) {
        super(restService, 'trade-mark');
    }

    // getAllCategories() : Observable<any[]> {
    //     return this.restService.request({
    //       url: `/api/app/trade-mark`,
    //       method: 'GET'
    //     });
    //   }
}
