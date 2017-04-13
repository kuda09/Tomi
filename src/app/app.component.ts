import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import * as fromRoot from "./store/reducers/application.reducer"
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ApplicationState} from "./store/state/application.state";
import {UserState} from "./store/state/user.state";
import {MdDialog} from "@angular/material";
import {TimePickerComponent} from "./time-picker/time-picker.component";
import 'rxjs/add/operator/take';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    public FilterForm: FormGroup
    user$: Observable<UserState>;
    type;

    constructor(private _fb: FormBuilder,
                private store: Store<ApplicationState>,
                public dialog: MdDialog) {

        this.user$ = store.select(fromRoot.getUser);

    }

    ngOnInit() {

        this.FilterForm = this._fb.group({
            query: ['*', Validators.required]
        });
        //this.router.navigate([{outlets: {popup: 'login'}}]);

    }

    filter(payload, isValid: boolean) {
    }


    openTimePicker() {

        this.dialog.open(TimePickerComponent);
    }


}
