import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  constructor(private router: Router, private http: Http) { }


  login (payload): Observable<any>{
    return this.http.post(`/api/login`, {payload: payload})
        .map(res => res.json());
  }

  loggedIn(){

    return false;
  }

}
