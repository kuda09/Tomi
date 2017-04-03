import {Actions, ActionTypes} from "../actions/search.action";
import {SearchState, INITIAL_SEARCH_STATE, SearchesState} from "../state/search.state";
import * as _ from 'lodash';


export function searchStateReducer(state = INITIAL_SEARCH_STATE, action: Actions): SearchesState {


    switch (action.type){

        case ActionTypes.NEW_SEARCH: {


            const searchTerm = action.payload;

            return [searchTerm];
        }

        case ActionTypes.SEARCH_RESULTS_RECEIVED: {

            const newResults = action.payload;

            return _.map(state, (searchResult: SearchState, index) => {

                if(index === state.length - 1) {

                    return _.assign({}, searchResult, { results: newResults})
                }

                return searchResult;
            })

        }

        default : {

            return state;
        }

    }

}