import * as indice from '../actions/indices';


export interface INDICE_ADD_COMPELTE_STATE {
    indices;
}

export const  INITIAL_INDICE_ADD_COMPELTE_STATE: INDICE_ADD_COMPELTE_STATE =  {
    indices: []
}


export function indiceCompleteReducer(state = INITIAL_INDICE_ADD_COMPELTE_STATE, action: indice.Actions) : INDICE_ADD_COMPELTE_STATE {

    switch (action.type) {

        case indice.ActionTypes.ADD_INDICE_COMPLETE: {

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


export const getCompleteEntities = (state: INDICE_ADD_COMPELTE_STATE) => state.indices;