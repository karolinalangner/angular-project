import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private basicAuthenticationService: BasicAuthenticationService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.basicAuthenticationService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);

    return false;
    
  }
}
