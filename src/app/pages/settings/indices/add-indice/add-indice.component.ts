import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ApplicationState} from "../../../../store/state/application.state";
import {HttpService} from "../../../../services/http.service";
import {AddIndiceAction} from "../../../../store/actions/indices.action";

@Component({
  selector: 'app-add-indice',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'add-indice.component.html',
  styleUrls: ['add-indice.component.scss']
})
export class AddIndiceComponent implements OnInit {


  public IndicesForm: FormGroup;
  loading$: Observable<boolean>;

  constructor(
      private _fb: FormBuilder,
      private store: Store<ApplicationState>,
      private httpService: HttpService
  ) {


  }

  ngOnInit() {

    this.IndicesForm = this._fb.group({
      index: ['', Validators.required]
    })
  }


  getIndices (payload, isValid: boolean) {

    if(isValid) {

      this.httpService.retrieveIndices(payload)
          .subscribe(
              indice => this.store.dispatch(new AddIndiceAction(indice))
          )
    }
  }

}
