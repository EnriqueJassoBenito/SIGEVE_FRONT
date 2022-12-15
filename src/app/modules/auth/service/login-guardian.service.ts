import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {LoginStateService} from "../../../services/login-state.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoginGuardianService implements CanActivate{

  constructor(private loginService: LoginStateService,
              private router: Router) {
  }


  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.loginService.isLogged){
      return true
    }else{
      this.router.navigate(['mainClient'])
      return false
    }
  }
}
