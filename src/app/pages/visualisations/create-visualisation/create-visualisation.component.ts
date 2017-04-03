import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../../store/state/application.state";
import {VisTypesState} from "../../../store/state/visTypes.state";
import {IndicesState} from "../../../store/state/indices.state";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AddVisAction} from "../../../store/actions/vis.action";
import {generateUniqueId} from "../../../util";
import {Router} from "@angular/router";

@Component({
    selector: 'app-create-visualisation',
    templateUrl: 'create-visualisation.component.html',
    styleUrls: ['create-visualisation.component.scss']
})
export class CreateVisualisationComponent implements OnInit {

    visTypes: VisTypesState;
    indices: IndicesState;
    CreateVisForm: FormGroup;
    type: string;
    tab = 0;

    constructor(private store: Store<ApplicationState>, private _fb: FormBuilder, private router: Router) {
        store.select('visTypes')
            .subscribe((visTypes: VisTypesState) => {

                this.visTypes = visTypes;
            });

        store.select('indices')
            .subscribe((indices: IndicesState) => {

                this.indices = indices;
            })

    }

    ngOnInit() {
        this.CreateVisForm = this._fb.group({
            id: [generateUniqueId(), Validators.required],
            name: ['', Validators.required],
            index_pattern: ['', Validators.required],
            description: [''],
        });
    }


    goToNextStep(vis) {

        if(vis.name) {

            this.type = vis;
        }

        this.tab++;
    }


    createVis(payload, isValid){

        if(isValid){

            payload.type = this.type;

            this.store.dispatch(new AddVisAction(payload));
            //needs to have an effect method
            this.router.navigate([`visualisations/${payload.id}`]);

        }

    }

}
