import { Action } from '@ngrx/store';
import {type} from "../util";


export const ActionTypes = {
    ADD_INDICE: type('[Indice] ADD INDICE'),
    ADD_INDICE_COMPLETE: type('[Indice] ADD INDICE COMPLETE'),
    SELECT_INDICE: type('[Indice] SELECT'),
    REMOVE_INDICE: type('[Indice] REMOVE INDICE')
}

export class IndiceAddAction implements Action {

    type = ActionTypes.ADD_INDICE;

    constructor(public payload: {}[]) {}
}

export class AddIndiceCompleteAction implements Action {

    type = ActionTypes.ADD_INDICE_COMPLETE;
    constructor(public payload: {}[]){

    }

}

export class IndiceRemoveAction implements Action {

    type = ActionTypes.REMOVE_INDICE;

    constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = IndiceAddAction | IndiceRemoveAction | AddIndiceCompleteAction;


