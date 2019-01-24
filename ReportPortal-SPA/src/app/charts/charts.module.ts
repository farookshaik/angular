import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Routes, RouterModule } from '@angular/router';
import { ChartsRouterModule } from './charts.router';
import { ChartComponent } from './chart.component';
import { TrendOverAllGraphComponent } from './trend-overall/trend-overall.component';
import { TrendGraphCollectionsComponent } from './trend-graph-collections/trend-graph-collections.component';



@NgModule({
  imports: [
    CommonModule,
    ChartsRouterModule,
    FlexLayoutModule,
  ],
  declarations: [ChartComponent, TrendOverAllGraphComponent, TrendGraphCollectionsComponent],
  exports: [TrendOverAllGraphComponent, TrendGraphCollectionsComponent]
})
export class ChartsModule { }
