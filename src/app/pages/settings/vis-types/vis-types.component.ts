import {Component, OnInit, OnDestroy} from '@angular/core';
import {MdDialog} from "@angular/material";
import {AddVisTypeComponent} from "./add-vis-type/add-vis-type.component";
import {VisTypesState} from "../../../store/state/visTypes.state";
import {ApplicationState} from "../../../store/state/application.state";
import {Store} from "@ngrx/store";
import {UnistallVisAction} from "../../../store/actions/visTypes.action";
import {Observable} from "rxjs";

@Component({
    selector: 'app-vis-types',
    templateUrl: './vis-types.component.html',
    styleUrls: ['./vis-types.component.scss']
})
export class VisTypesComponent implements OnInit, OnDestroy {


    visTypes: VisTypesState;
    visTypes$;

    constructor(private dialog: MdDialog, private store: Store<ApplicationState>) {


    }

    ngOnInit(): void {

        this.visTypes$ = this.store.select('visTypes')
            .subscribe((visTypes: VisTypesState) => {

                this.visTypes = visTypes;
            });
    }

    ngOnDestroy(): void {

        this.visTypes$.unsubscribe();

    }

    addVisTypes() {

        this.dialog.open(AddVisTypeComponent);

    }

    uninstall(vis) {

        this.store.dispatch(new UnistallVisAction(vis));
    }

}
