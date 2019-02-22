import { Component, ViewChild, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';

import * as chartsData from '../../shared/data/chartjs';
import * as jsonData from '../../shared/data/data';
declare var require: any;
const data: any = require('../../shared/data/chartist.json');

// tslint:disable-next-line:max-line-length
import { barChartmulti, barChartCaseLoadmulti, pieChartSingle, barChartStackedmulti, areaChartPaidMulti, lineChartMulti, lineChartCollectionsMulti, areaChartMulti } from '../../shared/data/ngxChart';
import * as ngxChartsData from '../../shared/configs/ngx-charts.config';
import { ColorStore } from './color-store';
import * as ctPointLabels from 'chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js'

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss'],
  providers: [ColorStore],
  encapsulation: ViewEncapsulation.None
})


export class Dashboard1Component implements OnInit {





  @ViewChild('currentSupportPaidBarChart') currentSupportPaidBarChart: ElementRef;
  @ViewChild('collectionsDuebaseChart') collectionsDuebaseChart: ElementRef;
  @ViewChild('collectionsPaidbaseChart') collectionsPaidbaseChart: ElementRef;
  @ViewChild('totalCaseLoadBarChart') totalCaseLoadBarChart: ElementRef;
  @ViewChild('collectionsTotalLinebaseChart') collectionsTotalLinebaseChart: ElementRef;

  currentSupportPaidbarChartGradientColors: any[];
  collectionsDuebarChartGradientColors: any[];
  collectionsPaidbarChartGradientColors: any[];
  totalCaseLoadBarChartGradientColors: any[];
  collectionsTotalLineChartGradientColors: any[];


  // lineChart
  public lineChartData = jsonData.lineChartData;
  public lineChartLabels = jsonData.lineChartLabels;
  public lineChartOptions = jsonData.lineChartOptions;
  public lineChartColors = jsonData.lineChartColors;
  public lineChartLegend = jsonData.lineChartLegend;
  public lineChartType = jsonData.lineChartType;

  // lineChart
  public widgetlineChartData = jsonData.widgetlineChartData;
  public widgetlineChartOptions = jsonData.widgetlineChartOptions;

  // lineChart
  public lineChartAvgData = jsonData.lineChartAvgData;
  public lineChartAvgLabels = jsonData.lineChartAvgLabels;
  public lineChartAvgOptions = jsonData.lineChartAvgOptions;
  public lineChartAvgColors = jsonData.lineChartAvgColors;
  public lineChartAvgLegend = jsonData.lineChartAvgLegend;
  public lineChartAvgType = jsonData.lineChartAvgType;

  // collectionsDuebarChart
  public collectionsDuebarChartOptions = jsonData.collectionsDuebarChartOptions;
  public collectionsDuebarChartLabels = jsonData.collectionsDuebarChartLabels;
  public collectionsDuebarChartType = jsonData.collectionsDuebarChartType;
  public collectionsDuebarChartLegend = jsonData.collectionsDuebarChartLegend;
  public collectionsDuebarChartData = jsonData.collectionsDuebarChartData;
  // public collectionsDuebarChartColors = jsonData.collectionsDuebarChartColors;


  // collectionsPaidbarChart
  public collectionsPaidbarChartOptions = jsonData.collectionsPaidbarChartOptions;
  public collectionsPaidbarChartLabels = jsonData.collectionsPaidbarChartLabels;
  public collectionsPaidbarChartType = jsonData.collectionsPaidbarChartType;
  public collectionsPaidbarChartLegend = jsonData.collectionsPaidbarChartLegend;
  public collectionsPaidbarChartData = jsonData.collectionsPaidbarChartData;

  // barChart
  public currentSupportPaidbarChartOptions = jsonData.currentSupportPaidbarChartOptions;
  public currentSupportPaidbarChartLabels = jsonData.currentSupportPaidbarChartLabels;
  public currentSupportPaidbarChartType = jsonData.currentSupportPaidbarChartType;
  public currentSupportPaidbarChartLegend = jsonData.currentSupportPaidbarChartLegend;
  public currentSupportPaidbarChartData = jsonData.currentSupportPaidbarChartData;
  // public currentSupportPaidbarChartColors = jsonData.currentSupportPaidbarChartColors;


