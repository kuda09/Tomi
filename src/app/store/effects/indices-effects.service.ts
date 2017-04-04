import { Injectable } from '@angular/core';

import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import * as _ from 'lodash';

import {HttpService} from "../../services/http.service";
import {ActionTypes, AddIndiceAction} from "../actions/indices.action";
@Injectable()
export class IndicesEffectsService {

  constructor(private action$: Actions, private httpService: HttpService) { }


  @Effect()
  retrieveIndices$: Observable<Action> = this.action$
      .ofType(ActionTypes.ADD_INDICE)
      .map(toPayload)
      .switchMap(payload => {
        return this.httpService.retrieveIndices(payload)
            .map(indices => {

                return new AddIndiceAction(indices)
            });
      })

}
