import {Injectable} from "@angular/core";
import {MovieShows} from "../types/movie_shows";
import {HttpClient} from "@angular/common/http";
import {Movie} from "../types/movies";
import {APP_URL} from "../../../services/base-url-app";

@Injectable({
  providedIn: 'root'
})
export class MovieShowsClientService{
  loading: boolean = false;
  private showsArray: MovieShows[]=[]
  edit: boolean = false
  show: MovieShows={
    id_msw: 0,
    date_show: "",
    start_show: '',
    image_mve: "",
    name_mve: '',
    number_room: {}
  }
 get shows(){
    return[...this.showsArray]
 }

 constructor(private http:HttpClient) {
 }

  findEnable(){
    this.loading = true
    return this.http.get<MovieShows[]>(`${APP_URL}api/movieshows/all/enable`)
  }



}
