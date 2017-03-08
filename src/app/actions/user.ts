import { Action } from '@ngrx/store';
import {type} from "../util";
import {UserState} from "../reducers/user";


export const ActionTypes = {
    NEW_USER: type('[User] NEW USER'),
    REMOVE_USER: type('[User] REMOVE USER'),
    EDIT_USER: type('[User] EDIT USER')
}

export class NewUserAction implements Action {

    type = ActionTypes.NEW_USER;

    constructor(public payload: UserState) {}
}

export class RemoveUserAction implements Action {

    type = ActionTypes.REMOVE_USER;
    constructor(public payload: UserState){}

}

export class EditUserAction implements Action {

    type = ActionTypes.EDIT_USER;

    constructor(public payload: UserState) {}
}


export type Actions = NewUserAction | RemoveUserAction | EditUserAction;