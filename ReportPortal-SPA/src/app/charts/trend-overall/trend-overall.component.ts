import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'trend-overall-graph',
  templateUrl: './trend-overall.component.html',
  styleUrls: ['./trend-overall.component.scss']
})
export class TrendOverAllGraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.createLineChart();
    }, 500);
  }

  createLineChart() {
    // tslint:disable-next-line:no-unused-expression
    new Chart('trend-overall-graph', {
      type: 'line',
      data: {
        labels: ["2017", "2018", "2019"],
        datasets: [
          {
            backgroundColor: '#42A5F5',
            borderColor: '#A7C1FF',
            data: [55, 65, 75],
            label: 'Arrears Paid',
            fill: 'false'
          },
          {
            backgroundColor: '#26A69A',
            borderColor: '#A7F0FF',
            data: [50, 45, 74],
            label: 'Arrears Due',
            fill: 'false'
          },
          {
            backgroundColor: '#7986CB',
            borderColor: '#B1A7FF',
            data: [38, 63, 86],
            label: 'CaseLoad',
            fill: 'true'
          },
          {
            backgroundColor: 'Green',
            borderColor: 'Green',
            data: [89, 93, 88],
            label: 'Current Collection',
            fill: 'true'
          },
          {
            backgroundColor: 'Red',
            borderColor: 'Red',
            data: [82, 76, 91],
            label: 'Total Collection',
            fill: 'true'
          },

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
        elements: {
          line: {
            tension: 0.000001
          }
        },
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
          text: 'Overall View - Trend'
        }
      }
    });
  }

}
