import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import {UserState} from "./user";


export interface State {
    user?: UserState
}

const reducers = {
    indices: fromIndices.indiceReducer,
    indicesComplete: fromIndicesComplete.indiceCompleteReducer
};


const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);


export function reducer (state: any, action: any) {

    return developmentReducer(state, action);
}

export const getIndicesState = (state: State) => state.indices;
export const getIndicesCompleteState = (state: State) => state.indicesComplete;

export const getIndiceEntities = createSelector(getIndicesState, fromIndices.getEntities);
export const getIndiceCompleteEntities = createSelector(getIndicesCompleteState, fromIndicesComplete.getCompleteEntities);