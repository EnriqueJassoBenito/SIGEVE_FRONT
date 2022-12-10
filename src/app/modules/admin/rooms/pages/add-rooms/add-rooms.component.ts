import {Component, OnInit} from "@angular/core";
import {Gender} from "../../../genders/types/gender";
import {GenderService} from "../../../genders/services/gender.service";
import {DialogRef} from "@angular/cdk/dialog";
import {Room} from "../../types/rooms";
import {RoomsService} from "../../services/rooms.service";

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html'
})
export class AddRoomsComponent implements OnInit{
  rooms: Room;
  loadedFile: string = '';

  get edit(){
    return this.roomsService.edit
  }

  constructor(private roomsService: RoomsService,
              public modalRef: DialogRef<AddRoomsComponent>) {
    this.rooms = this.roomsService.room
  }

  ngOnInit(): void{

  }

  saveRoom(){
    if (this.roomsService.edit){
      this.roomsService.update(this.rooms).subscribe((response)=>{
        this.modalRef.close();
      })
    }else{
      this.roomsService.save(this.rooms).subscribe(response=>{
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
