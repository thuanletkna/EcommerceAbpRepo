import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ContactDto } from '../model/contact/contact.dto';
import { RestService } from '../rest-service/rest.service';

@Injectable({ providedIn: 'root' })
export class ContactService {
    constructor(private readonly restService: RestService) {
    }
    getAllContact() : Observable<ContactDto[]> {
      return this.restService.request({
        url: `/api/app/contact/public`,
        method: 'GET'
      });
    }
}
