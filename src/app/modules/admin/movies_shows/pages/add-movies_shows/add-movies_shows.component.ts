import {Component, OnInit} from "@angular/core";
import {Movie} from "../../../movies/types/movie";
import {MoviesService} from "../../../movies/services/movies.service";
import {DialogRef} from "@angular/cdk/dialog";
import {Movie_show} from "../../types/movies_shows";
import {Movies_showsService} from "../../services/movies_shows.service";
import {RoomsService} from "../../../rooms/services/rooms.service";

@Component({
  selector: 'app-add-movies_shows',
  templateUrl: './add-movies_shows.component.html'
})

export class AddMovies_showsComponent implements OnInit{
  movies_shows: Movie_show;
  movies: any[] = [];
  rooms: any[] = [];
  loadedFile: string = '';

  get edit(){
    return this.moviesShowsService.edit
  }

  constructor(private moviesShowsService: Movies_showsService,
              public modalRef: DialogRef<AddMovies_showsComponent>,
              private movie: MoviesService,
              private room: RoomsService) {
    this.movies_shows = this.moviesShowsService.movie_show
  }

  ngOnInit(): void{
    this.movie.findAll().subscribe(response => {
      this.movies = response;
      this.movie.loading = false;
      console.log(response)
    });
    this.room.findAll().subscribe(response => {
      this.rooms = response;
      this.room.loading = false;
      console.log(response)
    });
  }

  saveMovies_Shows(){
    if (this.moviesShowsService.edit){
      this.moviesShowsService.update(this.movies_shows).subscribe((response)=>{
        this.modalRef.close();
      })
    }else{
      this.moviesShowsService.save(this.movies_shows).subscribe(response=>{
        this.modalRef.close()
      })
    }
  }

  previewFile(event: any) {
    const { target } = event;
    console.log(target.value);
    const reader = new FileReader();
    reader.readAsDataURL(target.files[0]);
    reader.onloadend = (result) => {
      this.loadedFile = result.target!.result + '';
    };
  }
}
