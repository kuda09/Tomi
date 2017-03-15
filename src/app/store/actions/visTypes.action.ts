import { Action } from '@ngrx/store';
import {type} from "../../util";
import {VisTypeState} from "../state/visTypes.state";

export const ActionTypes = {
    INSTALL_VIS: type('[VisType] INSTALL VIS'),
    UNINSTALL_VIS: type('[VisType] UNINSTALL VIS'),
}

export class InstallVisAction implements Action {

    type = ActionTypes.INSTALL_VIS;

    constructor(public payload: VisTypeState){

    }
}

export class UnistallVisAction implements Action {

    type = ActionTypes.UNINSTALL_VIS;

    constructor(public payload: VisTypeState){

    }
}


export type Actions = InstallVisAction | UnistallVisAction;
