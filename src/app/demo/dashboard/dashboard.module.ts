import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashAnalyticsComponent } from './dash-analytics/dash-analytics.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchModule } from '../search/search.module';


@NgModule({
    declarations: [
        DashAnalyticsComponent
    ],
    imports: [
      CommonModule,
      DashboardRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      SharedModule,
      NgxPaginationModule,
      SearchModule
    ]
  })
  
  export class DashboardModule { }