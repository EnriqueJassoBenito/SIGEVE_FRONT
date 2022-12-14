import {Injectable} from "@angular/core";
import {Gender} from "../types/gender";
import {HttpClient} from "@angular/common/http";
import {APP_URL, APP_URL_2} from "../../../../services/base-url-app";
import {Room} from "../../rooms/types/rooms";

@Injectable({
  providedIn: 'root'
})
export class GenderService{
  loading: boolean = false;
  private genderArray: Gender[] = []
  edit: boolean = false
  gender: Gender={
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
    return this.http.get<Gender[]>(`${APP_URL}api/genders/all`);
  }
  save(gender: Gender){
    this.loading = true
    return this.http.post<Gender[]>(`${APP_URL}api/genders/save`, gender)
  }
  update(gender: Gender){
    this.loading = true
    return this.http.put<Gender[]>(`${APP_URL}api/genders/update`, gender)
  }
  disable(gender: Gender) {
    this.loading = true;
    return this.http.put<Gender>(`${ APP_URL }api/genders/disable/`+ gender.id_gdr, {});
  }
  enable(gender: Gender) {
    this.loading = true;
    return this.http.put<Gender>(`${ APP_URL }api/genders/enable/`+ gender.id_gdr, {});
  }
}
