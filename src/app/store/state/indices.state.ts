import {LocalStorageService} from "../../services/local-storage.service";
const localStorage = new LocalStorageService ();

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

export let  INITIAL_INDICE_STATE:IndicesState;

if (localStorage.getItem('USER_STATE') !== null) {

    INITIAL_INDICE_STATE = localStorage.getItem('USER_STATE').indices;


} else {

    INITIAL_INDICE_STATE = []


}