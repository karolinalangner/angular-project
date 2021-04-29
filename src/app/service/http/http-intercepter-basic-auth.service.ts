import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from 'src/app/basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'karolina'
    // let password = '123'
    // let basicAuthHttpHeaderString = ('Basic ' + window.btoa(`${username}:${password}`))

    let basicAuthHttpHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    console.log('basic from intercept method:'+ basicAuthHttpHeaderString)
    let username = this.basicAuthenticationService.getAuthenticatedUser();
    console.log('username from intercept method:' + username)
    
    if (basicAuthHttpHeaderString && username) {

      request = request.clone(
        {
          setHeaders: {
            Authorization: basicAuthHttpHeaderString
          }
        }
      )
      return next.handle(request);
    }

  }
}
