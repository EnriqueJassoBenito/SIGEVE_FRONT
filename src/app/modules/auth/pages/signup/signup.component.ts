import { Component } from '@angular/core';
import {UserSigning} from "../../types/user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: UserSigning = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    age: '',
  };

  hide = true;
}
