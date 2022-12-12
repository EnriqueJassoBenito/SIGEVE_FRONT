import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainClientComponent } from './pages/main-client/main-client.component';
import {materialModules} from "../../types/material";
import { ModalClientComponent } from './pages/modal-client/modal-client.component';
import { MainCarteleraComponent } from './pages/main-cartelera/main-cartelera.component';
import { FormCardComponent } from './pages/form-card/form-card.component';



@NgModule({
  declarations: [
    MainClientComponent,
    ModalClientComponent,
    MainCarteleraComponent,
    FormCardComponent
  ],
  imports: [
    CommonModule,
    ...materialModules
  ]
})
export class ClientModule { }
