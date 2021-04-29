import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { } 

  authenticate(username, password) {
    console.log(this.isUserLoggedIn())
    if((username.length > 0) && (password.length > 0)){
      
      sessionStorage.setItem('authenticateUser', username);
      console.log(this.isUserLoggedIn());
      return true;
    }
    return false;
    
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user==null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }
  
}
