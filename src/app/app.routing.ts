import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {DashboardsComponent} from "./pages/dashboards/dashboards.component";
import {VisualisationsComponent} from "./pages/visualisations/visualisations.component";
import {AboutComponent} from "./pages/settings/about/about.component";
import {StatusComponent} from "./pages/settings/status/status.component";
import {IndicesComponent} from "./pages/settings/indices/indices.component";
import {SettingsComponent} from "./pages/settings/settings/settings.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {LoginComponent} from "./pages/home/login/login.component";
import {ViewDashboardComponent} from "./pages/dashboards/view-dashboard/view-dashboard.component";
import {EditDashboardComponent} from "./pages/dashboards/edit-dashboard/edit-dashboard.component";
import {CreateVisualisationComponent} from "./pages/visualisations/create-visualisation/create-visualisation.component";
import {VisTypesComponent} from "./pages/settings/vis-types/vis-types.component";
import {VisualisationComponent} from "./pages/visualisations/visualisation/visualisation.component";
import {EditVisTypeComponent} from "./pages/settings/vis-types/edit-vis-type/edit-vis-type.component";

const appRoutes: Routes = [
    {
        path: '',
        component:HomeComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'dashboards',
        component: DashboardsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'dashboards/:id',
        component: ViewDashboardComponent,
        children: [
            {
                path: 'edit',
                component: EditDashboardComponent
            }
        ],
        canActivate: [AuthGuardService]

    },
    {
        path: 'visualisations',
        children: [
            {
                path: '',
                component: VisualisationsComponent
            },
            {
                path: 'create',
                children: [
                    {
                        path:'',
                        component: CreateVisualisationComponent
                    }
                ],
            }
        ],
        canActivate: [AuthGuardService]
    },
    {
        path: 'visualisations/:id',
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: VisualisationComponent
            }
        ]
    },
    {
        path: 'settings',
        canActivate: [AuthGuardService],
        children: [

            {
                path: '',
                component: SettingsComponent
            },
            {
                path: 'indices',
                component: IndicesComponent
            },
            {
                path: 'status',
                component: StatusComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'vis-types',
                children: [
                    {
                        path: '',
                        component: VisTypesComponent
                    },
                    {
                        path: ':id/edit',
                        component: EditVisTypeComponent
                    }
                ]
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        outlet: 'popup'
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
