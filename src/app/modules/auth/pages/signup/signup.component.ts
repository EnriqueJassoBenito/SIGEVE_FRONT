import { Component } from '@angular/core';
import {UserSigning} from "../../types/user";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {LoginStateService} from "../../../../services/login-state.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: UserSigning = {
    name: '',
    email: '',
    password: '',
  };

  hide = true;

  constructor(private authService:AuthService,) {
  }
  SingingForm(){
    this.authService.register(this.user);
  }
}
