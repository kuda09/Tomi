import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import * as fromRoot from "./reducers"
import {Store} from "@ngrx/store";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{


  public FilterForm: FormGroup
  title = 'Virgin Wifi';

  constructor(private _fb: FormBuilder, private store: Store<fromRoot.State>) {

  }

  ngOnInit() {

    this.FilterForm = this._fb.group({
      params: ['', Validators.required]
    })
  }

  filter(payload, isValid: boolean) {

    if(isValid) {

    }

  }
}
