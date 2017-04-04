import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {tokenNotExpired, AuthHttp, AuthConfig} from "angular2-jwt";
import {LocalStorageService} from "./local-storage.service";


const localStorage = new LocalStorageService();
const authConfig = {
    tokenName: 'es-token',
    tokenGetter: (() => localStorage.getItem('es-token')),
    globalHeaders: [{'Content-Type':'application/json'}]
}

@Injectable()
export class AuthService {

    constructor(private router: Router, private http: Http) {
    }


    login(payload): Observable<any> {

        const {username, password} = payload;
        const headers = new Headers();

        headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        headers.append("Content-Type", "application/json");

        return this.http.get(`http://localhost:3000/api/login`, {headers: headers})
            .map(res => res.json());
    }

    loggedIn() {

        return true;
    }

}

export function AuthHttpServiceFactory (http: Http, options: RequestOptions) {

    return new AuthHttp(new AuthConfig(authConfig), http, options);
}
