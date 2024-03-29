import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService, basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

}
