import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/auth/pages/login/login.component";
import {SignupComponent} from "./modules/auth/pages/signup/signup.component";
import {MainMoviesComponent} from "./modules/admin/movies/pages/main-movies/main-movies.component";
import {MainGendersComponent} from "./modules/admin/genders/pages/main-genders/main-genders.component";
import {MainClientComponent} from "./modules/client/pages/main-client/main-client.component";
import {MainRoomsComponent} from "./modules/admin/rooms/pages/main-rooms/main-rooms.component";
import {MainCarteleraComponent} from "./modules/client/pages/main-cartelera/main-cartelera.component";


const routes: Routes = [
  //rutas publicas
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  //rutas del cliente (también son ppublicas todos pueden verlas)
  {path: 'mainClient', component: MainClientComponent},
  {path: 'carteleraClient', component: MainCarteleraComponent},
  //rutas del admin
  {path: 'moviesAdmin', component: MainMoviesComponent},
  {path: 'gendersAdmin', component: MainGendersComponent},
  {path: 'showMoviesAdmin', component: MainGendersComponent},
  {path: 'roomsAdmin', component: MainRoomsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
