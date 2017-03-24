import {LocalStorageService} from "../../services/local-storage.service";
const localStorage = new LocalStorageService ();

export interface VisTypeState {
    id: number;
    name: string;
    description: string;
    icon: string;
    selector?: string;
    options?:{};
}


export interface VisTypesState extends Array<VisTypeState>{}


export let INITIAL_VISTYPES_STATE: VisTypesState ;


if (localStorage.getItem('VIS-TYPES') !== null) {

    INITIAL_VISTYPES_STATE = localStorage.getItem('VIS-TYPES');

} else {

    INITIAL_VISTYPES_STATE = [];
}