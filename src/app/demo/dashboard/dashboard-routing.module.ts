import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashAnalyticsComponent } from './dash-analytics/dash-analytics.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'analytics',
                component: DashAnalyticsComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }