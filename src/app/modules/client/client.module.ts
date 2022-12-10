import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainClientComponent } from './pages/main-client/main-client.component';
import {materialModules} from "../../types/material";
import { ModalClientComponent } from './pages/modal-client/modal-client.component';



@NgModule({
  declarations: [
    MainClientComponent,
    ModalClientComponent
  ],
  imports: [
    CommonModule,
    ...materialModules
  ]
})
export class ClientModule { }
