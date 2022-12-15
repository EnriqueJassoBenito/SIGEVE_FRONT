import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainClientComponent } from './pages/main-client/main-client.component';
import {materialModules} from "../../types/material";
import { ModalClientComponent } from './pages/modal-client/modal-client.component';
import { MainCarteleraComponent } from './pages/main-cartelera/main-cartelera.component';
import { FormCardComponent } from './pages/form-card/form-card.component';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { TicketsComponent } from './pages/tickets/tickets.component';



@NgModule({
  declarations: [
    MainClientComponent,
    ModalClientComponent,
    MainCarteleraComponent,
    FormCardComponent,
    TicketsComponent
  ],
  imports: [
    CommonModule,
    ...materialModules,
    RouterLink,
    FormsModule
  ]
})
export class ClientModule { }
