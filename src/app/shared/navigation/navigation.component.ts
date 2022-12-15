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
    this.setToken()
    this.whatIs()
    if (this.loginStateService.setIsLogged)
      this.router.navigateByUrl("/login")

  }
  tkn: any
  decodedToken: any
  us= {email: '',
    id: 0,
    role: 0,
  }

  isAdmin: any
  setToken(){
    if (this.loginStateService.setIsLogged=!!localStorage.getItem("token")) {
      const helper = new JwtHelperService();
      this.tkn=localStorage.getItem('token')
      this.decodedToken = helper.decodeToken(this.tkn);
      this.us=this.decodedToken
      localStorage.setItem('id', String(this.us.id))
      localStorage.setItem('role', String(this.us.role))
    }
  }

  whatIs(){
    const stringRole=localStorage.getItem('role')
    if (stringRole==='1'){
      console.log('cliente')
      this.isAdmin=false
    }
    if (stringRole==='2'){
      console.log('admin')
      this.isAdmin=true
    }
  }

  showTickets(){
    this.router.navigateByUrl("/ticketsClient")
  }

  logout() {
    localStorage.clear();
    this.loginStateService.setIsLogged = false;
    this.router.navigateByUrl("/");
  }

}
