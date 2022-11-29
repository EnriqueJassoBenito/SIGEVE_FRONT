/*
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserLogin} from "../types/user";
import {catchError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loading: boolean = false;

  get isLoading() {
    return this.loading;
  }

  constructor(private readonly http: HttpClient,
              private router: Router) {
  }

  login(payload: UserLogin): void {
    this.loading = true;
    this.http.post<any>(`http://localhost:3000/api/auth/`, payload, {
      headers: {'Content-Type': 'application/json'},
    })
      .pipe(
        catchError((error) => {
          this.loading = false;
          return error;
        })
      ).subscribe((response) => {
      localStorage.setItem('token', response.token);
      this.loading = false;
      this.router.navigateByUrl('/loading', {skipLocationChange: true});
    });
  }
}
*/
