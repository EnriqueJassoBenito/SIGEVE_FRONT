import {Injectable} from "@angular/core";
import {Sale_ticker} from "../types/sales_tickers";
import {APP_URL} from "../../../../services/base-url-app";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class Sales_tickersService{
  loading: boolean = false;
  private sale_tickerArray: Sale_ticker[] = []
  edit: boolean = false

  get shows() {
    return [...this.sale_tickerArray]
  }
  constructor(private http: HttpClient) {
  }

  findAll(){
    this.loading = true
    return this.http.get<Sale_ticker[]>(`${APP_URL}api/salestickets/all`)
  }
}

// import {Injectable} from "@angular/core";
// import {Sale_ticker} from "../types/sales_tickers";
// import {HttpClient} from "@angular/common/http";
// import {APP_URL} from "../../../../services/base-url-app";
//
// @Injectable({
//   providedIn: 'root'
// })
//
// export class Sales_tickersService {
//   loading: boolean = false;
//   private sale_tickerArray: Sale_ticker[] = []
//   edit: boolean = false
//   sale_ticker: Sale_ticker = {
//     movie_show_ste: {},
//     client_spo: {},
//     total_count: 0,
//   }
//
//   get shows() {
//     return [...this.sale_tickerArray]
//   }
//   constructor(private http: HttpClient) {
//   }
//
//   findAll(){
//     this.loading = true
//     return this.http.get<Sale_ticker[]>(`${APP_URL}api/salestickets/all`)
//   }
// }
