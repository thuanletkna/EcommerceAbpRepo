import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injector, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
export class AppBaseComponent {
  protected readonly router: Router;
  readonly activatedRoute: ActivatedRoute;
  private readonly platformId: object;

  get lang() {
    return "vi";
  }

  constructor(protected readonly injector: Injector) {
    this.router = injector.get(Router);
    this.activatedRoute = injector.get(ActivatedRoute);
    this.platformId = injector.get(PLATFORM_ID);
  }
  get isBrowser() {
    return isPlatformBrowser(this.platformId);
}
protected get isServer() {
  return isPlatformServer(this.platformId);
}
protected getParam(param: string): string|null {
  return this.activatedRoute.snapshot.paramMap.get(param);
}

protected getQueryParam(param: string): string |null{
  return this.activatedRoute.snapshot.queryParamMap.get(param);
}

protected getQueryParamToArray(param: string): string[] {
  return this.activatedRoute.snapshot.queryParamMap.getAll(param);
}

redirectTo(url: string, params?: NavigationExtras): void {
  this.router.navigate([url], {
    relativeTo: this.activatedRoute,
    queryParamsHandling: 'merge',
    ...params,
  });
}
}
