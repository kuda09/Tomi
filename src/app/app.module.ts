import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import 'hammerjs';
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from '@angular/flex-layout';
import {appRoutingProviders, routing} from "./app.routing";
import {RouterModule} from "@angular/router";
import { DashboardsComponent } from './dashboards/dashboards.component';
import { VisualisationsComponent } from './visualisations/visualisations.component';
import { HomeComponent } from './home/home.component';
import {addDashboardDialog} from "./dashboards/addDashboard/add.dashboard.component";
import { VisualisationsDashboardComponent } from './visualisations/visualisations-dashboard/visualisations-dashboard.component';
import { VisualisationsSidebarComponent } from './visualisations/visualisations-sidebar/visualisations-sidebar.component';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';
import { AceEditorComponent, AceEditorDirective } from 'ng2-ace-editor';

import { EditVisualisationsComponent } from './visualisations/edit-visualisations/edit-visualisations.component';
import {HttpService} from "./service/http.service";


@NgModule({
    declarations: [
        AppComponent,
        DashboardsComponent,
        addDashboardDialog,
        VisualisationsComponent,
        HomeComponent,
        AceEditorComponent,
        AceEditorDirective,
        VisualisationsDashboardComponent,
        VisualisationsSidebarComponent,
        DocViewerComponent,
        EditVisualisationsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        MaterialModule,
        routing,
        FlexLayoutModule
    ],
    providers: [
        appRoutingProviders,
        HttpService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
