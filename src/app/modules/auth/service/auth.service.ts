import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginStateService} from "../../../services/login-state.service";
import {UserLogin} from "../types/user";
import {APP_URL} from "../../../services/base-url-app";
import {catchError} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService{
  private loading: boolean = false
  get isLoading(){
    return this.loading
  }

  constructor
  (private httpClient: HttpClient, private router: Router, private loginState: LoginStateService)
  {}

  login(user: UserLogin){
    this.loading = true
    this.httpClient.post<any>(APP_URL + "api/auth/", user, {
      headers: {
        "Content-Type": "application/json"
      },
    }).pipe(
      catchError((error)=>{
        this.loading = false
        return error
      })
    ).subscribe((response)=>{
      localStorage.setItem("token", response.token)
      this.loading = false
      this.loginState.setIsLogged = true
      this.router.navigateByUrl("/")
    })
  }
}
