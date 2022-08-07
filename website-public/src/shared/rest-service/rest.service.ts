import { HttpClient, HttpParameterCodec, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Rest } from './rest';
import { isUndefinedOrEmptyString } from '../utility/common-utils';
import { HttpErrorReporterService } from './http-error-reporter.service';
import { environment } from 'src/environments/environment';
import { CommonHelper } from '../utility/common-helper';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(
    protected http: HttpClient,
    protected httpErrorReporter: HttpErrorReporterService,
  ) {}
  protected getApiFromStore(apiName: string): string {
    return environment.apis.default.url;
}
//   protected getApiFromStore(apiName: string): string {
//     return environment.apis[apiName || 'default'].url;
// }

  handleError(err: any): Observable<any> {
    this.httpErrorReporter.reportError(err);
    return throwError(err);
  }

  request<T, R>(request: HttpRequest<T> | Rest.Request<T>, config?: Rest.Config, api?: string): Observable<R> {
    config = config || ({} as Rest.Config);
    api = api || this.getApiFromStore(config.apiName);
    const { method, params, ...options } = request;
    const { observe = Rest.Observe.Body, skipHandleError } = config;
    
    return this.http
        .request<R>(method, api + request.url, {
            observe,
            ...(params && {
                params: Object.keys(params).reduce((acc: { [acc: string]: number}, key) => {
                  const params: {[key: string]: any} = {}
                    const value = params[key];

                    if (CommonHelper.isUndefinedOrEmptyString(value)) return acc;
                    if (value === null) return acc;

                    acc[key] = value;
                    return acc;
                }, {}),
            }),
            ...options,
        } as any)
        .pipe(catchError(err => (skipHandleError ? throwError(err) : this.handleError(err))));
}

  private getParams(params: {[key: string]: any} = {}, encoder?: HttpParameterCodec): HttpParams {
    const filteredParams = Object.keys(params).reduce((acc: { [acc: string]: number}, key) => {
      const value = params[key];
      if (isUndefinedOrEmptyString(value)) return acc;
      if (value === null) return acc;
      acc[key] = value;
      return acc;
    }, {});
    return encoder
      ? new HttpParams({ encoder, fromObject: filteredParams })
      : new HttpParams({ fromObject: filteredParams });
  }
}


// import { HttpClient, HttpParameterCodec, HttpParams, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { Rest } from './rest';
// import { isUndefinedOrEmptyString } from '../utility/common-utils';
// import { HttpErrorReporterService } from './http-error-reporter.service';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root',
// })
// export class RestService {
//   constructor(
//     protected http: HttpClient,
//     protected httpErrorReporter: HttpErrorReporterService,
//   ) {}

// //   protected getApiFromStore(apiName: string): string {
// //     return environment.apis[apiName || 'default'].url;
// // }

//   handleError(err: any): Observable<any> {
//     this.httpErrorReporter.reportError(err);
//     return throwError(err);
//   }

//   request<T, R>(
//     request: HttpRequest<T> | Rest.Request<T>,
//     config?: Rest.Config,
//     api?: string,
//   ): Observable<R> {
//     config = config || ({} as Rest.Config);
//     // api = api || this.getApiFromStore(config.apiName);
//     const { method, params, ...options } = request;
//     const { observe = Rest.Observe.Body, skipHandleError } = config;

//     return this.http
//       .request<R>(method, api + request.url, {
//         observe,
//         ...(params && {
//           params: this.getParams(params, config.httpParamEncoder),
//         }),
//         ...options,
//       } as any)
//       .pipe(catchError(err => (skipHandleError ? throwError(err) : this.handleError(err))));
//   }

//   private getParams(params: Rest.Params, encoder?: HttpParameterCodec): HttpParams {
//     const filteredParams = Object.keys(params).reduce((acc, key) => {
//       // const value = params[key];
//       // if (isUndefinedOrEmptyString(value)) return acc;
//       // if (value === null) return acc;
//       // acc[key] = value;
//       return acc;
//     }, {});
//     return encoder
//       ? new HttpParams({ encoder, fromObject: filteredParams })
//       : new HttpParams({ fromObject: filteredParams });
//   }
// }
