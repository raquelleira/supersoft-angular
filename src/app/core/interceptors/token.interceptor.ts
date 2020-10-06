import { Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        const url: Array<any> = request.url.split('/');
        const apiUrl: Array<any> = environment.apiUrl.split('/');
        const token = sessionStorage.getItem('app-token');

        if (token && url[2] === apiUrl[2]) {
            request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
        }

        return next.handle(request);
    }
}
