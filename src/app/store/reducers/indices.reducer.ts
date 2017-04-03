import * as _ from 'lodash';
import {List} from 'immutable';
import {INITIAL_INDICE_STATE, IndicesState, IndiceState} from "../state/indices.state";
import {Actions, ActionTypes} from "../actions/indices.action";

import {LocalStorageService} from '../../services/local-storage.service';

const localStorage = new LocalStorageService ();


const saveToLocalStorage = (state, type) => {

    let oldState = localStorage.getItem('USER_STATE');

    oldState[type] = state;

    localStorage.setItem('USER_STATE', oldState);

}

export function indiceReducer(state = INITIAL_INDICE_STATE, action: Actions) : IndicesState {

    switch (action.type) {

        case ActionTypes.ADD_INDICE: {

            const vis = _.assign({}, {selected: true}, action.payload);

            let newState = List(_.map(state, indice => _.assign({}, indice, {selected: false})))
                .insert(0, vis)
                .toJS();

            saveToLocalStorage(newState, 'indices');

            return newState;
        }

        case ActionTypes.REMOVE_INDICE: {

            const idcId = action.payload.settings.index.uuid;

            return _.filter(state, (vis: IndiceState) => idcId !== vis.settings.index.uuid);
        }


        case ActionTypes.SELECT_INDICE: {

            const  currentIdcId = action.payload.settings.index.uuid;

            const newState = _.map(state, (indice: IndiceState) => {

                if(indice.settings.index.uuid === currentIdcId) {

                    return _.assign({}, indice ,{ selected: true});

                }
                return _.assign({}, indice ,{ selected: false});

            });

            saveToLocalStorage(newState, 'indices');

            return newState;
        }

        default: {

            return state;
        }

    }
}



export const _getIndices = (state: IndicesState) => state;


