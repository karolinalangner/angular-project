import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from './app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { } 
  
  executeAuthenticationService(username: string, password: string) {
    console.log("username1" + username)
    console.log("passwordxxx" + password)
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    
    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })
    
    //console.log("headersss" + headers.keys)

    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`,
      {headers}).pipe(
        map(
          data => {
            console.log("yoyo:" +username)
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data; 
          }
        )
      );
   
  }
  
  // executeBasicAuthenticationService(username: string, password: string) {

  //   let basicAuthHttpHeaderString = ('Basic ' + window.btoa(`${username}:${password}`))
  //   console.log("header:" + basicAuthHttpHeaderString)
  //   let headers = new HttpHeaders({Authorization: basicAuthHttpHeaderString})

  //   return this.http.get<AuthenticationBean>(
  //     `http://localhost:8080/basicauth`, {headers}).pipe(
  //     map(
  //       data=>{
  //         console.log("data48634:" + data)
  //         sessionStorage.setItem('authenticatedUser', username);
  //         sessionStorage.setItem('token', basicAuthHttpHeaderString);
  //         return data;
  //       }
  //     )
  //   );
  // }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem('token');
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user===null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }
  
}

export class AuthenticationBean {
  constructor(public message:string) {}
}