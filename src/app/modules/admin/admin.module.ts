import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMoviesComponent } from './movies/pages/main-movies/main-movies.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    MainMoviesComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatIconModule
  ]
})
export class AdminModule { }
