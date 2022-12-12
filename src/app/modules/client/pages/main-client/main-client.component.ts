import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalClientComponent} from "../modal-client/modal-client.component";
import {MoviesServiceClient} from "../../services/movies.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";
import {Movie} from "../../types/movies";

@Component({
  selector: 'app-main-client',
  templateUrl: './main-client.component.html',
  styleUrls: ['./main-client.component.css']
})
export class MainClientComponent implements OnInit{

  movies: Movie[] = [];

  get isLoading(){
    return this.movieService.loading
  }

  constructor(private movieService: MoviesServiceClient,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog) {
  }


  ngOnInit(){
    this.getAllEnableMovies()
  }

  getAllEnableMovies(){
    this.movieService.findEnable().subscribe((response)=>{
      this.movieService.loading=false
      this.movies=response
      console.log(response)
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalClientComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
