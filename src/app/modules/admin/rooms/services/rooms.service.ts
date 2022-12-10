import {Injectable} from "@angular/core";
import {Movie} from "../../movies/types/movie";
import {Room} from "../types/rooms";
import {HttpClient} from "@angular/common/http";
import {APP_URL} from "../../../../services/base-url-app";
import {Gender} from "../../genders/types/gender";

@Injectable({
  providedIn: 'root'
})

export class RoomsService{
  loading: boolean = false;
  private roomArray: Room[]=[]
  edit: boolean=false
  room: Room={
    number_room: 0,
    capacity: 0,
    status_room: 0,
  }

  get movies(){
    return [...this.roomArray]
  }

  constructor(private http: HttpClient) {
  }

  findAll(){
    this.loading = true
    return this.http.get<Room[]>(`${APP_URL}api/rooms/all`)
  }
  save(room: Room){
    this.loading = true
    return this.http.post<Room[]>(`${APP_URL}api/rooms/save`, room)
  }
  update(room: Room){
    this.loading = true
    return this.http.post<Room[]>(`${APP_URL}api/rooms/update`, room)
  }

}
