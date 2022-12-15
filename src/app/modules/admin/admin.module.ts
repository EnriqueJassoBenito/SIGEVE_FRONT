import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMoviesComponent } from './movies/pages/main-movies/main-movies.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { MainGendersComponent } from './genders/pages/main-genders/main-genders.component';
import { AddGendersComponent } from './genders/pages/add-genders/add-genders.component';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {materialModules} from "../../types/material";
import {MainRoomsComponent} from "./rooms/pages/main-rooms/main-rooms.component";
import {AddRoomsComponent} from "./rooms/pages/add-rooms/add-rooms.component";
import {AddMoviesComponent} from "./movies/pages/add-movies/add-movies.component";
import {MainMovies_showsComponent} from "./movies_shows/pages/main-movies_shows/main-movies_shows.component";
import {AddMovies_showsComponent} from "./movies_shows/pages/add-movies_shows/add-movies_shows.component";
import {MainSales_tickersComponent} from "./sales_tickers/pages/main-sales_tickers/main-sales_tickers.component";

@NgModule({
  declarations: [
    MainMoviesComponent,
    AddMoviesComponent,
    MainGendersComponent,
    AddGendersComponent,
    MainRoomsComponent,
    AddRoomsComponent,
    MainMovies_showsComponent,
    AddMovies_showsComponent,
    MainSales_tickersComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ...materialModules
  ]
})
export class AdminModule { }
