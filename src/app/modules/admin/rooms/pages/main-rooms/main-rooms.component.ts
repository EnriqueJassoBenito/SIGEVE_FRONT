import {Component, OnInit, ViewChild} from "@angular/core";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Gender} from "../../../genders/types/gender";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {RoomsService} from "../../services/rooms.service";
import {AddRoomsComponent} from "../add-rooms/add-rooms.component";
import {Room} from "../../types/rooms";

@Component({
  selector: 'app-main-rooms',
  templateUrl: './main-rooms.component.html'
})

export class MainRoomsComponent implements OnInit{
  displayedColumns: string[] = [
    '#',
    'number_room',
    'capacity',
    'actions'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  rooms!: MatTableDataSource<Gender>

  get isLoading(){
    return this.roomService.loading
  }

  constructor(private roomService: RoomsService,
              private _liveAnnouncer: LiveAnnouncer,
              public dialog: MatDialog) {
  }

  ngOnInit(){
    this.getAllRooms()
  }

  getAllRooms(){
    this.roomService.findAll().subscribe((response)=>{
      this.rooms = new MatTableDataSource<Room>(response);
      this.roomService.loading=false
      this.rooms.paginator=this.paginator
      this.rooms.sort=this.sort
    });
  }

  announceSortChange(sort: Sort) {
    if (sort.direction) {
      this._liveAnnouncer.announce(`Sorted ${ sort.direction } ending`);
    } else {
      this._liveAnnouncer.announce(`Sort cleared`);
    }
  }
  openDialog(enterAnimation: string, exitAnimation: string){

    const modalRef = this.dialog.open(AddRoomsComponent,{
      width: '60%',
      enterAnimationDuration: enterAnimation,
      exitAnimationDuration: exitAnimation,
      disableClose: true
    });
    modalRef.afterClosed().subscribe((result: any)=>{
      this.getAllRooms()
      this.roomService.room = {
        number_room: 0,
        capacity: 0,
        status_room: 0,
      }
    });
  }

  editRoom(room: any) {
    this.roomService.room = {
      ...room,
    };
    this.roomService.edit = true;
    this.openDialog('2ms', '2ms');
  }

  disable(room: Room) {
    this.roomService.disable(room)
      .subscribe((response) => {
        console.log(response);
        this.roomService.loading = false;
        this.getAllRooms();
      });
  }

  enable(room:Room){
    this.roomService.enable(room)
      .subscribe((response) => {
        console.log(response);
        this.roomService.loading = false;
        this.getAllRooms();
      });
  }
}
