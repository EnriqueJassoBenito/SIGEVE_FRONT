import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Movie} from "../../types/movie"
import {MoviesService} from "../../services/movies.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-main-movies',
  templateUrl: './main-movies.component.html'
})
export class MainMoviesComponent implements OnInit{
  displayedColumns: string[]=[
    '#',
    'name_mve',
    'duration',
    'gender_mve'
  ]
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  movie!: MatTableDataSource<Movie>

  get isLoading(){
    return this.movieService.loading
  }

  constructor(private movieService: MoviesService,
              private _liveAnnouncer: LiveAnnouncer,
              public dialog: MatDialog) {
  }

  ngOnInit(){
    this.getAllMovies()
  }

  getAllMovies(){
    this.movieService.findAll().subscribe((response)=>{
      this.movie=new MatTableDataSource<Movie>(response)
      this.movieService.loading=false
      this.movie.paginator=this.paginator
      this.movie.sort=this.sort
      console.log(response)
    })
  }

  announceSortChange(sort: Sort) {
    if (sort.direction) {
      this._liveAnnouncer.announce(`Sorted ${ sort.direction } ending`);
    } else {
      this._liveAnnouncer.announce(`Sort cleared`);
    }
  }

  /*openDialog(enterAnimation: string, exitAnimation: string){
    const modalRef = this.dialog.open()
  }*/

  }
