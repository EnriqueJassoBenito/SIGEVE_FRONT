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



@NgModule({
  declarations: [
    MainMoviesComponent,
    MainGendersComponent,
    AddGendersComponent,
    MainRoomsComponent,
    AddRoomsComponent
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
