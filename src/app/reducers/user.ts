import {DashboardsState} from "./dashboards";
import {VisualisationsState} from "./visualisations";
import {IndicesState} from "./indices";
import * as user from '../actions/user';
import {LocalStorageService} from '../services/local-storage.service';

const localStorage = new LocalStorageService ();


export interface UserState {
    id: number;
    clientName: string;
    dashboards: DashboardsState;
    visualisations: VisualisationsState;
    indices: IndicesState;
}


export let INITIAL_USER_STATE: UserState;

if (localStorage.getItem('INITIAL_USER_STATE') !== undefined) {

     INITIAL_USER_STATE = {
        id: null,
        clientName: '',
        dashboards: [],
        visualisations: [],
        indices: []
    }

    localStorage.setItem('INITIAL_USER_STATE', INITIAL_USER_STATE);

} else {

    INITIAL_USER_STATE = localStorage.getItem('INITIAL_USER_STATE');

}

export function userReducer(state = INITIAL_USER_STATE, action: user.Actions) : UserState {

    const _user = action.payload;

    switch (action.type) {

        case user.ActionTypes.NEW_USER: {

            console.log(state, _user);

            return Object.assign({}, _user)
        }

        case user.ActionTypes.REMOVE_USER: {


            return Object.assign({}, INITIAL_USER_STATE);
        }


        case user.ActionTypes.EDIT_USER: {

            return Object.assign({}, _user);
        }

        default: {

            return state;
        }

    }
}


export const _getUser= (state: UserState) => state;
