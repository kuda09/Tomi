import {Component, OnInit, ViewChild, Input, AfterViewInit} from '@angular/core';
import {HttpService} from "../../../services/http.service";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../../store/state/application.state";
import {SearchesState} from "../../../store/state/search.state";

@Component({
    selector: 'app-doc-viewer',
    templateUrl: 'doc-viewer.component.html',
    styleUrls: ['doc-viewer.component.scss']
})
export class DocViewerComponent implements OnInit, AfterViewInit {

    @ViewChild('editor') editor;
    hits = [];
    hitsString: string = '';
    constructor(private httpService: HttpService, private store: Store<ApplicationState>) {
    }


    ngAfterViewInit() {

    }

    ngOnInit() {


        this.store.select('search')
            .subscribe((state: SearchesState)=> {

                if(state.length > 0 ) {

                    if(state[0].results !== undefined ) {

                        this.hits = state[0].results.hits.hits;

                        console.log(this.hits);
                        this.hitsString = JSON.stringify(state[0].results.hits.hits);
                    }

                }

            })

    }

}
