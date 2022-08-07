import { HttpHeaders } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Params, Router } from '@angular/router';
import { AuthConfig, OAuthErrorEvent, OAuthInfoEvent, OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { from, Observable, of, pipe } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { removeRememberMe, setRememberMe } from '../../utility/auth-utils';
import { noop } from '../../utility/common-utils';
import { LoginParams } from '../auth';

export const oAuthStorage = localStorage;

export abstract class AuthFlowStrategy {
    abstract readonly isInternalAuth: boolean;

    // protected httpErrorReporter: HttpErrorReporterService;
    protected oAuthService: OAuthService;
    protected oAuthConfig: AuthConfig;
    protected tenantKey?: string;

    abstract checkIfInternalAuth(queryParams?: Params): boolean;
    abstract navigateToLogin(queryParams?: Params): void;
    abstract logout(queryParams?: Params): Observable<any>;
    abstract login(params?: LoginParams | Params): Observable<any>;

    // private catchError = (err: any) => {
    //     this.httpErrorReporter.reportError(err);
    //     return of(null);
    // };

    constructor(protected injector: Injector) {
        // this.httpErrorReporter = injector.get(HttpErrorReporterService);
        this.oAuthService = injector.get(OAuthService);
        this.oAuthConfig = environment.oAuthConfig;
        this.listenToOauthErrors();
    }

    async init(): Promise<any> {
        const shouldClear = shouldStorageClear(environment.oAuthConfig.clientId, oAuthStorage);
        if (shouldClear) clearOAuthStorage(oAuthStorage);

        this.oAuthService.configure(this.oAuthConfig);

        this.oAuthService.events
            .pipe(filter(event => event.type === 'token_refresh_error'))
            .subscribe(() => this.navigateToLogin());

        return this.oAuthService
            .loadDiscoveryDocument()
            .then(() => {
                if (this.oAuthService.hasValidAccessToken() || !this.oAuthService.getRefreshToken()) {
                    return Promise.resolve();
                }

                return this.refreshToken();
            })
            .catch(this.catchError);
    }
    catchError(catchError: any): any {
        throw new Error('Method not implemented.');
    }

    protected refreshToken() {
        return this.oAuthService.refreshToken().catch(() => clearOAuthStorage());
    }

    protected listenToOauthErrors() {
        this.oAuthService.events
            .pipe(
                filter(event => event instanceof OAuthErrorEvent),
                tap(() => clearOAuthStorage()),
                switchMap(async () => null),
            )
            .subscribe();
    }
}

export class AuthCodeFlowStrategy extends AuthFlowStrategy {
    readonly isInternalAuth = false;

    override async init() {
        return super
            .init()
            .then(() => this.oAuthService.tryLogin().catch(noop))
            .then(() => this.oAuthService.setupAutomaticSilentRefresh({}, 'access_token'));
    }

    navigateToLogin(queryParams?: Params) {
        this.oAuthService.initCodeFlow('', this.getCultureParams(queryParams));
    }

    checkIfInternalAuth(queryParams?: Params) {
        this.oAuthService.initCodeFlow('', this.getCultureParams(queryParams));
        return false;
    }

    logout(queryParams?: Params) {
        return from(this.oAuthService.revokeTokenAndLogout(this.getCultureParams(queryParams)));
    }

    login(queryParams?: Params) {
        this.oAuthService.initCodeFlow('', this.getCultureParams(queryParams));
        return of(null);
    }

    private getCultureParams(queryParams?: Params) {
        const lang = 'vi';
        const culture = { culture: lang, 'ui-culture': lang };
        return { ...(lang && culture), ...queryParams };
    }
}

export class AuthPasswordFlowStrategy extends AuthFlowStrategy {
    readonly isInternalAuth = true;
    private cookieKey = 'rememberMe';
    private storageKey = 'passwordFlow';

    private listenToTokenExpiration() {
        this.oAuthService.events
            .pipe(
                filter(
                    event =>
                        event instanceof OAuthInfoEvent &&
                        event.type === 'token_expires' &&
                        event.info === 'access_token',
                ),
            )
            .subscribe(() => {
                if (this.oAuthService.getRefreshToken()) {
                    this.refreshToken();
                } else {
                    this.oAuthService.logOut();
                    removeRememberMe();
                }
            });
    }

    override async init() {
        if (!getCookieValueByName(this.cookieKey) && localStorage.getItem(this.storageKey)) {
            this.oAuthService.logOut();
        }

        return super.init().then(() => this.listenToTokenExpiration());
    }

    navigateToLogin(queryParams?: Params) {
        const router = this.injector.get(Router);
        router.navigate(['/'], { queryParams });
    }

    checkIfInternalAuth() {
        return true;
    }

    login(params: LoginParams): Observable<any> {
        const tenant = null;
        return from(
            this.oAuthService.fetchTokenUsingPasswordFlow(
                params.username,
                params.password,
                // new HttpHeaders({ ...(tenant && tenant.id && { [this.tenantKey]: tenant.id }) }),
            ),
        ).pipe(this.pipeToLogin(params));
    }

    pipeToLogin(params: Pick<LoginParams, 'redirectUrl' | 'rememberMe' | 'redirectParams'>) {
        const router = this.injector.get(Router);

        return pipe(
            switchMap(data => of(data)),
            tap(() => {
                // setRememberMe(params.rememberMe);
                if (params.redirectUrl) {
                    router.navigate([params.redirectUrl], { queryParams: params.redirectParams });
                }
            }),
        );
    }

    logout(queryParams?: Params) {
        const router = this.injector.get(Router);

        return from(this.oAuthService.revokeTokenAndLogout(queryParams)).pipe(
            switchMap(() => of(null)),
            tap(() => {
                router.navigateByUrl('/');
                clearOAuthStorage();
                removeRememberMe();
            }),
        );
    }

    protected override refreshToken() {
        return this.oAuthService.refreshToken().catch(() => {
            clearOAuthStorage();
            removeRememberMe();
        });
    }
}

export const AUTH_FLOW_STRATEGY = {
    Code(injector: Injector) {
        return new AuthCodeFlowStrategy(injector);
    },
    Password(injector: Injector) {
        return new AuthPasswordFlowStrategy(injector);
    },
};

export function clearOAuthStorage(storage: OAuthStorage = oAuthStorage) {
    const keys = [
        'access_token',
        'id_token',
        'refresh_token',
        'nonce',
        'PKCE_verifier',
        'expires_at',
        'id_token_claims_obj',
        'id_token_expires_at',
        'id_token_stored_at',
        'access_token_stored_at',
        'granted_scopes',
        'session_state',
        'user_id'
    ];

    keys.forEach(key => storage.removeItem(key));
}

function shouldStorageClear(clientId: string, storage: OAuthStorage): boolean {
    const key = 'abpOAuthClientId';
    if (!storage.getItem(key)) {
        storage.setItem(key, clientId);
        return false;
    }

    const shouldClear = storage.getItem(key) !== clientId;
    if (shouldClear) storage.setItem(key, clientId);
    return shouldClear;
}

function getCookieValueByName(name: string) {
    // const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    // return match ? match[2] : '';

    return localStorage.getItem(name);
}
