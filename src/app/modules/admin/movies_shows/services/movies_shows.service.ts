import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {APP_URL} from "../../../../services/base-url-app";
import {Movie_show} from "../types/movies_shows";

@Injectable({
  providedIn: 'root'
})
export class Movies_showsService{
  loading: boolean = false;
  private movie_showArray: Movie_show[]=[]
  edit: boolean=false
  movie_show: Movie_show={
    name_mve: {},
    number_room: {},
    start_show: '',
    end_show: '',
    date_show: '',
    availability_msw: 0,
  }

  get shows(){
    return [...this.movie_showArray]
  }

  constructor(private http: HttpClient) {
  }

  findAll(){
    this.loading = true
    return this.http.get<Movie_show[]>(`${APP_URL}api/movieshows/all`)
  }
  save(movies_show: Movie_show){
    this.loading = true
    return this.http.post<Movie_show[]>(`${APP_URL}api/movieshows/save`, movies_show)
  }
  update(movies_show: Movie_show){
    this.loading = true
    return this.http.put<Movie_show[]>(`${APP_URL}api/movieshows/update`, movies_show)
  }
  changeStatus(movies_show: Movie_show) {
    this.loading = true;
    return this.http.delete<Movie_show>(`${ APP_URL }api/movieshows/delete`,
      { body: movies_show });
  }
}
