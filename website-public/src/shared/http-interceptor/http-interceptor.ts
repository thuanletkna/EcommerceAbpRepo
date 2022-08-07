import { isPlatformServer } from '@angular/common';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { NotificationModalService } from '../component/notification-modal/notification-modal.service';

@Injectable({providedIn: 'root'})
export class HttpCustomInterceptor implements HttpInterceptor {

  constructor(@Inject(PLATFORM_ID) private platformId: object,
    private readonly notificationModalService: NotificationModalService,
    private readonly router: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.nextHandle(req, next);
  }

  private addHeader(request: HttpRequest<any>) {

    request = request.clone({
      // withCredentials: true,
      body: this.trimStringInBody(request.body),
      setHeaders: this.getAdditionalHeaders(request.headers),
    });

    return request;
  }

  private getAdditionalHeaders(existingHeaders?: HttpHeaders) {
    const headers = {} as any;

    const token = localStorage.getItem('access_token');
    if (!existingHeaders?.has('Authorization') && token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const lang = localStorage.getItem('lang') ?? 'vi';
    if (!existingHeaders?.has('Accept-Language') && lang) {
      headers['Accept-Language'] = lang;
    }

    if (isPlatformServer(this.platformId)) {
      headers['ssr'] = 'yes';
    }

    return headers;
  }

  private nextHandle(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(this.addHeader(request))
      .pipe(
        retry(0),
        catchError((err: HttpErrorResponse) => {
          let errorMessage = err.error?.error?.message || err.error?.error_description || err.error?.message;
          switch (err.status) {
            case 404:
              this.router.navigate(['/error/404']);
              break;
            case 401:
              const keys = [
                'access_token',
                'expired_at',
                'full_name',
              ];
              keys.forEach(key => localStorage.removeItem(key));
              let returnUrl = document.location.pathname;
              if (document.location.search) {
                returnUrl += document.location.search;
              }
              this.router.navigate(['/dang-nhap'], { queryParams: { returnUrl } });
              break;
            case 500:
              this.router.navigate(['/error/500']);
              break;
            default:
              if (!isPlatformServer(this.platformId)) {
                this.notificationModalService.show({
                  title: 'Thông báo',
                  message: errorMessage,
                  buttonText: 'OK'
                });
              } else {
                throw null;
              }
              break;
          }
          return throwError(errorMessage);
        })
      );
  }

  private trimStringInBody(body: object): object {
    if (!body) return body;

    // Object.keys(body).map(k => body[k] = typeof body[k] == 'string' ? body[k].trim() : body[k]);

    return body;
  }
}
