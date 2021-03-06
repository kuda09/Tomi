import {Component, OnInit, OnDestroy} from '@angular/core';
import {ApplicationState} from "../../../store/state/application.state";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {VisualisationsState, VisualisationState} from "../../../store/state/vis.state";
import * as _ from 'lodash';
import {SearchesState} from "../../../store/state/search.state";
import {NewSearchAction} from "../../../store/actions/search.action";
import {Observable} from "rxjs";
import {VisTypesState, VisTypeState} from "../../../store/state/visTypes.state";
import {EditVisAction} from "../../../store/actions/vis.action";
import {QueryBuilder} from "../../../query_builder";
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';
import {ResultsFormatter} from "../../../resultsFormatter";


@Component({
    selector: 'app-visualisation',
    templateUrl: 'visualisation.component.html',
    styleUrls: ['visualisation.component.scss']
})
export class VisualisationComponent implements OnInit, OnDestroy {

    id: number;
    isSearching: boolean = false;
    vis: VisualisationState;
    visTypes: VisTypesState;
    buckets = [];

    vis$;
    search$;
    visTypes$;

    queryBuilder = new QueryBuilder();
    resultsFormatter = new ResultsFormatter();

    constructor(private store: Store<ApplicationState>, private route: ActivatedRoute) {

        route.params
            .subscribe(params => this.id = params['id']);
    }

    ngOnInit(): void {

        this.vis$ = this.store.select('visualisations')
            .subscribe((vis: VisualisationsState) => {
                this.vis = _.filter(vis, (_vis: VisualisationState) => _vis.id === this.id)[0];

                this.search(this.vis);
            });

        this.visTypes$ = this.store.select('visTypes')
            .subscribe((visTypes: VisTypesState) => this.visTypes = visTypes);

        this.search$ = this.store.select('search')
            .subscribe((state: SearchesState) => {
                this.buckets = [];

                if(state[0].results !== undefined) {

                    let results = state[0].results;

                    if (this.resultsFormatter.checkResults(results)) {

                        this.buckets = this.resultsFormatter.computeArray(results)[0].buckets;

                    }
                }

            })
    }

    ngOnDestroy(): void {

        this.vis$.unsubscribe();
        this.visTypes$.unsubscribe();
        this.search$.unsubscribe();
        this.vis = null;
        this.id = null;
        this.buckets = [];
        this.visTypes = [];
    }

    visualize(vis): void {
        this.store.dispatch(new EditVisAction(vis));
    }

    statify(visType): void {

        const newVis = _.assign({}, this.vis, {type: visType})
        this.store.dispatch(new EditVisAction(newVis));
    }

    search(vis) {

        this.isSearching = true;

        const query = _.assign({}, {
            body: this.queryBuilder
                .addBuckets(vis.buckets)
                .build()
        });

        this.store.dispatch(new NewSearchAction(query));

    }

}
