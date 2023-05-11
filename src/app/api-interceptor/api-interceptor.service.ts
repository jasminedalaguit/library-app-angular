import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiKey = sessionStorage.getItem('lib_key');
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${apiKey}`
      }
    });

    return next.handle(request);
  }
}





