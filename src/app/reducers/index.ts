import {createSelector} from 'reselect';
import {ActionReducer} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {storeFreeze} from 'ngrx-store-freeze';
import {combineReducers} from '@ngrx/store';
import * as  fromUser from "./user";
import * as fromDashboards from "./dashboards";
import * as fromVis from "./visualisations";
import * as fromIndices from "./indices";

export interface ApplicationState {
    user: fromUser.UserState
}

const reducers = {
    user: fromUser.userReducer,
    dashboards: fromDashboards.dashboardStateReducer,
    vis: fromVis.visualisationsStateReducer,
    indices: fromIndices.indiceReducer
};

const developmentReducer: ActionReducer<ApplicationState> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: any, action: any) {

    return developmentReducer(state, action);
}


export const getUserState = (state: ApplicationState) => state.user;
export const getIndicesState = (state: ApplicationState) => state.user.indices;
export const getVisState = (state: ApplicationState) => state.user.visualisations;
export const getDashboardsState = (state: ApplicationState) => state.user.dashboards;



export const getUser = createSelector(getUserState, fromUser._getUser);
export const getIndices = createSelector(getIndicesState, fromIndices._getIndices);
/*export const getVisualisations = createSelector(getVisState, fromVis._getVis);
export const getDashboards = createSelector(getDashboardsState, fromDashboards._getDashboards);*/
