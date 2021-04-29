import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// HttpHeaders,

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world/');
  }

  executeHelloWorldBeanServiceWithPathService(name) {
    // let basicAuthHttpHeaderString = this.createBasicAuthHttpHeader();
    // let headers = new HttpHeaders({Authorization: basicAuthHttpHeaderString})

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/${name}`, 
    // {headers})
    );
  }

  // createBasicAuthHttpHeader() {
  //   let username='karolina'
  //   let password='123';
  //   let basicAuthHttpHeaderString = ('Basic ' + window.btoa(`${username}:${password}`))
  //   return basicAuthHttpHeaderString;
  // }
}
