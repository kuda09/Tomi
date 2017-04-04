import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import {Indice} from "../models/indice";
import {AuthHttp} from "angular2-jwt";


@Injectable()
export class HttpService {

  url: string = "/api";
  constructor(private http: Http, private authHttp: AuthHttp) {

  }

  getData(route) {

    return this.http.get(`${this.url}${route}`)
        .map(res => res.json());
  }

  retrieveIndices(data: Indice): Observable<any>{
    const body = Object.assign({}, {payload: data});
    return this.authHttp.post(`${this.url}/elasticsearch/indices`, body)
        .map(res => res.json());
  }


  search(data) : Observable<any> {
    const body = Object.assign({}, {payload: data});
    return this.http.post(`${this.url}/search`, body)
        .map(res => res.json());
  }




}
