import {Actions, ActionTypes} from "../actions/user.action";
import {UserState, INITIAL_USER_STATE} from "../state/user.state";
import {LocalStorageService} from "../../services/local-storage.service";

const localStorage = new LocalStorageService();

export function userReducer(state = INITIAL_USER_STATE, action: Actions) : UserState {

    const _user = action.payload;

    switch (action.type) {

        case ActionTypes.LOGIN: {

            if(localStorage.getItem('USER_STATE') !== undefined){

                const userState = localStorage.getItem('USER_STATE');

                return Object.assign({}, userState);
            }

            return Object.assign({}, state);
        }
        case ActionTypes.LOGIN_SUCCESS: {

            const newState = Object.assign({}, _user);
            //side effects but oh well
            localStorage.setItem('USER_STATE', newState);

            return newState;
        }

        case ActionTypes.LOGOUT_SUCCESS: {

            localStorage.removeItem('USER_STATE');

            return Object.assign({});

        }


        case ActionTypes.EDIT_USER: {

            const newState = Object.assign({}, state, _user);
            localStorage.setItem('USER_STATE', newState);
            return newState
        }

        default: {

            return state;
        }

    }
}


export const _getUser= (state: UserState) => state;
