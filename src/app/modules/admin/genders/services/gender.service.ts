import {Injectable} from "@angular/core";
import {Gender} from "../types/gender";
import {HttpClient} from "@angular/common/http";
import {APP_URL, APP_URL_2} from "../../../../services/base-url-app";

@Injectable({
  providedIn: 'root'
})
export class GenderService{
  loading: boolean = false;
  private genderArray: Gender[] = []
  edit: boolean = false
  gender: Gender={
    id_gdr: 0,
    name_gdr: '',
    status_gdr: 0
  }

  get genders(){
    return [...this.genderArray]
  }

  constructor(private http: HttpClient) {
  }

  findAll(){
    this.loading = true
    return this.http.get<Gender[]>(`${APP_URL_2}api/genders/all`);
  }

}
