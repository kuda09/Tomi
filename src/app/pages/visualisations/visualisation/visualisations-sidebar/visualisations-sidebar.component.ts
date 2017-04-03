import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {VisualisationState} from "../../../../store/state/vis.state";

@Component({
  selector: 'app-visualisations-sidebar',
  templateUrl: 'visualisations-sidebar.component.html',
  styleUrls: ['visualisations-sidebar.component.scss']
})
export class VisualisationsSidebarComponent implements OnInit {


  @Input()
  visTypes: {}[];

  @Output()
  statify = new EventEmitter();
  constructor() {


  }

  ngOnInit() {

  }

  changeVis(vis: VisualisationState) {

    this.statify.emit(vis);
  }



}
