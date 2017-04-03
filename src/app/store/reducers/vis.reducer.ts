import * as _ from 'lodash';
import {INITIAL_VISUALISATIONS_STATE, VisualisationsState, VisualisationState} from "../state/vis.state";
import {Actions, ActionTypes} from "../actions/vis.action";
import {LocalStorageService} from '../../services/local-storage.service';

const localStorage = new LocalStorageService ();


const saveToLocalStorage = (state, type) => {

    let oldState = localStorage.getItem('USER_STATE');

    oldState[type] = state;

    localStorage.setItem('USER_STATE', oldState);

}

export function visualisationsStateReducer(state = INITIAL_VISUALISATIONS_STATE, action: Actions): VisualisationsState {

    switch (action.type) {

        case ActionTypes.ADD_VISUALISATION: {

            const vis = action.payload;

            const newState = [...state, vis];

            saveToLocalStorage(newState, 'visualisations');

            return newState;
        }

        case ActionTypes.REMOVE_VISUALISATION: {

            const visId = action.payload.id;

            const newState = _.filter(state, (vis: VisualisationState) => visId !== vis.id);

            saveToLocalStorage(newState, 'visualisations');

            return newState;
        }


        case ActionTypes.EDIT_VISUALISATION: {

            const _vis = action.payload;
            const _visId = action.payload.id;

            const newState = _.map(state, (vis: VisualisationState) => {

                if(vis.id === _visId) {

                    vis = _vis
                }

                return vis;
            });

            saveToLocalStorage(newState, 'visualisations');

            return  newState;
        }

        default: {

            return state;
        }

    }
}



export const _getVis = (state: VisualisationsState) => state;