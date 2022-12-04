import { Component } from '@angular/core';
import {UserLogin} from "../../types/user";
/*
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {UserLogin} from "../types/user";
*/
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
/*
  get isLoading(){
    return this.authService.isLoading;
  }

  constructor(private authService: AuthService,
              private router: Router) {
    if (!!localStorage.getItem("token"))
      this.router.navigateByUrl('/');
  }

  signin(){
    this.authService.login(this.user);
  }
*/
}


