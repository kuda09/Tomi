import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {IndicesState} from "../../store/state/indices.state";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../store/state/application.state";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  indices$
  constructor(private httpService: HttpService, private store: Store<ApplicationState>) {

    store.select('indices')
        .subscribe((indices: IndicesState) => {
          this.indices$ = indices;
        });
  }


  ngOnInit() {

  }

}
