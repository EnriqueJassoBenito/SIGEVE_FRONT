import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Movie} from "../../../admin/movies/types/movie";
import {MoviesService} from "../../../admin/movies/services/movies.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {MovieShows} from "../../types/movie_shows";
import {Movies_showsService} from "../../../admin/movies_shows/services/movies_shows.service";
import {MoviesServiceClient} from "../../services/movies.service";
import {MovieShowsClientService} from "../../services/shows.service";
import {AddRoomsComponent} from "../../../admin/rooms/pages/add-rooms/add-rooms.component";
import {FormCardComponent} from "../form-card/form-card.component";

@Component({
  selector: 'app-main-cartelera',
  templateUrl: './main-cartelera.component.html'
})
export class MainCarteleraComponent {
  displayedColumns: string[]=[
    'image_mve',
    'name_mve',
    'date_show',
    'start_show',
    'actions'

  ]
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  movieShow!: MatTableDataSource<MovieShows>

  get isLoading(){
    return this.showService.loading
  }

  constructor(private showService: MovieShowsClientService,
              private _liveAnnouncer: LiveAnnouncer,
              public dialog: MatDialog) {
  }

  ngOnInit(){
    this.getAllShows()
  }

  openDialog(enterAnimation: string, exitAnimation: string){

    const modalRef = this.dialog.open(FormCardComponent,{
      width: '60%',
      enterAnimationDuration: enterAnimation,
      exitAnimationDuration: exitAnimation,
      disableClose: true
    });
    modalRef.afterClosed().subscribe((result: any)=>{
      this.getAllShows()
      this.showService.show = {
        id_msw: 0,
        date_show: "",
        start_show: '',
        image_mve: "",
        name_mve: '',
        number_room: {}
      }
    });
  }


  getAllShows(){
    this.showService.findEnable().subscribe((response)=>{
      this.movieShow=new MatTableDataSource<MovieShows>(response)
      this.showService.loading=false
      this.movieShow.paginator=this.paginator
      this.movieShow.sort=this.sort
      console.log(response)
    })
  }

  buyTicket(show:any){
    this.showService.show = {
      ...show,
    };
    this.openDialog('2ms', '2ms');
  }

  announceSortChange(sort: Sort) {
    if (sort.direction) {
      this._liveAnnouncer.announce(`Sorted ${ sort.direction } ending`);
    } else {
      this._liveAnnouncer.announce(`Sort cleared`);
    }
  }
}
