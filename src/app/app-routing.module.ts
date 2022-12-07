import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/auth/pages/login/login.component";
import {SignupComponent} from "./modules/auth/pages/signup/signup.component";
import {MainMoviesComponent} from "./modules/admin/movies/pages/main-movies/main-movies.component";
import {MainGendersComponent} from "./modules/admin/genders/pages/main-genders/main-genders.component";


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path: 'moviesAdmin', component: MainMoviesComponent},
  {path: 'gendersAdmin', component: MainGendersComponent},
  {path: 'roomsAdmin', component: MainGendersComponent},
  {path: 'showMoviesAdmin', component: MainGendersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
