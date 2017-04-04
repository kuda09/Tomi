import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import * as fromRoot from "./store/reducers/application.reducer"
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ApplicationState} from "./store/state/application.state";
import {UserState} from "./store/state/user.state";
import {NewSearchAction} from "./store/actions/search.action";
import {MdDialog} from "@angular/material";
import {TimePickerComponent} from "./time-picker/time-picker.component";
import 'rxjs/add/operator/take';
import {Router} from "@angular/router";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    public FilterForm: FormGroup
    user$: Observable<UserState>;
    type;

    constructor(private _fb: FormBuilder,
                private router: Router,
                private store: Store<ApplicationState>,
                private dialog: MdDialog) {

        this.user$ = store.select(fromRoot.getUser);

    }

    ngOnInit() {

        this.FilterForm = this._fb.group({
            query: ['*', Validators.required]
        });
        //this.router.navigate([{outlets: {popup: 'login'}}]);

    }

    ngOnDestroy() {
        //this.user$.unsubscribe();
    }

    filter(payload, isValid: boolean) {

        if (isValid) {

            const query = Object.assign({}, this.type, {
                body: {
                    size: 10,
                    sort: [
                        {
                            time_start: {
                                order: "desc",
                                unmapped_type: "boolean"
                            }
                        }
                    ],
                    query: {
                        query_string: payload
                    }
                }
            });

            this.store.dispatch(new NewSearchAction(query));
        }
    }

    dispatch() {


    }


    openTimePicker() {

        this.dialog.open(TimePickerComponent);
    }


}
