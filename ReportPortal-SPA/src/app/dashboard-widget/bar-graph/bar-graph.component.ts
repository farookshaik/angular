import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'cdk-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.createBarGraph();
    }, 500);
  }

  createBarGraph() {
    // tslint:disable-next-line:no-unused-expression
    new Chart('dash-bar-graph', {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            backgroundColor: 'rgba(92, 107, 192, .7)',
            borderColor: 'rgba(92, 107, 192, .7)',
            data: [63.7, 66.7, 65.4, 65.5, 66.8, 67.0, 65.4, 67.2, 65.5, 65.7, 66.7, 66.4],
            label: '2016',
            fill: 'false'
          },
          {
            backgroundColor: 'rgba(66, 165, 245, .7)',
            borderColor: 'rgba(69, 39, 160, .7)',
            data: [66.8, 67.8, 66.2, 68.6, 68.4, 66.5, 68.4, 66.8, 66.7, 67.6, 66.9, 64.9],
            label: '2017',
            fill: 'false'
          },
          {
            backgroundColor: 'rgba(38, 166, 154, .7)',
            borderColor: 'rgba(69, 39, 160, .7)',
            data: [67.7, 69.3, 65.9, 69.7, 68.6, 68.1, 69.5, 68.7, 68.4, 67.8, 67.2, 67.0],
            label: '2018',
            fill: 'false'
          },
          {
            backgroundColor: 'rgba(102, 187, 106, .7)',
            borderColor: 'rgba(255, 99, 132)',
            data: [70.3, 67.8],
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
          text: '% CURRENT SUPPORT PAID BY FFY'
        }
      }
    })
  }
}
