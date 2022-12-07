import { Component } from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Router} from "@angular/router";
import {LoginStateService} from "../../services/login-state.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
//Esto es provicional
  role:any={
    isAdmin : true,
    isClient: false
  }

  get session(){
    return this.loginStateService.isLogged
  }

/*
  session:any={
    logged: true

  }
*/

  logoPath:string='../../../assets/img/nada.png'

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
