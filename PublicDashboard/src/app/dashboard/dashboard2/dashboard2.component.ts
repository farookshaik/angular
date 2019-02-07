import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist";

import * as jsonData from '../../shared/data/data';
import { ColorStore } from '../dashboard1/color-store';
declare var require: any;
const tableData: any = require('../../shared/data/charttabledata.json');

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss'],
  providers: [ColorStore]
})

export class Dashboard2Component implements OnInit {
  @ViewChild('currentSupportPaidBarChart') currentSupportPaidBarChart: ElementRef;
  rows = [];

  currentSupportPaidbarChartGradientColors: any[];
  // barChart
  public currentSupportPaidbarChartOptions = jsonData.currentSupportPaidbarChartOptions;
  public currentSupportPaidbarChartLabels = jsonData.currentSupportPaidbarChartLabels;
  public currentSupportPaidbarChartType = jsonData.currentSupportPaidbarChartType;
  public currentSupportPaidbarChartLegend = jsonData.currentSupportPaidbarChartLegend;
  public currentSupportPaidbarChartData = jsonData.currentSupportPaidbarChartData;
  public currentSupportPaidbarChartColors = jsonData.currentSupportPaidbarChartColors;
  constructor(private colorStore: ColorStore) {
    this.rows = tableData;



  }
  ngOnInit() {
    this.currentSupportPaidbarChartGradientColors = this.colorStore.getGroupBarChartColors(this.currentSupportPaidBarChart);

  }
}
