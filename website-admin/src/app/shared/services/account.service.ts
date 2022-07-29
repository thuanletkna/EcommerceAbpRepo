import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUpdateProfile, ProfileModel } from '../models/profile.model';
import { IParamFilterUser } from '../models/user.model';
import { AppListService } from './base';

@Injectable({ providedIn: 'root' })
export class AccountService extends AppListService<
    number | string,
    ProfileModel,
    IParamFilterUser
> {
    constructor(protected readonly restService: RestService) {
        super(restService, 'Account');
    }

    myProfile(): Observable<ProfileModel> {
        return this.restService.request(
            {
                url: `${this.apiUrl}/my-profile`,
                method: 'get',
            },
            {
                apiName: this.apiName,
            },
        );
    }

    updateProfile(body: IUpdateProfile) {
        return this.restService.request(
            {
                url: `${this.apiUrl}/profile`,
                method: 'PUT',
                body,
            },
            {
                apiName: this.apiName,
            },
        );
    }
}
