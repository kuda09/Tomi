import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {VisualisationState} from "../../../../store/state/vis.state";

@Component({
    selector: 'app-visualize',
    templateUrl: 'visualize.component.html',
    styleUrls: ['visualize.component.scss']
})
export class VisualizeComponent implements OnInit, OnChanges {


    @Input()
    vis: VisualisationState;

    @Input()
    data: {}[];

    constructor() {
    }

    ngOnInit() {


        console.log(this.vis)
    }

    ngOnChanges(changes: SimpleChanges): void {

        if(changes['data'] || changes['vis']) {

            console.log(this.vis);
        }
    }

}
