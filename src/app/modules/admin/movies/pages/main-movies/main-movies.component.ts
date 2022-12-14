import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Movie} from "../../types/movie"
import {MoviesService} from "../../services/movies.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {AddMoviesComponent} from "../add-movies/add-movies.component";

@Component({
  selector: 'app-main-movies',
  templateUrl: './main-movies.component.html'
})
export class MainMoviesComponent implements OnInit{
  displayedColumns: string[]=[
    '#',
    'name_mve',
    'duration',
    'name_gdr',
    'image_mve',
    'actions'
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

  openDialog(enterAnimation: string, exitAnimation: string){

    const modalRef = this.dialog.open(AddMoviesComponent,{
      width: '60%',
      enterAnimationDuration: enterAnimation,
      exitAnimationDuration: exitAnimation,
      disableClose: true
    });
    modalRef.afterClosed().subscribe((result: any)=>{
      this.getAllMovies()
      this.movieService.movie = {
        name_mve: '',
        duration: 0,
        gender: {},
        availability_mve: 0,
      }
    });
  }
  editMovie(movie: any) {
    this.movieService.movie = {
      ...movie,
      gender: { id: movie.id_gdr }
    };
    this.movieService.edit = true;
    this.openDialog('2ms', '2ms');
  }

  disable(movie: Movie) {
    this.movieService.disable(movie)
      .subscribe((response) => {
        console.log(response);
        this.movieService.loading = false;
        this.getAllMovies();
      });
  }
  enable(movie: Movie) {
    this.movieService.enable(movie)
      .subscribe((response) => {
        console.log(response);
        this.movieService.loading = false;
        this.getAllMovies();
      });
  }

}
