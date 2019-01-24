import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'cdk-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.createLineChart();
    }, 500);
  }

  createLineChart() {
    // tslint:disable-next-line:no-unused-expression
    new Chart('line-graph', {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            backgroundColor: '#7986CB',
            borderColor: '#B1A7FF',
            data: [4282360, 4285052, 4546579, 4101487, 4474531, 4885548, 4429840, 4611256, 4467394, 4175881, 4736769, 4335721],
            label: '2016',
            fill: 'false'
          },
          {
            backgroundColor: '#42A5F5',
            borderColor: '#A7C1FF',
            data: [4223171, 4374696, 4292934, 4323582, 3960648, 5156190, 4204981, 4913913, 4357242, 4278333, 4352640, 4058404],
            label: '2017',
            fill: 'false'
          },
          {
            backgroundColor: '#26A69A',
            borderColor: '#A7F0FF',
            data: [4246588, 4051318, 4078958, 4349486, 3963736, 4675520, 4577583, 4646932, 4141479, 4315150, 4487952, 3822682],
            label: '2018',
            fill: 'false'
          },
          {
            backgroundColor: '#26C6DA',
            borderColor: '#A7DEFF',
            data: [4547230, 4182294],
            label: '2019',
            fill: 'false'
          },
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {

              fontStyle: "bold",
              beginAtZero: false,

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
          text: 'Total Collections '
        }
      }
    });
  }

}
