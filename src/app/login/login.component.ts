import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'your username'
  password = ''
  invalidLogin = false

  constructor(private router: Router, public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
    } else {
      this.invalidLogin = true
    }
  }

}
