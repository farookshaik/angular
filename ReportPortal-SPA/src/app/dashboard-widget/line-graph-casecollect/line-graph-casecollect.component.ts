import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cdk-line-casecollect-graph',
  templateUrl: './line-graph-casecollect.component.html',
  styleUrls: ['./line-graph-casecollect.component.scss']
})
export class LineCaseCollectGraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.createLineChart();
    }, 500);
  }

  createLineChart() {
    // tslint:disable-next-line:no-unused-expression
    new Chart('line-casecollect-graph', {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            backgroundColor: '#42A5F5',
            borderColor: '#A7C1FF',
            data: [331, 430, 351, 411, 365, 361, 367, 343, 351, 364, 357, 361],
            label: '2017',
            fill: 'false'
          },
          {
            backgroundColor: '#26A69A',
            borderColor: '#A7F0FF',
            data: [342, 404, 405, 397, 404, 377, 394, 336, 363, 348, 352, 376],
            label: '2018',
            fill: 'false'
          },
          {
            backgroundColor: '#7986CB',
            borderColor: '#B1A7FF',
            data: [401, 371],
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
        // elements: {
        //   line: {
        //     tension: 0.000001
        //   }
        // },
        legend: {
          display: true
        },
        maintainAspectRatio: false,
        plugins: {
          filler: {
            propagate: false
          }
        },
        title: {
          display: true,
          text: 'Per Case Collect. Monthly'
        }
      }
    });
  }

}