  // barChart
  public barChartPaidDueOptions = jsonData.barChartPaidDueOptions;
  public barChartPaidDueLabels = jsonData.barChartPaidDueLabels;
  public barChartPaidDueType = jsonData.barChartPaidDueType;
  public barChartPaidDueLegend = jsonData.barChartPaidDueLegend;
  public barChartPaidDueData = jsonData.barChartPaidDueData;
  public barChartPaidDueColors = jsonData.barChartPaidDueColors;


  // barChart
  public barChartCaseLoadOptions = jsonData.barChartCaseLoadOptions;
  public barChartCaseLoadLabels = jsonData.barChartCaseLoadLabels;
  public barChartCaseLoadType = jsonData.barChartCaseLoadType;
  public barChartCaseLoadLegend = jsonData.barChartCaseLoadLegend;
  public barChartCaseLoadData = jsonData.barChartCaseLoadData;
  // public barChartCaseLoadColors = jsonData.barChartCaseLoadColors;

  //Chart Data

  lineChartMulti = lineChartMulti;
  lineChartCollectionsMulti = lineChartCollectionsMulti;
  areaChartMulti = areaChartMulti;
  barChartmulti = barChartmulti;
  barChartCaseLoadmulti = barChartCaseLoadmulti;
  pieChartSingle = pieChartSingle;

  //Bar Charts
  barChartView: any[] = ngxChartsData.barChartView;

  // options
  barChartShowYAxis = ngxChartsData.barChartShowYAxis;
  barChartShowXAxis = ngxChartsData.barChartShowXAxis;
  barChartGradient = ngxChartsData.barChartGradient;
  barChartShowLegend = ngxChartsData.barChartShowLegend;
  barChartShowXAxisLabel = ngxChartsData.barChartShowXAxisLabel;
  barChartXAxisLabel = ngxChartsData.barChartXAxisLabel;
  barChartShowYAxisLabel = ngxChartsData.barChartShowYAxisLabel;
  barChartYAxisLabel = ngxChartsData.barChartYAxisLabel;
  barChartColorScheme = ngxChartsData.barChartColorScheme;

  //Pie Charts

  pieChartView: any[] = ngxChartsData.pieChartView;

  // options
  pieChartShowLegend = ngxChartsData.pieChartShowLegend;

  pieChartColorScheme = ngxChartsData.pieChartColorScheme;

  // pie
  pieChartShowLabels = ngxChartsData.pieChartShowLabels;
  pieChartExplodeSlices = ngxChartsData.pieChartExplodeSlices;
  pieChartDoughnut = ngxChartsData.pieChartDoughnut;
  pieChartGradient = ngxChartsData.pieChartGradient;

  pieChart1ExplodeSlices = ngxChartsData.pieChart1ExplodeSlices;
  pieChart1Doughnut = ngxChartsData.pieChart1Doughnut;


  //Line Charts

  lineChartView: any[] = ngxChartsData.lineChartView;

  // options
  lineChartShowXAxis = ngxChartsData.lineChartShowXAxis;
  lineChartShowYAxis = ngxChartsData.lineChartShowYAxis;
  lineChartGradient = ngxChartsData.lineChartGradient;
  lineChartShowLegend = ngxChartsData.lineChartShowLegend;
  lineChartShowXAxisLabel = ngxChartsData.lineChartShowXAxisLabel;
  lineChartXAxisLabel = ngxChartsData.lineChartXAxisLabel;
  lineChartShowYAxisLabel = ngxChartsData.lineChartShowYAxisLabel;
  lineChartYAxisLabel = ngxChartsData.lineChartYAxisLabel;

  lineChartColorScheme = ngxChartsData.lineChartColorScheme;

  // line, area
  lineChartAutoScale = ngxChartsData.lineChartAutoScale;
  lineChartLineInterpolation = ngxChartsData.lineChartLineInterpolation;

  //Area Charts

  areaChartView = ngxChartsData.areaChartView;

