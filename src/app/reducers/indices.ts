import * as indice from '../actions/indices';
import * as _ from 'lodash';
import {List} from 'immutable';


interface IndiceSettingsIndexState {

    uuid: string;
}

interface IndiceSettingsState {

    index: IndiceSettingsIndexState
}

export interface IndiceState {
    aliases: {};
    mappings: {};
    settings:  IndiceSettingsState;
    warmers: {};
    index: '';
    selected: boolean;
}

export interface IndicesState extends Array<IndiceState>{}


export const  INITIAL_INDICE_STATE:IndicesState = []

export function indiceReducer(state = INITIAL_INDICE_STATE, action: indice.Actions) : IndicesState {

    switch (action.type) {

        case indice.ActionTypes.ADD_INDICE: {

            const vis = _.assign({}, {selected: true}, action.payload);

            state = _.map(state, indice => {

                return _.assign({}, indice ,{ selected: false});
            })

            let newState = List(state);

            return newState.insert(0, vis).toJS();
        }

        case indice.ActionTypes.REMOVE_INDICE: {

            const idcId = action.payload.settings.index.uuid;

            return _.filter(state, (vis: IndiceState) => idcId !== vis.settings.index.uuid);
        }


        case indice.ActionTypes.SELECT_INDICE: {

            const  currentIdcId = action.payload.settings.index.uuid;

            return _.map(state, (indice: IndiceState) => {

                if(indice.settings.index.uuid === currentIdcId) {

                    return _.assign({}, indice ,{ selected: true});

                }
                return _.assign({}, indice ,{ selected: false});

            })
        }

        default: {

            return state;
        }

    }
}

export const _getIndices = (state: IndicesState) => state;


