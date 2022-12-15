import { Component } from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Router} from "@angular/router";
import {LoginStateService} from "../../services/login-state.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
//Esto es provicional


 autorization(){
   const helper = new JwtHelperService();
   const myRawToken = localStorage.getItem('token')
   const decodedToken = helper.decodeToken();
 }

  role:any={
    isAdmin : true,
    isClient: false
  }

  get session(){
    return this.loginStateService.isLogged
  }

  logoPath:string='../../../assets/img/palomitas-de-maiz.png' //hay un bug aqui

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private router:Router, private loginStateService: LoginStateService) {
    this.loginStateService.setIsLogged=!!localStorage.getItem("token")
    if (this.loginStateService.setIsLogged)
      this.router.navigateByUrl("/login")
  }

  logout() {
    localStorage.clear();
    this.loginStateService.setIsLogged = false;
    this.router.navigateByUrl("/");
  }
}
