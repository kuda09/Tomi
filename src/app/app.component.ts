import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import * as fromRoot from "./store/reducers/application.reducer"
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ApplicationState} from "./store/state/application.state";
import {UserState} from "./store/state/user.state";
import {RetrieveUserAction} from "./store/actions/user.action";
import {getSelectedIndiceIndexAndType} from "./util";
import {NewSearchAction} from "./store/actions/search.action";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {


    public FilterForm: FormGroup
    user$: Observable<UserState>;
    type;
    constructor(private _fb: FormBuilder, private store: Store<ApplicationState>) {

        this.user$ = store.select(fromRoot.getUser);

    }

    ngOnInit() {

        //this.store.dispatch(new RetrieveUserAction());
        this.FilterForm = this._fb.group({
            query: ['*', Validators.required]
        })
    }

    filter(payload, isValid: boolean) {

        if (isValid) {

            this.user$
                .first()
                .subscribe((userState: UserState) => {
                    this.type = getSelectedIndiceIndexAndType(userState);
                    let query = Object.assign({}, this.type, {
                        body: {
                            query: {
                                query_string: payload
                            }
                        }
                    });

                    this.store.dispatch(new NewSearchAction(query));
                });

        }
    }
}
