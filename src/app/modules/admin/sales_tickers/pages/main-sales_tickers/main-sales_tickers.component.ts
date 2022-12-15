import {Component, OnInit, ViewChild} from "@angular/core";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {Sale_ticker} from "../../types/sales_tickers";

@Component({
  selector: 'app-main-sales_tickers',
  templateUrl: './main-sales_tickers.component.html'
})

export class MainSales_tickersComponent implements OnInit{
  displayedColumns: string[]=[
    'movie_show_ste',
    'name_usr',
    'total_count',
  ]
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  sale_ticker!: MatTableDataSource<Sale_ticker>

  ngOnInit(){
    //   this.getAllSales_Tickers()
    }


  constructor(private _liveAnnouncer: LiveAnnouncer,
              public dialog: MatDialog) {}

  // get isLoading(){
  //   return this.salesTickersService.loading
  // }
  //
  // constructor(private salesTickersService: Sales_tickersService,
  //             private _liveAnnouncer: LiveAnnouncer,
  //             public dialog: MatDialog) {
  // }
  //
  // ngOnInit(){
  //   this.getAllSales_Tickers()
  // }
  //
  // getAllSales_Tickers(){
  //   this.salesTickersService.findAll().subscribe((response)=>{
  //     this.sale_ticker=new MatTableDataSource<Sale_ticker>(response)
  //     this.salesTickersService.loading=false
  //     this.sale_ticker.paginator=this.paginator
  //     this.sale_ticker.sort=this.sort
  //     console.log(response)
  //   })
  // }



  announceSortChange(sort: Sort) {
    if (sort.direction) {
      this._liveAnnouncer.announce(`Sorted ${ sort.direction } ending`);
    } else {
      this._liveAnnouncer.announce(`Sort cleared`);
    }
  }
}
