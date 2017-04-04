import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {Router, CanActivate} from "@angular/router";

@Injectable()
export class AuthGuardService  implements CanActivate{

  constructor(private auth: AuthService, private router: Router) { }


  canActivate(){

    if(!this.auth.loggedIn()) {

      this.router.navigate([{outlets: {popup: 'login'}}]);

      return false;
    }

    return true;
  }

}
