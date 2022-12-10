import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalClientComponent} from "../modal-client/modal-client.component";

@Component({
  selector: 'app-main-client',
  templateUrl: './main-client.component.html',
  styleUrls: ['./main-client.component.css']
})
export class MainClientComponent {

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalClientComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
