import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HttpCustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.nextHandle(req, next);
    }

    private addHeader(request: HttpRequest<any>) {

        request = request.clone({
            // withCredentials: true,
            body: this.trimStringInBody(request.body),
            headers: request.headers.set('Accept-Language', 'vi')
        });

        return request;
    }

    private nextHandle(request: HttpRequest<any>, next: HttpHandler) {
        return next.handle(this.addHeader(request));
    }

    private trimStringInBody(body: object): object {
        if (!body) return body;

        Object.keys(body).map(k => body[k] = typeof body[k] == 'string' ? body[k].trim() : body[k]);

        return body;
    }
}
