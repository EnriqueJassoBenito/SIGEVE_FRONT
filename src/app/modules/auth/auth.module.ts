import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {LoginComponent} from "./pages/login/login.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {materialModules} from "../../types/material";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  exports: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    ...materialModules,
    ...materialModules,
    FormsModule
  ]
})
export class AuthModule { }
