import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    if (this.auth.isAuthenticated()) {

      return true
    }

    this.auth.logout()
    this.router.navigate(["admin", "login"], { queryParams: { loginAgain: true } })


  }

}
