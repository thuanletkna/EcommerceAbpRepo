import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router'
import { environment } from 'src/environments/environment';
import { AppConsts } from '../consts/app-consts';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
      private readonly oAuthServer: OAuthService) {
    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
      // AppConsts.currentStaff = await this._staffService.getCurrentStaff().toPromise();
      // if (AppConsts.currentStaff?.id) {
      //   return true;
      // }
      return true;
      // window.location.href = environment.apis.default.url + '/Account/Login?returnUrl=' + environment.apis.default.url + state.url;
      // return false;
    }
  
}
