


import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bar-graph-arrears',
  templateUrl: './bar-graph-arrears.component.html',
  styleUrls: ['./bar-graph-arrears.component.scss']
})
export class BarGraphArrearsComponent implements OnInit {
  constructor(private elementRef: ElementRef) {

  }
  ngOnInit() {
    setTimeout(() => {
      this.createBarSupportGraph();
    }, 500);
  }
  createBarSupportGraph() {
    // tslint:disable-next-line:no-unused-expression
    new Chart('dash-bar-graph-arrears', {
      type: 'bar',
      data: {
        labels: ["2016", "2017", "2018", "2019"],
        datasets: [
          {
            backgroundColor: 'rgba(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132)',
            data: [99.7, 35.9, 65.7, 46.0],

          },
          // {
          //   backgroundColor: 'rgba(66, 165, 245, .7)',
          //   borderColor: 'rgba(69, 39, 160, .7)',
          //   data: [66.8],
          //   label: '2017'
          // },
          // {
          //   backgroundColor: 'rgba(38, 166, 154, .7)',
          //   borderColor: 'rgba(69, 39, 160, .7)',
          //   data: [67.7],
          //   label: '2018'
          // },
          // {
          //   backgroundColor: 'rgba(102, 187, 106, .7)',
          //   borderColor: 'rgba(255, 99, 132)',
          //   data: [70.3],
          //   label: '2019'
          // }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              display: false //this will remove only the label
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
        },
        legend: {
          display: false
        },
        elements: {
          line: {
            tension: 0.000001
          }
        },
        maintainAspectRatio: false,
        plugins: {
          filler: {
            propagate: false
          }
        },
        title: {
          display: true,
          text: 'TOTAL ARREARS'
        }
      }
    });
  }
}
