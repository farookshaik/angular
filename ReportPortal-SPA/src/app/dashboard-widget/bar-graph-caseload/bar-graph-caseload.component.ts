


import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bar-graph-caseload',
  templateUrl: './bar-graph-caseload.component.html',
  styleUrls: ['./bar-graph-caseload.component.scss']
})
export class BarGraphCaseLoadComponent implements OnInit {
  constructor(private elementRef: ElementRef) {

  }
  ngOnInit() {
    setTimeout(() => {
      this.createBarSupportGraph();
    }, 500);
  }
  createBarSupportGraph() {
    // tslint:disable-next-line:no-unused-expression
    new Chart('dash-bar-graph-caseload', {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [

          {
            backgroundColor: '#42A5F5',
            borderColor: '#A7C1FF',
            data: [11976, 11981, 11979, 11976, 11961, 11935, 11860, 11848, 11839, 12023, 12002, 11839],
            label: '2017',
            fill: 'false'
          },
          {
            backgroundColor: '#26A69A',
            borderColor: '#A7F0FF',
            data: [11563, 11575, 11591, 11594, 11544, 11530, 11508, 11443, 11401, 11370, 11628, 11703],
            label: '2018',
            fill: 'false'
          },
          {
            backgroundColor: '#26C6DA',
            borderColor: '#A7DEFF',
            data: [11346, 11288],
            label: '2019',
            fill: 'false'
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {

              fontStyle: "bold",
              beginAtZero: true,

            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: true,
              display: true
            }
          }]


        },
        legend: {
          display: true
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
          text: 'Total Caseload'
        }
      }
    });
  }
}
