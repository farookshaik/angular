import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";

import { ChartsModule } from 'ng2-charts';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TableCaseLoadComponent } from './tablecaseload/tablecaseload.component';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartistModule,
    NgbModule,
    NgxChartsModule,
    ChartsModule,
    MatchHeightModule,
    NgxDatatableModule
  ],
  exports: [],
  declarations: [
    Dashboard1Component,
    Dashboard2Component,
    TableCaseLoadComponent
  ],
  providers: [],
})
export class DashboardModule { }
