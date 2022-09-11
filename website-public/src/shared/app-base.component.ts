import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injector, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { CommonHelper } from './utility/common-helper';
export class AppBaseComponent {
  protected readonly router: Router;
  readonly activatedRoute: ActivatedRoute;
  private readonly platformId: object;

  get currentPage(): number {
    const page = this.getQueryParam('page');
    if (page && CommonHelper.isNumber(page)) {
      return Number(page);
    }
    return 1;
  }

  get lang() {
    return 'vi';
  }

  constructor(protected readonly injector: Injector) {
    this.router = injector.get(Router);
    this.activatedRoute = injector.get(ActivatedRoute);
    this.platformId = injector.get(PLATFORM_ID);
  }

  imageError(event: { target: { src: string; }; }, imageUrl: string) {
    if (event) event.target.src = imageUrl;
}
public formatCurrency(value: number) {
  return new Intl.NumberFormat('vi-VN', {}).format(value) + ' vnđ';
}
// getResourceById(path: string, resolution?: string) {
//   if (!path) return '';
//   if (path.startsWith('http')) return path;
//   return `${environment.s3Config.publishUrl}/${path}`;
// }

getLinkMedia(url: string|undefined) {
  if (!url) return '';
  if (url.toLowerCase().startsWith('http')) return url;
  return `${environment.apis.default.url}/api/app/file-storage/${url}`;
}
  get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
  protected get isServer() {
    return isPlatformServer(this.platformId);
  }
  protected getParam(param: string): string | null {
    return this.activatedRoute.snapshot.paramMap.get(param);
  }

  protected getQueryParam(param: string): string | null {
    return this.activatedRoute.snapshot.queryParamMap.get(param);
  }

//   protected getQuerystringParam(param: string): string {
//     return this.activatedRoute.snapshot.paramMap.get(param);
// }

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
  formatDate(date: string | Date, format = 'DD/MM/YYYY') {
    if (!date) {
      return '';
    }
    return moment(date).local().format(format);
  }
  public getPathProductDetail(slug?: string) {
    return '/chi-tiet-san-pham/' + slug;
  }
  public getPathBlogDetail(slug?: string) {
    return '/chi-tiet-bai-dang/' + slug;
  }

  public getPathProductByCategoryId(slug?: string) {
    return '/san-pham/' + slug;
  }

  public getPathBlogByCategoryId(categoryId?: string) {
    return '/bai-dang/' + categoryId;
  }
}
