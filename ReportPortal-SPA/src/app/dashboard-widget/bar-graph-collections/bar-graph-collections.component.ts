


import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bar-graph-collections',
  templateUrl: './bar-graph-collections.component.html',
  styleUrls: ['./bar-graph-collections.component.scss']
})
export class BarGraphCollectionsComponent implements OnInit {
  constructor(private elementRef: ElementRef) {

  }
  ngOnInit() {
    setTimeout(() => {
      this.createBarSupportGraph();
    }, 500);
  }
  createBarSupportGraph() {
    // tslint:disable-next-line:no-unused-expression
    new Chart('dash-bar-graph-collections', {
      type: 'bar',
      data: {
        labels: ["2016", "2017", "2018", "2019"],
        datasets: [
          {
            backgroundColor: 'rgba(102, 187, 106, .7)',
            borderColor: 'rgba(102, 187, 106, .7)',
            data: [69.7, 85.8, 95.7, 56.3],

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
          text: 'Total Collections'
        }
      }
    });
  }
}
