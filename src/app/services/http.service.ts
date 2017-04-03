import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import {Indice} from "../models/indice";


@Injectable()
export class HttpService {

  url: string = "/api";
  constructor(private http: Http) {

  }

  getData(route) {

    return this.http.get(`${this.url}${route}`)
        .map(res => res.json());
  }

  retrieveIndices(data: Indice): Observable<any>{
    return this.http.post(`${this.url}/indices`, Object.assign({}, {payload: data}))
        .map(res => res.json());
  }


  search(data) : Observable<any> {

    return this.http.post(`${this.url}/search`, Object.assign({}, {payload: data}))
        .map(res => res.json());
  }




}
