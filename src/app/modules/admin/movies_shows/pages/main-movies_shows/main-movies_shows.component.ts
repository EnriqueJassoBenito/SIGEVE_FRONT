import {Component, OnInit, ViewChild} from "@angular/core";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Movie} from "../../../movies/types/movie";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {Movie_show} from "../../types/movies_shows";
import {Movies_showsService} from "../../services/movies_shows.service";



@Component({
  selector: 'app-main-movies_shows',
  templateUrl: './main-movies_shows.component.html'
})

export class MainMovies_showsComponent implements OnInit{
  displayedColumns: string[]=[
    '#',
    'name_mve',
    'number_room',
    'start_show',
    'end_show',
    'date_show'
  ]
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  movie_show!: MatTableDataSource<Movie_show>

  get isLoading(){
    return this.moviesShowsService.loading
  }

  constructor(private moviesShowsService: Movies_showsService,
              private _liveAnnouncer: LiveAnnouncer,
              public dialog: MatDialog) {
  }

  ngOnInit(){
    this.getAllMovies_Shows()
  }

  getAllMovies_Shows(){
    this.moviesShowsService.findAll().subscribe((response)=>{
      this.movie_show=new MatTableDataSource<Movie_show>(response)
      this.moviesShowsService.loading=false
      this.movie_show.paginator=this.paginator
      this.movie_show.sort=this.sort
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

    const modalRef = this.dialog.open(AddMovies_showsComponent,{
      width: '60%',
      enterAnimationDuration: enterAnimation,
      exitAnimationDuration: exitAnimation,
      disableClose: true
    });
    modalRef.afterClosed().subscribe((result: any)=>{
      this.getAllMovies_Shows()
      this.moviesShowsService.movie_show = {
        name_mve: '',
        number_room: {},
        start_show: '',
        end_show: '',
        date_show: '',
        availability_msw: 0,
      }
    });
  }*/
  editRoom(movie_show: any) {
    this.moviesShowsService.movie_show = {
      ...movie_show,
      movie: { id: movie_show.id_mve }
    };
    this.moviesShowsService.edit = true;
    /*this.openDialog('2ms', '2ms');*/
  }

  changeStatus(movie_show: Movie_show) {
    this.moviesShowsService.changeStatus(movie_show)
      .subscribe((response) => {
        console.log(response);
        this.moviesShowsService.loading = false;
        this.getAllMovies_Shows();
      });
  }
}
