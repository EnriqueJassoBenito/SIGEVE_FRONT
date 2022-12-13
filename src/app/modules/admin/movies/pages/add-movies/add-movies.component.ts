import {Component, OnInit} from "@angular/core";
import {DialogRef} from "@angular/cdk/dialog";
import {Movie} from "../../types/movie";
import {MoviesService} from "../../services/movies.service";
import {GenderService} from "../../../genders/services/gender.service";

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html'
})
export class AddMoviesComponent implements OnInit{
  movies: Movie;
  genders: any[] = [];
  loadedFile: string = '';

  get edit(){
    return this.moviesService.edit
  }

  constructor(private moviesService: MoviesService,
              public modalRef: DialogRef<AddMoviesComponent>,
              private gender:GenderService) {
    this.movies = this.moviesService.movie
  }

  ngOnInit(): void{
    this.gender.findAll().subscribe(response => {
      this.genders = response;
      this.gender.loading = false;
      console.log(response)
    })
  }

  saveMovie(){
    if (this.moviesService.edit){
      this.moviesService.update(this.movies).subscribe((response)=>{
        this.modalRef.close();
      })
    }else{
      this.moviesService.save(this.movies).subscribe(response=>{
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
