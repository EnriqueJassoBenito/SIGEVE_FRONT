import { Component } from '@angular/core';
import {register, UserLogin} from "../types/user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: register = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    edad: '',
  };

  hide = true;
}
