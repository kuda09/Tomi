import { Action } from '@ngrx/store';
import {type} from "../../util";
import {IndiceState} from "../state/indices.state";


export const ActionTypes = {
    ADD_INDICE: type('[Indices] ADD INDICE'),
    SELECT_INDICE: type('[Indices] SELECT INDICE'),
    REMOVE_INDICE: type('[Indices] REMOVE INDICE')
}

export class AddIndiceAction implements Action {

    type = ActionTypes.ADD_INDICE;

    constructor(public payload: IndiceState) {}
}

export class RemoveIndiceAction implements Action {

    type = ActionTypes.REMOVE_INDICE;
    constructor(public payload: IndiceState){

    }

}

export class SelectIndiceAction implements Action {

    type = ActionTypes.SELECT_INDICE;

    constructor(public payload: IndiceState) {}
}


export type Actions = AddIndiceAction | RemoveIndiceAction | SelectIndiceAction;


