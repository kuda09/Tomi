import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../services/auth.service";
import {Store} from "@ngrx/store";
import {LoginAction} from '../../../../store/actions/user.action'
import {ApplicationState} from "../../../../store/state/application.state";


@Component({
    selector: 'app-login-dialog',
    templateUrl: 'login-dialog.component.html',
    styleUrls: ['login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

    public LoginForm: FormGroup;

    constructor(private router: Router,
                private _fb: FormBuilder,
                private auth: AuthService,
                private store: Store<ApplicationState>) {
    }

    ngOnInit() {

        this.LoginForm = this._fb.group({
            email_address: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    login(payload, isValid: boolean) {

        if (isValid) {

            this.store.dispatch(new LoginAction(payload));

        }

    }

}
