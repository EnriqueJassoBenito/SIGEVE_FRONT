import {Injectable} from "@angular/core";
import {Movie} from "../types/movie";
import {HttpClient} from "@angular/common/http";
import {APP_URL} from "../../../../services/base-url-app";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  loading: boolean = false;
  private movieArray: Movie[] = []
  edit: boolean = false
  movie: Movie = {
    name_mve: '',
    duration: 0,
    gender: {},
    availability_mve: 0,
    image_mve: '',
  }

  get movies() {
    return [...this.movieArray]
  }

  constructor(private http: HttpClient) {
  }

  findAll() {
    this.loading = true
    return this.http.get<Movie[]>(`${APP_URL}api/movies/all`)
  }

  save(movie: Movie) {
    this.loading = true
    return this.http.post<Movie[]>(`${APP_URL}api/movies/save`, {...movie, gender: movie.gender?.id})
  }

  update(movie: Movie) {
    this.loading = true
    return this.http.put<Movie[]>(`${APP_URL}api/movies/update`,
      {...movie, gender: movie.gender?.id})
  }

  disable(movie: Movie) {
    this.loading = true;
    return this.http.put<Movie>(`${APP_URL}api/movies/disable/`
      + movie.id_mve, {movie, gender: movie.gender?.id});
  }

  enable(movie: Movie) {
    this.loading = true;
    return this.http.put<Movie>(`${APP_URL}api/movies/enable/` + movie.id_mve, {movie, gender: movie.gender?.id});
  }
}
