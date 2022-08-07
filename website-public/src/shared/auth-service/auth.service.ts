import { Injectable, Injector } from '@angular/core';
import { Params } from '@angular/router';
import { LoginParams } from './auth';
import { AuthFlowStrategy, AUTH_FLOW_STRATEGY } from './strategies/auth-flow.strategy';
import { environment } from 'src/environments/environment';
import { from, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private strategy?: AuthFlowStrategy;

    get isInternalAuth() {
        return this.strategy?.isInternalAuth;
    }

    constructor(protected injector: Injector) {}

    async init() {
        const oAuthConfig = environment.oAuthConfig;
        this.strategy =
            oAuthConfig['responseType'] === 'code'
                ? AUTH_FLOW_STRATEGY.Code(this.injector)
                : AUTH_FLOW_STRATEGY.Password(this.injector);

        return new Promise((resolve, reject) => {
            resolve(this.strategy?.init());
        });
    }

    // logout(queryParams?: Params): Observable<any> {
    //     return this.strategy.logout(queryParams);
    // }

    navigateToLogin(queryParams?: Params) {
        this.strategy?.navigateToLogin(queryParams);
    }

    // login(params?: LoginParams) {
    //     return from(this.strategy.login(params));
    // }
}