  // options
  areaChartShowXAxis = ngxChartsData.areaChartShowXAxis;
  areaChartShowYAxis = ngxChartsData.areaChartShowYAxis;
  areaChartGradient = ngxChartsData.areaChartGradient;
  areaChartShowLegend = ngxChartsData.areaChartShowLegend;
  areaChartShowXAxisLabel = ngxChartsData.areaChartShowXAxisLabel;
  areaChartXAxisLabel = ngxChartsData.areaChartXAxisLabel;
  areaChartShowYAxisLabel = ngxChartsData.areaChartShowYAxisLabel;
  areaChartYAxisLabel = ngxChartsData.areaChartYAxisLabel;

  areaChartColorScheme = ngxChartsData.areaChartColorScheme;

  // line, area
  areaChartAutoScale = ngxChartsData.areaChartAutoScale;
  areaChartLineInterpolation = ngxChartsData.areaChartLineInterpolation;

  // Line area chart configuration Starts
  lineArea: Chart = {
    type: 'Line',
    data: data['lineAreaDashboard'],
    options: {
      low: 0,
      showArea: true,
      fullWidth: true,
      onlyInteger: true,
      axisY: {
        low: 0,
        scaleMinSpace: 50,
      },
      axisX: {
        showGrid: false
      }
    },
    events: {
      created(data: any): void {
        var defs = data.svg.elem('defs');
        defs.elem('linearGradient', {
          id: 'gradient',
          x1: 0,
          y1: 1,
          x2: 1,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': 'rgba(0, 201, 255, 1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': 'rgba(146, 254, 157, 1)'
        });

        defs.elem('linearGradient', {
          id: 'gradient1',
          x1: 0,
          y1: 1,
          x2: 1,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': 'rgba(132, 60, 247, 1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': 'rgba(56, 184, 242, 1)'
        });
      },

    },
  };
  // Line area chart configuration Ends

  // Stacked Bar chart configuration Starts
  Stackbarchart: Chart = {
    type: 'Bar',
    data: data['Stackbarchart'],
    options: {
      stackBars: true,
      fullWidth: true,
      axisX: {
        showGrid: false,
      },
      axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0
      },
      chartPadding: 30
    },
    events: {
      created(data: any): void {
        var defs = data.svg.elem('defs');
        defs.elem('linearGradient', {
          id: 'linear',
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': 'rgba(0, 201, 255,1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': 'rgba(17,228,183, 1)'
        });
      },
      draw(data: any): void {
        if (data.type === 'bar') {
          data.element.attr({
            style: 'stroke-width: 5px',
            x1: data.x1 + 0.001
          });

        }
        else if (data.type === 'label') {
          data.element.attr({
            y: 270
          })
        }
      }
    },
  };
  // Stacked Bar chart configuration Ends

  // Line area chart 2 configuration Starts
  lineArea2: Chart = {
    type: 'Line',
    data: data['lineArea2'],
    options: {
      showArea: false,
      fullWidth: true,
      lineSmooth: Chartist.Interpolation.none(),
      axisX: {
        showGrid: false,
      },
      axisY: {
        low: 0,
        scaleMinSpace: 50,
      }
    },
    responsiveOptions: [
      ['screen and (max-width: 640px) and (min-width: 381px)', {
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return index % 2 === 0 ? value : null;
          }
        }
      }],
      ['screen and (max-width: 380px)', {
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return index % 3 === 0 ? value : null;
          }
        }
      }]
    ],
    events: {
      created(data: any): void {
        var defs = data.svg.elem('defs');
        defs.elem('linearGradient', {
          id: 'gradient2',
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-opacity': '0.2',
          'stop-color': 'rgba(255, 255, 255, 1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-opacity': '0.2',
          'stop-color': 'rgba(0, 201, 255, 1)'
        });

        defs.elem('linearGradient', {
          id: 'gradient3',
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0
        }).elem('stop', {
          offset: 0.3,
          'stop-opacity': '0.2',
          'stop-color': 'rgba(255, 255, 255, 1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-opacity': '0.2',
          'stop-color': 'rgba(132, 60, 247, 1)'
        });
        defs.elem('linearGradient', {
          id: 'gradient4',
          x1: 0,
          y1: 1,
          x2: 1,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': 'rgba(255, 255, 255, 1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': 'rgba(56, 184, 242, 1)'
        });

      },
      draw(data: any): void {
        var circleRadius = 4;
        if (data.type === 'point') {

          var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            r: circleRadius,
            class: 'ct-point-circle'
          });
          data.element.replace(circle);
        }
        else if (data.type === 'label') {
          // adjust label position for rotation
          const dX = data.width / 2 + (30 - data.width)
          data.element.attr({ x: data.element.attr('x') - dX })
        }
      }
    },
  };
  // Line area chart 2 configuration Ends

  // Line chart configuration Starts
  lineChart: Chart = {
    type: 'Line', data: data['LineDashboard'],
    options: {
      axisX: {
        showGrid: false
      },
      axisY: {
        showGrid: false,
        showLabel: false,
        low: 0,
        high: 100,
        offset: 0,
      },
      fullWidth: true,
      offset: 0,
    },
    events: {
      draw(data: any): void {
        var circleRadius = 4;
        if (data.type === 'point') {
          var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            r: circleRadius,
            class: 'ct-point-circle'
          });

          data.element.replace(circle);
        }
        else if (data.type === 'label') {
          // adjust label position for rotation
          const dX = data.width / 2 + (30 - data.width)
          data.element.attr({ x: data.element.attr('x') - dX })
        }
      }
    },

  };
  // Line chart configuration Ends



  // Line area chart 2 configuration Starts
  lineBarArea2: Chart = {
    type: 'Bar',
    data: data['lineBarArea2'],
    options: {

      fullWidth: true,
      axisX: {
        showGrid: false,
        showLabel: true,
      },
      axisY: {
        showLabel: true,
        low: 0,
        scaleMinSpace: 50,
        offset: 70
      }
    },
    responsiveOptions: [
      ['screen and (max-width: 640px) and (min-width: 381px)', {
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return index % 2 === 0 ? value : null;
          }
        }
      }],
      ['screen and (max-width: 380px)', {
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return index % 3 === 0 ? value : null;
          }
        }
      }]
    ],
    events: {
      draw(data: any): void {
        var circleRadius = 4;
        if (data.type === 'point') {

          var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            r: circleRadius,
            class: 'ct-point-circle'
          });
          data.element.replace(circle);
        }
        else if (data.type === 'label') {
          // adjust label position for rotation
          const dX = data.width / 2 + (60 - data.width)
          data.element.attr({ x: data.element.attr('x') - dX })
        }
      }
    },
  };
  // Line area chart 2 configuration Ends

  // Donut chart configuration Starts
  DonutChart: Chart = {
    type: 'Pie',
    data: data['donutDashboard'],
    options: {
      donut: true,
      startAngle: 0,
      labelInterpolationFnc: function (value) {
        var total = data['donutDashboard'].series.reduce(function (prev, series) {
          return prev + series.value;
        }, 0);
        return total + '%';
      }
    },
    events: {
      draw(data: any): void {
        if (data.type === 'label') {
          if (data.index === 0) {
            data.element.attr({
              dx: data.element.root().width() / 2,
              dy: data.element.root().height() / 2
            });
          } else {
            data.element.remove();
          }
        }

      }
    }
  };
  // Donut chart configuration Ends

  //  Bar chart configuration Starts
  BarChart: Chart = {
    type: 'Bar', data: data['DashboardBar'], options: {
      axisX: {
        showGrid: false,
      },
      axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0
      },
      low: 0,
      high: 60, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    },
    responsiveOptions: [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ],
    events: {
      created(data: any): void {
        var defs = data.svg.elem('defs');
        defs.elem('linearGradient', {
          id: 'gradient4',
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': 'rgba(238, 9, 121,1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': 'rgba(255, 106, 0, 1)'
        });
        defs.elem('linearGradient', {
          id: 'gradient5',
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': 'rgba(0, 75, 145,1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': 'rgba(120, 204, 55, 1)'
        });

        defs.elem('linearGradient', {
          id: 'gradient6',
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': 'rgba(132, 60, 247,1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': 'rgba(56, 184, 242, 1)'
        });
        defs.elem('linearGradient', {
          id: 'gradient7',
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': 'rgba(155, 60, 183,1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': 'rgba(255, 57, 111, 1)'
        });

      },
      draw(data: any): void {
        var barHorizontalCenter, barVerticalCenter, label, value;
        if (data.type === 'bar') {

          data.element.attr({
            y1: 195,
            x1: data.x1 + 0.001
          });

        }
      }
    },

  };
  // Bar chart configuration Ends

  // line chart configuration Starts
  WidgetlineChart: Chart = {
    type: 'Line', data: data['WidgetlineChart'],
    options: {
      axisX: {
        showGrid: false,
        showLabel: false,
      },
      axisY: {
        showGrid: false,
        low: 40,
        showLabel: false,
        offset: 0,
      },
      plugins: [
        ctPointLabels({
          labelClass: 'ct-label',
          labelOffset: {
            x: 1,
            y: -6
          },
          textAnchor: 'middle'
        }),

      ],
      lineSmooth: false,
      fullWidth: true,
    },
    responsiveOptions: [
      ['screen and (min-width: 641px) and (max-width: 1024px)', {
        axisX: {
          seriesBarDistance: 10,
          labelInterpolationFnc: function (value, index) {
            return value;
          }
        }
      }],
      ['screen and (max-width: 640px)', {
        axisX: {
          seriesBarDistance: 5,
          labelInterpolationFnc: function (value, index) {
            return value[0];
          }
        }
      }]
    ],
    events: {
      // tslint:disable-next-line:no-shadowed-variable
      draw(data: any): void {
        var circleRadius = 4;
        if (data.type === 'point') {
          var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            r: circleRadius,
            class: 'ct-point-circle'
          });

          data.element.replace(circle);
        }
        else if (data.type === 'label') {
          // adjust label position for rotation
          const dX = data.width / 2 + (30 - data.width)
          data.element.attr({ x: data.element.attr('x') - dX })
        }
      }
    },

  };
  // Line chart configuration Ends



  // Line chart configuration Starts
  lineChart2: Chart = {
    type: 'Line', data: data['line2'],
    options: {
      axisX: {
        showGrid: false,
      },
      axisY: {
        low: 0,
        scaleMinSpace: 50,
      },
      fullWidth: true,
    },
    responsiveOptions: [
      ['screen and (max-width: 640px) and (min-width: 381px)', {
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return index % 2 === 0 ? value : null;
          }
        }
      }],
      ['screen and (max-width: 380px)', {
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return index % 3 === 0 ? value : null;
          }
        }
      }]
    ],
    events: {
      draw(data: any): void {
        var circleRadius = 6;
        if (data.type === 'point') {
          var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            r: circleRadius,
            class: 'ct-point-circle'
          });
          data.element.replace(circle);
        }
        else if (data.type === 'label') {
          // adjust label position for rotation
          const dX = data.width / 2 + (30 - data.width)
          data.element.attr({ x: data.element.attr('x') - dX })
        }
      }
    },

  };



  constructor(private colorStore: ColorStore) {





    // tslint:disable-next-line:max-line-length
    let domain = ['Label1', 'Label2'];
    // tslint:disable-next-line:max-line-length
    Object.assign(this, { lineChartMulti, lineChartCollectionsMulti, barChartmulti, barChartCaseLoadmulti, areaChartPaidMulti, barChartStackedmulti, pieChartSingle, areaChartMulti })



  }




  ngOnInit() {
    this.currentSupportPaidbarChartGradientColors = this.colorStore.getGroupBarChartColors(this.currentSupportPaidBarChart);
    this.collectionsDuebarChartGradientColors = this.colorStore.getStackedBarChartColors(this.collectionsDuebaseChart);
    this.collectionsPaidbarChartGradientColors = this.colorStore.getStackedBarChartColors(this.collectionsPaidbaseChart);
    this.totalCaseLoadBarChartGradientColors = this.colorStore.getStateWiseCaseloadGroupBarChartColors(this.totalCaseLoadBarChart);
    this.collectionsTotalLineChartGradientColors = this.colorStore.getGroupLineChartColors(this.collectionsTotalLinebaseChart);


  }

  currentSupportPaidBarChartchartHovered(event) { }
  currentSupportPaidBarChartchartClicked(event) { }
  collectionsPaidbarChartHovered(event) { }
  collectionsPaidbarChartClicked(event) { }

  collectionsDuebarChartHovered(event) { }
  collectionsDuebarChartClicked(event) { }

  chartHovered(event) { }
  chartClicked(event) { }

  percentTickFormatting(value) {
    return value.toLocaleString() + '%';
  }



  // Line chart configuration Ends

}
