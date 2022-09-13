import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { FeedBackGetRequestInputDto } from '../models/feedback/feedback-get-request-input.dto';
import { FeedBackDto } from '../models/feedback/feedback.dto';
import { AppListService } from './base';

@Injectable({ providedIn: 'root' })
export class FeedBackService extends AppListService<string, FeedBackDto, FeedBackGetRequestInputDto> {
    constructor(restService: RestService) {
        super(restService, 'feed-back');
    }
    
}
