import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FeedBackDto } from '../model/feedback/feedback.dto';
import { RestService } from '../rest-service/rest.service';

@Injectable({ providedIn: 'root' })
export class FeedBackService {
    constructor(private readonly restService: RestService) {
    }
    getAllFeedBack() : Observable<FeedBackDto[]> {
        return this.restService.request({
          url: `/api/app/feed-back/public`,
          method: 'GET'
        });
      }
}
