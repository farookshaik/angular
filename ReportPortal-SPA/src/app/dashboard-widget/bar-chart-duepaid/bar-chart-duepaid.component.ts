import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const Chart;
@Component({
  selector: 'app-bar-chart-duepaid',
  templateUrl: './bar-chart-duepaid.component.html',
  styleUrls: ['./bar-chart-duepaid.component.scss']
})
export class BarChartDuePaidComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.createChart();
    }, 400);
  }
  createChart() {
    // tslint:disable-next-line:no-unused-expression
    new Chart('chart-0', {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [

          {
            backgroundColor: '#7986CB',
            borderColor: '#B1A7FF',
            data: [5621838, 5404960, 5798472, 5121458, 4404060, 3798472, 2621838, 7404960, 5790072, 5001838, 5104160, 2798472],
            stack: 1,
            label: '2016 - Due'
          },
          {
            backgroundColor: '#B1A7FF',
            borderColor: '#7986CB',
            data: [3579018, 3607481, 3791399, 3121458, 2403560, 1798472, 2000138, 7102960, 5192072, 3901838, 4504160, 1298472],
            stack: 1,
            label: '2016 - Paid'
          },
          {
            backgroundColor: '#42A5F5',
            borderColor: '#A7C1FF',
            data: [5461382, 3607111, 3791222, 3331458, 2444460, 1755572, 2666138, 7777960, 2222072, 1001838, 1504160, 1898472],
            stack: 2,
            label: '2017 - Due'
          },
          {
            backgroundColor: '#A7C1FF',
            borderColor: '#42A5F5',
            data: [3648905, 1607111, 3341222, 3121658, 2894460, 1565572, 2006138, 7744960, 2200072, 5001838, 1104160, 7898472],
            stack: 2,
            label: '2017 - Paid'
          },
          {
            backgroundColor: '#26A69A',
            borderColor: '#A7F0FF',
            data: [5337658, 5404960, 5798472, 5121458, 4404060, 3798472, 2621838, 7404960, 5790072, 5001838, 5104160, 2798472],
            stack: 3,
            label: '2018 - Due'
          },
          {
            backgroundColor: '#A7F0FF',
            borderColor: '#26A69A',
            data: [3612519, 3607111, 3791222, 3331458, 2444460, 1755572, 2666138, 7777960, 2222072, 1001838, 1504160, 1898472],
            stack: 3,
            label: '2018 - Paid'
          },
          {
            backgroundColor: '#26C6DA',
            borderColor: '#A7DEFF',
            data: [5337658],
            stack: 4,
            label: '2019 - Due'
          },
          {
            backgroundColor: '#A7DEFF',
            borderColor: '#26C6DA',
            data: [3612519],
            stack: 4,
            label: '2019 - Paid'
          },

          // {
          //   backgroundColor: 'rgba(66, 165, 245,.7)',
          //   borderColor: 'rgba(66, 165, 245,.7)',
          //   type: "bar",
          //   stack: "Due",
          //   data: [5621838, 3579018],
          //   label: '2016'
          // },
          // {
          //   backgroundColor: 'rgba(255, 0, 0, 0.5)',
          //   borderColor: 'rgba(255, 99, 132)',
          //   data: [5461382, 3648905],
          //   type: "bar",
          //   stack: "Paid",
          //   label: '2017'
          // }
        ]
      },
      options: {
        scales: {
          xAxes: [{ stacked: true }]

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
          text: 'FFY - Due & Paid'
        }
      }
    });
  }
}
