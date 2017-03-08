import * as dashboards from '../actions/dashboards';
import * as _ from 'lodash';

export interface DashboardState {
    id: number;
    name: number;
    selected: boolean
    visTypes: {}[];
}

export interface DashboardsState extends Array<DashboardState>{}

export const INITIAL_DASHBOARD_STATE: DashboardsState = [];

export function dashboardStateReducer(state = INITIAL_DASHBOARD_STATE, action: dashboards.Actions): DashboardsState {

    switch (action.type) {

        case dashboards.ActionTypes.ADD_DASHBOARD: {

            const dashboard = action.payload;

            return state.splice(state.length, 0 , dashboard);
        }

        case dashboards.ActionTypes.REMOVE_DASHBOARD: {

            const dashboardId = action.payload.id;

            return _.filter(state, (dashboard: DashboardState) => dashboardId !== dashboard.id);
        }

        case dashboards.ActionTypes.SELECT_DASHBOARD: {

            const currentDashboard = action.payload.id;

            return _.map(state, (dashboard: DashboardState) => {

                dashboard.selected = dashboard.id === currentDashboard;

                return dashboard;
            })
        }


        case dashboards.ActionTypes.EDIT_DASHBOARD: {

            const _dashboard = action.payload;
            const _dashboardId = action.payload.id;

            return  _.map(state, (dashboard: DashboardState) => {

                if(dashboard.id === _dashboardId) {

                    dashboard = _dashboard
                }

                return dashboard;
            });
        }

        default: {

            return state;
        }

    }
}

export const _getDashboards = (state: DashboardState) => state;

