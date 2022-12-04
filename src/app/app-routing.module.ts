import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/auth/pages/login/login.component";
import {SignupComponent} from "./modules/auth/pages/signup/signup.component";

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
