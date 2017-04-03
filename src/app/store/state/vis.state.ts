import {LocalStorageService} from "../../services/local-storage.service";
import {VisTypeState} from "./visTypes.state";
const localStorage = new LocalStorageService ();

export interface VisualisationState {
    id: number;
    name: string;
    buckets: {}[];
    metrics: {}[];
    index_pattern: {};
    type: VisTypeState;
    description?: string;
    dashboardAssociations?: number[];
}


export interface VisualisationsState extends Array<VisualisationState>{}


export let INITIAL_VISUALISATIONS_STATE: VisualisationsState ;


if (localStorage.getItem('USER_STATE') !== null) {

    INITIAL_VISUALISATIONS_STATE = localStorage.getItem('USER_STATE').visualisations;

} else {

    INITIAL_VISUALISATIONS_STATE = [];
}