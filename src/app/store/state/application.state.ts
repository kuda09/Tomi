import {UserState} from "./user.state";
import {VisTypesState} from "./visTypes.state";
import {DashboardsState} from "./dashboards.state";
import {VisualisationsState} from "./vis.state";
import {IndicesState} from "./indices.state";
import {SearchesState} from "./search.state";

export interface ApplicationState {
    user: UserState;
    visTypes: VisTypesState;
    dashboards: DashboardsState;
    visualisations: VisualisationsState;
    indices: IndicesState;
    results?: SearchesState;
}
