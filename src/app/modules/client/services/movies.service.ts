import {Injectable} from "@angular/core";
import {Movie} from "../types/movies";
import {HttpClient} from "@angular/common/http";
import {APP_URL} from "../../../services/base-url-app";

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceClient{
  loading: boolean = false;
  private moviesArray: Movie[]=[]
  edit: boolean = false
  movie: Movie={
    name_mve: '',
    duration: 0,
    name_gdr: {},
    image_mve: ''
  }

  get movies(){
    return[...this.moviesArray]
  }

  constructor(private http: HttpClient) {
  }

  findEnable(){
    this.loading = true
    return this.http.get<Movie[]>(`${APP_URL}api/movies/all/enable`)
  }

}
