import { Component } from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  session:any={
    logged: true
  }

  logoPath:string='../../../assets/img/nada.png'

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router:Router) {
    /*this.session.logged=!!localStorage.getItem('token');
    if (!this.session.logged){
      this.router.navigateByUrl('/auth');
    }*/

  }
}
