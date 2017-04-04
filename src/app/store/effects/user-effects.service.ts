import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Observable} from "rxjs";
import {Action, Store} from "@ngrx/store";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import {ActionTypes, LoginSuccessAction, LoginFailedAction} from "../actions/user.action";
import {AuthService} from "../../services/auth.service";
import {ApplicationState} from "../state/application.state";
import {LocalStorageService} from "../../services/local-storage.service";


const localStorage = new LocalStorageService();


@Injectable()
export class UserEffectsService {

    constructor(private action$: Actions, private auth: AuthService, private store: Store<ApplicationState>) {
    }

    @Effect()
    userLoggedIn$: Observable<any> = this.action$
        .ofType(ActionTypes.LOGIN)
        .map(toPayload)
        .switchMap(payload => {
            return this.auth.login(payload)
                .map(data => this.store.dispatch(new LoginSuccessAction(data)))
                .catch(err => {

                    this.store.dispatch(new LoginFailedAction(err));
                    return Observable.empty();
                });
        })
        .filter(() => false);

    @Effect()
    userLoggedSuccess$: Observable<any> = this.action$
        .ofType(ActionTypes.LOGIN_SUCCESS)
        .map(toPayload)
        .switchMap(payload => {

            const token = payload.payload.token;
            localStorage.setItem('es-token', token);
            return Observable.empty();
        })
        .filter(() => false);
}
