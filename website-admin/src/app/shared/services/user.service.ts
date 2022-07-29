import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangePasswordDto } from '../models/user/change-password.dto';
import { RequestChangePasswordDto } from '../models/user/request-change-password.dto';
import { UserGetRequestInputDto } from '../models/user/user-get-request-input.dto';
import { UserDto } from '../models/user/user.dto';
import { AppBaseService } from './base';

@Injectable({ providedIn: 'root' })
export class UserService extends AppBaseService<string, UserDto, UserGetRequestInputDto> {
  constructor(_restService: RestService) {
    super(_restService, 'user');
  }

  toggleStatus(id: string): Observable<void> {
    return this.restService.request({
      url: `${this.apiUrl}/${id}/toggle-status`,
      method: 'POST',
    });
  }

  getById(id: string): Observable<UserDto> {
    return this.restService.request({
      url: `${this.apiUrl}/${id}`,
      method: 'GET',
    });
  }

  requestChangePassword(input: RequestChangePasswordDto): Observable<void> {
    return this.restService.request({
      url: `${this.apiUrl}/request-change-password`,
      method: 'POST',
      body: input,
    });
  }

  validChangePasswordCode(code: string): Observable<boolean> {
    return this.restService.request({
      url: `${this.apiUrl}/valid-change-password-code?code=` + code,
      method: 'GET',
    });
  }

  changePassword(input: ChangePasswordDto): Observable<void> {
    return this.restService.request(
        {
            url: `${this.apiUrl}/change-password`,
            method: 'POST',
            body: input
        }
    );
}
}
