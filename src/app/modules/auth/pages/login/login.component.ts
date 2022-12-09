import { Component } from '@angular/core';
import {UserLogin} from "../../types/user";
import {LoginStateService} from "../../../../services/login-state.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

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
  get session() {
    return this.loginState.isLogged
  }

  constructor(private authService:AuthService, private readonly router: Router,
              private loginState: LoginStateService) {
    this.loginState.setIsLogged = !!localStorage.getItem("token");
    /*if (!this.loginState.isLogged)
      this.router.navigateByUrl("/")*/
  }
  loginForm(){
    this.authService.login(this.user);
  }
}


