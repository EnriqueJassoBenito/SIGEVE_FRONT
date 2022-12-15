import {Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {MovieShows} from "../../types/movie_shows";
import {MatPaginator} from "@angular/material/paginator";
import {Sale_ticket} from "../../types/sale_ticket";
import {SalesService} from "../../services/sales.service";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html'
})
export class TicketsComponent {
  tkn: any
  displayedColumns: string[]=[
    'id_ste',
    'movie_show_ste'

  ]
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  ticket!: MatTableDataSource<Sale_ticket>

  constructor(private _liveAnnouncer: LiveAnnouncer,
              public dialog: MatDialog, private salesService: SalesService) {
  }

  get isLoading(){
    return this.salesService.loading
  }
  ngOnInit(){
    this.getAllMyTickets()
  }
  announceSortChange(sort: Sort) {
    if (sort.direction) {
      this._liveAnnouncer.announce(`Sorted ${ sort.direction } ending`);
    } else {
      this._liveAnnouncer.announce(`Sort cleared`);
    }
  }

  getAllMyTickets(){
    this.tkn= localStorage.getItem('id')
    this.salesService.byId(this.tkn).subscribe((response)=>{
      this.ticket=new MatTableDataSource<Sale_ticket>(response)
      this.salesService.loading=false
      this.ticket.paginator=this.paginator
      this.ticket.sort=this.sort
      console.log(response)
    })
  }

}
