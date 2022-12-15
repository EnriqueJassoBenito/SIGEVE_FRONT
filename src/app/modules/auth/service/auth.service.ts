import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginStateService} from "../../../services/login-state.service";
import {UserLogin, UserSigning} from "../types/user";
import {APP_URL} from "../../../services/base-url-app";
import {catchError, of} from "rxjs";
import {Movie} from "../../admin/movies/types/movie";

@Injectable({
  providedIn: "root"
})
export class AuthService{
  private loading: boolean = false
  get isLoading(){
    return this.loading
  }
  set isLoading(value) {
    this.loading = value;
  }

  constructor(private httpClient: HttpClient,
   private router: Router,
   private loginState: LoginStateService)
  {}

/*  login(user: UserLogin){
    this.loading = true
    return this.httpClient.post<any>(APP_URL + "api/auth/", user).pipe(
      catchError((error)=>{
        this.loading = false
        return error
      })
    );
  }*/

  /*login(payload: UserLogin) {
    this.loading = true;
    return this.httpClient.post('http://localhost:3000/api/auth/', payload).pipe(
      catchError((err) => {
        this.loading = false;
        return of(err);
      })
    );
  }*/
  login(user: UserLogin) {
    this.loading = true;
    this.httpClient
      .post<any>(APP_URL + "api/auth/", user, {
        headers: { "Content-Type": "application/json" },
      })
      .pipe(
        catchError((error)=>{
          this.loading = false;
          return error;
        })
      )
      .subscribe((response) => {
        localStorage.setItem("token", response.token);
        this.loading = false;
        this.loginState.setIsLogged = true;
        this.router.navigateByUrl("/");
      });
  }

  confirmEmail(token: string) {
    return this.httpClient
      .get<any>(`http://localhost:3000/api/users/enable/${token}`)
      .pipe(
        catchError((error) => {
          this.loading = false;
          return of(error);
        })
      );
  }
  register(userS: UserSigning){
    this.loading = true
    return this.httpClient.post<any>(APP_URL + "api/users/register", userS, {
      headers: {
        "Content-Type": "application/json"
      },
    }).pipe(
      catchError((error)=>{
        this.loading = false
        return of (error)
      })
    )/*.subscribe((response)=>{
      this.loading = false
      this.router.navigateByUrl("/signup")
    })*/
  }
}
