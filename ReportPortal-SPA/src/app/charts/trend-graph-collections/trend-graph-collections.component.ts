


import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'trend-graph-collections',
  templateUrl: './trend-graph-collections.component.html',
  styleUrls: ['./trend-graph-collections.component.scss']
})
export class TrendGraphCollectionsComponent implements OnInit {
  constructor() {

  }
  ngOnInit() {
    setTimeout(() => {
      this.createBarSupportGraph();
    }, 500);
  }
  createBarSupportGraph() {

    // tslint:disable-next-line:no-unused-expression
    new Chart('trend-graph-collections', {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            fill: false,
            backgroundColor: 'rgba(180, 99, 132, 0.6)',
            borderColor: 'rgba(180, 99, 132, 0.6)',
            hoverBackgroundColor: 'rgba(180, 99, 132, 0.6)',
            hoverBorderColor: 'rgba(180, 99, 132, 0.6)',
            data: [4246580, 8297898, 12376342, 16726342, 20690079, 25365598, 29943181, 34590113, 38735592, 43050742, 47538695, 51361377],
            label: '2018'
          },
          {
            type: 'line',
            fill: false,
            lineTension: 0,
            borderColor: 'orange',
            backgroundColor: 'transparent',
            borderDash: [5, 5],
            pointBorderColor: 'orange',
            pointBackgroundColor: 'rgba(255,150,0,0.5)',
            pointRadius: 5,
            pointHoverRadius: 10,
            pointHitRadius: 30,
            pointBorderWidth: 2,
            pointStyle: 'rectRounded',
            data: [4547230, 8729524],
            label: '2019',

          },

        ]
      },
      options: {
        scales: {
          yAxes: [{
            type: "linear",
            ticks: {
              callback: function (label, index, labels) {
                return label / 1000 + 'k';
              },


            },
            scaleLabel: {
              display: true,
              labelString: '1k = 1000'
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
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
            propagate: true
          }
        },
        title: {
          display: true,
          text: 'Total Collection 2019 - Goal'
        }
      }

    });
  }
}
