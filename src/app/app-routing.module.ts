import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/auth/pages/login/login.component";
import {SignupComponent} from "./modules/auth/pages/signup/signup.component";
import {MainMoviesComponent} from "./modules/admin/movies/pages/main-movies/main-movies.component";
import {MainGendersComponent} from "./modules/admin/genders/pages/main-genders/main-genders.component";
import {MainClientComponent} from "./modules/client/pages/main-client/main-client.component";
import {MainRoomsComponent} from "./modules/admin/rooms/pages/main-rooms/main-rooms.component";
import {MainCarteleraComponent} from "./modules/client/pages/main-cartelera/main-cartelera.component";
import {LoginGuardianService} from "./modules/auth/service/login-guardian.service";
import {
  MainMovies_showsComponent
} from "./modules/admin/movies_shows/pages/main-movies_shows/main-movies_shows.component";
import {VerifyEmailComponent} from "./modules/auth/pages/verify/verify-email.component";
import {
  MainSales_tickersComponent
} from "./modules/admin/sales_tickers/pages/main-sales_tickers/main-sales_tickers.component";


const routes: Routes = [
  //rutas publicas
  {path:'login',component:LoginComponent, canActivate:[LoginGuardianService]},
  {path:'signup',component:SignupComponent, canActivate:[LoginGuardianService]},
  //rutas del cliente (también son ppublicas todos pueden verlas)
  {path: 'mainClient', component: MainClientComponent},
  {path: 'carteleraClient', component: MainCarteleraComponent},
  //rutas del admin
  {path: 'moviesAdmin', component: MainMoviesComponent, canActivate:[LoginGuardianService]},
  {path: 'gendersAdmin', component: MainGendersComponent, canActivate:[LoginGuardianService]},
  {path: 'showMoviesAdmin', component: MainMovies_showsComponent, canActivate:[LoginGuardianService]},
  {path: 'roomsAdmin', component: MainRoomsComponent, canActivate:[LoginGuardianService]},
  {path: 'salesticketsAdmin', component: MainSales_tickersComponent, canActivate:[LoginGuardianService]},
  {path: 'api/users/enable/:token', component: VerifyEmailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
