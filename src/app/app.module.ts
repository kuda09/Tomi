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
import { DashboardsComponent } from './pages/dashboards/dashboards.component';
import { VisualisationsComponent } from './pages/visualisations/visualisations.component';
import { HomeComponent } from './pages/home/home.component';
import {addDashboardDialog} from "./pages/dashboards/addDashboard/add.dashboard.component";
import { VisualisationsDashboardComponent } from './pages/visualisations/visualisations-dashboard/visualisations-dashboard.component';
import { VisualisationsSidebarComponent } from './pages/visualisations/visualisations-sidebar/visualisations-sidebar.component';
import { DocViewerComponent } from './pages/home/doc-viewer/doc-viewer.component';
import { AceEditorComponent, AceEditorDirective } from 'ng2-ace-editor';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { localStorageSync } from 'ngrx-store-localstorage';

import { EditVisualisationsComponent } from './pages/visualisations/edit-visualisations/edit-visualisations.component';
import {HttpService} from "./services/http.service";
import { IndicesComponent } from './pages/settings/indices/indices.component';
import { StatusComponent } from './pages/settings/status/status.component';
import { AboutComponent } from './pages/settings/about/about.component';
import { SettingsComponent } from './pages/settings/settings/settings.component';
import { AddIndiceComponent } from './pages/settings/indices/add-indice/add-indice.component';
import {DialogServiceService} from "./services/dialog-service.service";
import { Angular2DataTableModule } from 'angular2-data-table';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {IndicesEffectsService} from "./store/effects/indices-effects.service";
import {StoreModule, combineReducers} from "@ngrx/store";
import {reducer} from "./store/reducers/application.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import { IndicePreviewComponent } from './pages/settings/indices/indice-preview/indice-preview.component';
import { IndiceListComponent } from './pages/settings/indices/indice-list/indice-list.component';
import { LineChartComponent } from './pages/visualisations/vis-types/line-chart/line-chart.component';
import { BarChartComponent } from './pages/visualisations/vis-types/bar-chart/bar-chart.component';
import { PieChartComponent } from './pages/visualisations/vis-types/pie-chart/pie-chart.component';
import { CountComponent } from './pages/visualisations/vis-types/count/count.component';
import {DragulaModule} from "ng2-dragula";
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";
import { LoginComponent } from './pages/home/login/login.component';
import { LoginDialogComponent } from './pages/home/login/login-dialog/login-dialog.component';
import {UserEffectsService} from "./store/effects/user-effects.service";
import { CheckIndicesComponent } from './pages/home/check-indices/check-indices.component';
import {LocalStorageService} from "./services/local-storage.service";
import {Ng2PaginationModule} from "ng2-pagination";
import {SearchEffectsService} from "./store/effects/search-effects.service";
import { KeysPipe } from './pipes/keys.pipe';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { DatepickerModule } from 'angular2-material-datepicker';
import {EditDashboardComponent} from "./pages/dashboards/edit-dashboard/edit-dashboard.component";
import {ViewDashboardComponent} from "./pages/dashboards/view-dashboard/view-dashboard.component";
import { VisualisationComponent } from './pages/visualisations/visualisation/visualisation.component';
import { CreateVisualisationComponent } from './pages/visualisations/create-visualisation/create-visualisation.component';
import { VisEditorSidebarComponent } from './pages/visualisations/create-visualisation/vis-editor-sidebar/vis-editor-sidebar.component';
import { VisualizeComponent } from './pages/visualisations/create-visualisation/visualize/visualize.component';
import { VisTypesComponent } from './pages/settings/vis-types/vis-types.component';
import { AddVisTypeComponent } from './pages/settings/vis-types/add-vis-type/add-vis-type.component';
import { DataTableComponent } from './pages/visualisations/vis-types/data-table/data-table.component';



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
        CheckIndicesComponent,
        KeysPipe,
        TimePickerComponent,
        EditDashboardComponent,
        ViewDashboardComponent,
        VisualisationComponent,
        CreateVisualisationComponent,
        VisEditorSidebarComponent,
        VisualizeComponent,
        VisTypesComponent,
        AddVisTypeComponent,
        DataTableComponent,
    ],
    imports: [
        BrowserModule,
        DatepickerModule,
        Ng2PaginationModule,
        Angular2DataTableModule,
        NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        EffectsModule.run(SearchEffectsService),
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
        addDashboardDialog,
        AddVisTypeComponent,
        TimePickerComponent
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
