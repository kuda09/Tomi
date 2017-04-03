import {LocalStorageService} from "../../services/local-storage.service";
const localStorage = new LocalStorageService ();

export interface DashboardState {
    id: number;
    name: number;
    description: string;
    selected: boolean
    visTypes: {}[];
}

export interface DashboardsState extends Array<DashboardState>{}

export let INITIAL_DASHBOARD_STATE: DashboardsState;


if (localStorage.getItem('USER_STATE') !== null) {

    INITIAL_DASHBOARD_STATE = localStorage.getItem('USER_STATE').dashboards;

} else {

    INITIAL_DASHBOARD_STATE = [];
}