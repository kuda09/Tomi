import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../../store/state/application.state";
import {ActivatedRoute} from "@angular/router";
import {DashboardsState, DashboardState} from "../../../store/state/dashboards.state";
import * as _ from 'lodash';

@Component({
    selector: 'app-view-dashboard',
    templateUrl: 'view-dashboard.component.html',
    styleUrls: ['view-dashboard.component.scss']
})
export class ViewDashboardComponent implements OnInit {

    id: number;
    dashboards: DashboardsState;
    dashboard: DashboardState;

    constructor(private store: Store<ApplicationState>,
                private route: ActivatedRoute) {
        route.params
            .subscribe(params => this.id = params['id']);

    }

    ngOnInit() {

        this.store.select('dashboards')
            .subscribe((dashboards: DashboardsState) => {
                this.dashboards = dashboards;
                this.dashboard = _.filter(dashboards, (dashboard: DashboardState) => dashboard.id === this.id)[0];
            })

    }

}
