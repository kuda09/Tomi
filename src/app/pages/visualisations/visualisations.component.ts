import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from "../../../app/store/reducers/application.reducer"
import {VisualisationsState} from "../../store/state/vis.state";
import {RemoveVisAction} from "../../store/actions/vis.action";
import {Observable} from "rxjs";
import {ApplicationState} from "../../store/state/application.state";

@Component({
  selector: 'app-visualisations',
  templateUrl: 'visualisations.component.html',
  styleUrls: ['visualisations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisualisationsComponent implements OnInit{

  visualisations$: Observable<VisualisationsState>;

  constructor(private store: Store<ApplicationState>) {
  }

  ngOnInit(): void {

    this.visualisations$ = this.store.select(fromRoot.getVisualisations);

  }

  deletVis(vis){

    this.store.dispatch(new RemoveVisAction(vis));

  }

}
