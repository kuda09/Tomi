import * as _ from 'lodash';
import {List} from 'immutable';
import {LocalStorageService} from '../../services/local-storage.service';
import {Actions, ActionTypes} from "../actions/visTypes.action";
import {INITIAL_VISTYPES_STATE, VisTypesState, VisTypeState} from "../state/visTypes.state";

const localStorage = new LocalStorageService ();


const saveToLocalStorage = (state) => {

    localStorage.setItem('VIS-TYPES', state);
}


export function visTypesStateReducer(state = INITIAL_VISTYPES_STATE, action: Actions): VisTypesState {

    switch (action.type) {

        case ActionTypes.INSTALL_VIS: {

            const visType = _.assign({}, action.payload);

            let newState = List(state)
                .insert(0, visType)
                .toJS();

            saveToLocalStorage(newState);

            return newState;
        }

        case ActionTypes.UNINSTALL_VIS: {

            const visTypeId = action.payload.id;

            const newState = _.filter(state, (visType: VisTypeState) => visTypeId !== visType.id);
            saveToLocalStorage(newState);

            return newState;
        }


        default: {

            return state;
        }

    }
}
