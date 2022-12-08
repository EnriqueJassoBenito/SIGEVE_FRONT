import {Component, OnInit} from '@angular/core';
import {Gender} from "../../types/gender";
import {GenderService} from "../../services/gender.service";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-add-genders',
  templateUrl: './add-genders.component.html'
})
export class AddGendersComponent implements OnInit{
  genders: Gender;
  loadedFile: string = '';

  get edit(){
    return this.genderService.edit
  }

  constructor(private genderService: GenderService,
              public modalRef: DialogRef<AddGendersComponent>) {
    this.genders = this.genderService.gender
  }

  ngOnInit(): void{

  }

  saveGender(){
    if (this.genderService.edit){
      this.genderService.update(this.genders).subscribe((response)=>{
        this.modalRef.close();
      })
    }else{
      this.genderService.save(this.genders).subscribe(response=>{
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
