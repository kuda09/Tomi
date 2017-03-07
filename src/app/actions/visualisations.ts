import { Action } from '@ngrx/store';
import {type} from "../util";
import {VisualisationState} from "../reducers/visualisations";

export const ActionTypes = {
    ADD_VISUALISATION: type('[Visualisation] ADD VISUALISATION'),
    REMOVE_VISUALISATION: type('[Visualisation] REMOVE VISUALISATION'),
    EDIT_VISUALISATION: type('[Visualisation] EDIT VISUALISATION')
}

export class AddVisAction implements Action {

    type = ActionTypes.ADD_VISUALISATION;

    constructor(public payload: VisualisationState){

    }
}

export class RemoveVisAction implements Action {

    type = ActionTypes.REMOVE_VISUALISATION;

    constructor(public payload: VisualisationState){

    }
}


export class EditVisAction implements Action {

    type = ActionTypes.EDIT_VISUALISATION;

    constructor(public payload: VisualisationState){

    }
}


export type Actions = AddVisAction | RemoveVisAction | EditVisAction;
