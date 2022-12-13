import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/auth/pages/login/login.component";
import {SignupComponent} from "./modules/auth/pages/signup/signup.component";
import {MainMoviesComponent} from "./modules/admin/movies/pages/main-movies/main-movies.component";
import {MainGendersComponent} from "./modules/admin/genders/pages/main-genders/main-genders.component";
import {MainClientComponent} from "./modules/client/pages/main-client/main-client.component";
import {MainRoomsComponent} from "./modules/admin/rooms/pages/main-rooms/main-rooms.component";
import {MainCarteleraComponent} from "./modules/client/pages/main-cartelera/main-cartelera.component";
import {LoginGuardianService} from "./modules/auth/pages/login/login-guardian.service";
import {
  MainMovies_showsComponent
} from "./modules/admin/movies_shows/pages/main-movies_shows/main-movies_shows.component";


const routes: Routes = [
  //rutas publicas
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  //rutas del cliente (también son ppublicas todos pueden verlas)
  {path: 'mainClient', component: MainClientComponent},
  {path: 'carteleraClient', component: MainCarteleraComponent},
  //rutas del admin
  {path: 'moviesAdmin', component: MainMoviesComponent, canActivate:[LoginGuardianService]},
  {path: 'gendersAdmin', component: MainGendersComponent, canActivate:[LoginGuardianService]},
  {path: 'showMoviesAdmin', component: MainMovies_showsComponent, canActivate:[LoginGuardianService]},
  {path: 'roomsAdmin', component: MainRoomsComponent, canActivate:[LoginGuardianService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
