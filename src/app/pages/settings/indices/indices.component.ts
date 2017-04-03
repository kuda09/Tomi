import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {AddIndiceComponent} from "./add-indice/add-indice.component";
import { Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {IndicesState} from "../../../store/state/indices.state";
import {ApplicationState} from "../../../store/state/application.state";

@Component({
    selector: 'app-indices',
    templateUrl: 'indices.component.html',
    styleUrls: ['indices.component.scss']
})
export class IndicesComponent implements OnInit {

    indices$: IndicesState;

    constructor(public dialog: MdDialog, private store: Store<ApplicationState>) {

        store.select('indices')
            .subscribe((indices: IndicesState) => {
                this.indices$ = indices;
                dialog.closeAll();
            });
    }

    ngOnInit() {
    }

    addIndice() {
        this.dialog.open(AddIndiceComponent);
    }

}
