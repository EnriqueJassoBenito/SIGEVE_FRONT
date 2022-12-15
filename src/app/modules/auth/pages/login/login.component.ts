import { Component } from '@angular/core';
import {UserLogin} from "../../types/user";
import {LoginStateService} from "../../../../services/login-state.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {GeneralService} from "../../../../services/general.service";
import Swal from "sweetalert2";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: UserLogin = {
    email: '',
    password: '',
  };
  hide = true;
  /*get session() {
    return this.loginState.isLogged
  }*/

  constructor(private authService:AuthService, private readonly router: Router,
              private loginState: LoginStateService, private generalService: GeneralService) {
   /* this.loginState.setIsLogged = !!localStorage.getItem("token");*/
  }
  /*loginForm(){
    this.authService.login(this.user).subscribe((response: any)=>{
      if (response.error) {
        this.generalService.showError(
          response.error.message
        );
        return;
      }
      localStorage.setItem("token", response.token)
/!*      this.loading = false*!/
      this.loginState.setIsLogged = true
      this.authService.isLoading
    })
  }*/



  loginForm() {
    this.authService.login(this.user)

  }
}


