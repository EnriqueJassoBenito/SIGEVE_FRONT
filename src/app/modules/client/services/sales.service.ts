import {Injectable} from "@angular/core";
import {Sale_ticket} from "../types/sale_ticket";
import {HttpClient} from "@angular/common/http";
import {MovieShows} from "../types/movie_shows";
import {APP_URL} from "../../../services/base-url-app";

@Injectable({
  providedIn: 'root'
})
export class SalesService{
  loading: boolean = false
  tkn: string = ''
  dato: any

  ticket: Sale_ticket={
    movie_show_ste:'',
    token: localStorage.getItem('token'),
    total_count: 80
  }



  constructor(private http:HttpClient) {
    this.dato=this.dato=localStorage.getItem('token')
    this.tkn = this.dato
    console.log(this.dato)
  }



  saveSale(sale: Sale_ticket){
    this.loading = true
    return this.http.post<Sale_ticket[]>(`${APP_URL}api/salestickets/save`,sale )
  }

  byId(id: string){
    this.loading=true
    return this.http.get<Sale_ticket[]>(`${APP_URL}api/salestickets/${id}`)
  }
}
