import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptorService implements HttpInterceptor{
apiKey ='23d83d291824afae072c82730d494b81'
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clone = req.clone({
      params: req.params.set('api_key', this.apiKey)
    })
    return next.handle(clone)
  }
}
