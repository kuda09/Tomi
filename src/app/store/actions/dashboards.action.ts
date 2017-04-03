import { Action } from '@ngrx/store';
import {type} from "../../util";
import {DashboardState} from "../state/dashboards.state";

export const ActionTypes = {
    ADD_DASHBOARD: type('[Dashboard] ADD DASHBOARD'),
    REMOVE_DASHBOARD: type('[Dashboard] REMOVE DASHBOARD'),
    EDIT_DASHBOARD: type('[Dashboard] EDIT DASHBOARD'),
    SELECT_DASHBOARD: type('[Dashboard] SELECT DASHBOARD')
}

export class AddDashboardAction implements Action {

    type = ActionTypes.ADD_DASHBOARD;

    constructor(public payload: DashboardState){

    }
}

export class RemoveDashboardAction implements Action {

    type = ActionTypes.REMOVE_DASHBOARD;

    constructor(public payload: DashboardState){

    }
}

export class EditDashboardAction implements Action {

    type = ActionTypes.EDIT_DASHBOARD;

    constructor(public payload: DashboardState){

    }
}


export class SelectDashboardAction implements Action {

    type = ActionTypes.SELECT_DASHBOARD;

    constructor(public payload: DashboardState){

    }
}



export type Actions = AddDashboardAction | RemoveDashboardAction | EditDashboardAction | SelectDashboardAction;
