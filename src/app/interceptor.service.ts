import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
     
     const token = 'papaaaaaaaaaa222222544444444';

     if(token){
      
        const cloned = req.clone({
          headers : req.headers.set('authentication', 'bearer' + token)
        })
        
        return next.handle(cloned);
     
      }
      else
      {
        return next.handle(req);
      }  
  }

  
};
