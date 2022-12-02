import { Component } from '@angular/core';
import {UserLogin, UserSigning} from "./types/user";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  userLogin: UserLogin = {
    email: '',
    password: '',
  };
  userSigning: UserSigning = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    age: '',

  };
  hide = true;
}
