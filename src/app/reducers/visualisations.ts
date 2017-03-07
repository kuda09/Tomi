import * as visualisation from '../actions/visualisations';
import * as _ from 'lodash';

export interface VisualisationState {
    id: number;
    name: number;
    dashboardAssociations: number[];
}


export interface VisualisationsState extends Array<VisualisationState>{}


export const INITIAL_VISUALISATIONS_STATE: VisualisationsState = [{id: null, name: null,  dashboardAssociations: []}];


export function visualisationsStateReducer(state = INITIAL_VISUALISATIONS_STATE, action: visualisation.Actions): VisualisationsState {

    switch (action.type) {

        case visualisation.ActionTypes.ADD_VISUALISATION: {

            const vis = action.payload;

            return state.splice(state.length, 0 , vis);
        }

        case visualisation.ActionTypes.REMOVE_VISUALISATION: {

            const visId = action.payload.id;

            return _.filter(state, (vis: VisualisationState) => visId !== vis.id);
        }


        case visualisation.ActionTypes.EDIT_VISUALISATION: {

            const _vis = action.payload;
            const _visId = action.payload.id;

            return  _.map(state, (vis: VisualisationState) => {

                if(vis.id === _visId) {

                    vis = _vis
                }

                return vis;
            });
        }

        default: {

            return state;
        }

    }
}