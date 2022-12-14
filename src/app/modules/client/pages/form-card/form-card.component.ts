import {Component, OnInit} from '@angular/core';
import {MovieShows} from "../../types/movie_shows";
import {MovieShowsClientService} from "../../services/shows.service";
import {SalesService} from "../../services/sales.service";
import {Sale_ticket} from "../../types/sale_ticket";
import {Dialog, DialogRef} from "@angular/cdk/dialog";
import {Movies_showsService} from "../../../admin/movies_shows/services/movies_shows.service";
import {Movie_show} from "../../../admin/movies_shows/types/movies_shows";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html'
})
export class FormCardComponent implements OnInit{
  cosa={
    nada: '',
    nada2: '',
    nada3: '',
    nada4: '',
  }
  sale: Sale_ticket;
  shows: any[]=[]
  ngOnInit(): void{
    this.showService.findEnable().subscribe(response=>{
      this.shows=response
      this.showService.loading=false
    })
  }
  constructor(private saleService: SalesService,
              public modalRef: DialogRef<FormCardComponent>,
              private showService: MovieShowsClientService) {
    this.sale=this.saleService.ticket
  }
  saveSale(){
      this.saleService.saveSale(this.sale).subscribe(response=>{
        this.modalRef.close()
      })
  }
}
