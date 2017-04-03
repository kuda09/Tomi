import {Injectable} from '@angular/core';
import {MdSnackBar} from "@angular/material";
import {ApplicationState} from "../state/application.state";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {ActionTypes} from "../actions/vis.action";
import {Observable} from "rxjs";
import {VisualisationState} from "../state/vis.state";

@Injectable()
export class VisualisationsEffectsService {

    constructor(private actions$: Actions,
                private httpService: HttpService,
                private router: Router,
                private store: Store<ApplicationState>,
                private snackbar: MdSnackBar) {
    }

    @Effect()
    deleteVisualisation$: Observable<VisualisationState> = this.actions$
        .ofType(ActionTypes.REMOVE_VISUALISATION)
        .map(toPayload)
        .switchMap((payload: VisualisationState) => {

            this.snackbar.open(`${payload.name} has been deleted`, 'DELETE SUCCESS', {
                duration: 5000,
            });

            return Observable.empty();
        })
        .filter(() => false);
}
