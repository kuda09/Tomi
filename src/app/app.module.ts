import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { localStorageSync } from 'ngrx-store-localstorage';

import { EditVisualisationsComponent } from './visualisations/edit-visualisations/edit-visualisations.component';
import {HttpService} from "./services/http.service";
import { IndicesComponent } from './settings/indices/indices.component';
import { StatusComponent } from './settings/status/status.component';
import { AboutComponent } from './settings/about/about.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { AddIndiceComponent } from './settings/indices/add-indice/add-indice.component';
import {DialogServiceService} from "./services/dialog-service.service";
import { Angular2DataTableModule } from 'angular2-data-table';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {IndicesEffectsService} from "./effects/indices-effects.service";
import {StoreModule, combineReducers} from "@ngrx/store";
import {reducer} from "./reducers/index";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import { IndicePreviewComponent } from './settings/indices/indice-preview/indice-preview.component';
import { IndiceListComponent } from './settings/indices/indice-list/indice-list.component';
import { LineChartComponent } from './visualisations/vis-types/line-chart/line-chart.component';
import { BarChartComponent } from './visualisations/vis-types/bar-chart/bar-chart.component';
import { PieChartComponent } from './visualisations/vis-types/pie-chart/pie-chart.component';
import { CountComponent } from './visualisations/vis-types/count/count.component';
import {DragulaModule} from "ng2-dragula";
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";
import { LoginComponent } from './home/login/login.component';
import { LoginDialogComponent } from './home/login/login-dialog/login-dialog.component';
import {UserEffectsService} from "./effects/user-effects.service";
import { CheckIndicesComponent } from './home/check-indices/check-indices.component';
import {LocalStorageService} from "./services/local-storage.service";
import {compose} from "@ngrx/core";

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
        EditVisualisationsComponent,
        IndicesComponent,
        StatusComponent,
        AboutComponent,
        SettingsComponent,
        AddIndiceComponent,
        IndicePreviewComponent,
        IndiceListComponent,
        LineChartComponent,
        BarChartComponent,
        PieChartComponent,
        CountComponent,
        LoginComponent,
        LoginDialogComponent,
        CheckIndicesComponent
    ],
    imports: [
        BrowserModule,
        Angular2DataTableModule,
        NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        EffectsModule.run(IndicesEffectsService),
        EffectsModule.run(UserEffectsService),
        RouterModule,
        MaterialModule,
        routing,
        FlexLayoutModule,
        ChartsModule,
        DragulaModule
    ],
    entryComponents: [
        AddIndiceComponent,
        LoginDialogComponent,
        addDashboardDialog
    ],
    providers: [
        appRoutingProviders,
        HttpService,
        AuthService,
        LocalStorageService,
        AuthGuardService,
        IndicesEffectsService,
        DialogServiceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
