import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {GenderService} from "../../services/gender.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {Gender} from "../../types/gender";
import {AddGendersComponent} from "../add-genders/add-genders.component";
import {Room} from "../../../rooms/types/rooms";

@Component({
  selector: 'app-main-genders',
  templateUrl: './main-genders.component.html'
})
export class MainGendersComponent implements OnInit{
  displayedColumns: string[] = [
    '#',
    'name_gdr',
    'actions'

    ];
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  gender!: MatTableDataSource<Gender>

  get isLoading(){
    return this.genderService.loading
  }

  constructor(private genderService: GenderService,
              private _liveAnnouncer: LiveAnnouncer,
              public dialog: MatDialog) {
  }

  ngOnInit(){
    this.getAllGenders()
  }

  getAllGenders(){
    this.genderService.findAll().subscribe((response)=>{
      this.gender = new MatTableDataSource<Gender>(response);
      this.genderService.loading=false
      this.gender.paginator=this.paginator
      this.gender.sort=this.sort
    })
  }

  announceSortChange(sort: Sort) {
    if (sort.direction) {
      this._liveAnnouncer.announce(`Sorted ${ sort.direction } ending`);
    } else {
      this._liveAnnouncer.announce(`Sort cleared`);
    }
  }

  openDialog(enterAnimation: string, exitAnimation: string){

    const modalRef = this.dialog.open(AddGendersComponent,{
      width: '60%',
      enterAnimationDuration: enterAnimation,
      exitAnimationDuration: exitAnimation,
      disableClose: true
    });
    modalRef.afterClosed().subscribe((result: any)=>{
      this.getAllGenders()
      this.genderService.gender = {
        name_gdr: '',
        status_gdr: 0
      }
    })
  }
  editRoom(gender: any) {
    this.genderService.gender = {
      ...gender,
    };
    this.genderService.edit = true;
    this.openDialog('2ms', '2ms');
  }

  changeStatus(gender: Gender) {
    this.genderService.changeStatus(gender)
      .subscribe((response) => {
        console.log(response);
        this.genderService.loading = false;
        this.getAllGenders();
      });
  }
}
