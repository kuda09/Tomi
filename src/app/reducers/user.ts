import {DashboardState} from "./dashboards";
import {VisualisationState} from "./visualisations";
import {INDICE_STATE} from "./indices";



export interface UserState {
    id: number;
    clientName: string;
    dashboards: DashboardState[];
    visualisations: VisualisationState[];
    indices: INDICE_STATE[];
}


export const INITIAL_USER_STATE: UserState = {
    id: null,
    clientName: null,
    dashboards: [],
    visualisations: [],
    indices: []
}

