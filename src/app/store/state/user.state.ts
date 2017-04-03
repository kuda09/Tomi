import {IndicesState} from "./indices.state";
import {VisualisationsState} from "./vis.state";
import {DashboardsState} from "./dashboards.state";

import {LocalStorageService} from '../../services/local-storage.service';
import {SearchesState} from "./search.state";

const localStorage = new LocalStorageService ();

export interface UserState {
    id: number;
    username: string;
}

export let INITIAL_USER_STATE: UserState;


if (localStorage.getItem('USER_STATE') !== undefined || localStorage.getItem('USER_STATE') !== null ) {

    INITIAL_USER_STATE = localStorage.getItem('USER_STATE');


} else {


    INITIAL_USER_STATE = {
        id: null,
        username: ''
    }


    localStorage.setItem('USER_STATE', INITIAL_USER_STATE);

}

