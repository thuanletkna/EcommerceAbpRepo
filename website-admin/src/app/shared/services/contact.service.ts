import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactGetRequestInputDto } from '../models/contact/contact-get-request-input.dto';
import { ContactDto } from '../models/contact/contact.dto';
import { AppListService } from './base';

@Injectable({ providedIn: 'root' })
export class ContactService extends AppListService<string, ContactDto, ContactGetRequestInputDto> {
    constructor(restService: RestService) {
        super(restService, 'contact');
    }

    getContact() : Observable<any[]> {
        return this.restService.request({
          url: `/api/app/contact`,
          method: 'GET'
        });
      }
}
