import * as indice from '../actions/indices';
/*import * as _ from 'lodash';*/

export interface INDICE_STATE {
    indices;
}

export const  INITIAL_INDICE_STATE:INDICE_STATE = {
    indices: []
}

export function indiceReducer(state = INITIAL_INDICE_STATE, action: indice.Actions) : INDICE_STATE {

    switch (action.type) {

        case indice.ActionTypes.ADD_INDICE: {

            const indice = action.payload;

            return Object.assign({}, state, {

                indices: state.indices.concat([{indice}])
            })
        }

        default: {

            return Object.assign({}, state);
        }

    }
}

export const getEntities = (state: INDICE_STATE) => state.indices;

//export const getIds = (state: State)

