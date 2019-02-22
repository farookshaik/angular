// barChart
export var barChartPaidDueOptions: any = {
  tooltips: {
    mode: 'index',
    intersect: true
  },
  animation: {
    duration: 1000, // general animation time
    easing: 'easeOutBack'
  },
  hover: {
    animationDuration: 1000, // duration of animations when hovering an item
    mode: 'label'
  },
  responsiveAnimationDuration: 1000, // animation duration after a resize
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: 'top',
  },
  scales: {
    xAxes: [{
      display: true,
      gridLines: {

        drawTicks: true,
      },
      scaleLabel: {
        display: true
      }
    }],
    yAxes: [{
      display: true,
      gridLines: {
        color: "#f3f3f3",
        drawTicks: true,
      },
      scaleLabel: {
        display: false,
        labelString: 'Value'
      }
    }]
  }
};
export var barChartPaidDueLabels: string[] = [
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep"
];
export var barChartPaidDueType = 'bar';
export var barChartPaidDueLegend = true;

export var barChartPaidDueData: any[] = [

  // tslint:disable-next-line:max-line-length
  {
    data: [3612519, 3612519, 3612519, 3612519, 3612519, 3612519, 3612519, 3612519, 3612519, 3612519, 3612519, 3612519], type: "line",
    fill: "false", label: 'State - Paid'
  },
  // tslint:disable-next-line:max-line-length
  { data: [5621838, 5404960, 5798472, 5121458, 4404060, 3798472, 2621838, 3798472, 5790072, 5001838, 5104160, 2798472], label: '2016 - Due', stack: 'Stack 0' },
  // tslint:disable-next-line:max-line-length
  { data: [5461382, 3607111, 3791222, 3331458, 2444460, 1755572, 2666138, 1755572, 2222072, 1001838, 1504160, 1898472], label: '2017 - Due', stack: 'Stack 0' },
  // tslint:disable-next-line:max-line-length
  { data: [5337658, 5404960, 5798472, 5121458, 4404060, 3798472, 2621838, 7404960, 5790072, 5001838, 5104160, 2798472], stack: 'Stack 0', label: '2018 - Due' },
  // tslint:disable-next-line:max-line-length
  { data: [null, null, null, 5121458, 4404060], stack: 'Stack 0', label: '2019 - Due' }



];


export var barChartPaidDueColors: Array<any> = [
  { // teal

    borderColor: '#78cc37',
    pointBackgroundColor: '#78cc37',
    pointRadius: 0,
    lineTension: 0,
    backgroundColor: 'transparent',
    pointStyle: 'rectRounded',

    pointHoverBorderColor: '#78cc37',
    borderDash: [5, 5]
  },


  {

    backgroundColor: 'rgb(0, 157, 160)',
    borderColor: 'rgb(0, 157, 160)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: 'rgb(255, 141, 96)',
    borderColor: 'rgb(255, 141, 96)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: 'rgb(255, 88, 107)',
    borderColor: 'rgb(255, 88, 107)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: '#843cf7',
    borderColor: '#843cf7',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: 'rgb(0, 157, 160)',
    borderColor: 'rgb(0, 157, 160)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: 'rgb(255, 141, 96)',
    borderColor: 'rgb(255, 141, 96)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: 'rgb(255, 88, 107)',
    borderColor: 'rgb(255, 88, 107)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: '#843cf7',
    borderColor: '#843cf7',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }



];




// barChart
export var barChartCaseLoadOptions: any = {
  tooltips: {
    mode: 'index',
    intersect: true
  },
  animation: {
    duration: 1000, // general animation time
    easing: 'easeOutBack'
  },
  hover: {
    animationDuration: 1000, // duration of animations when hovering an item
  },
  scales: {
    yAxes: [{

      barPercentage: 0.5,
      ticks: {
        beginAtZero: true,
        callback: function (label, index, labels) {
          return label / 1000 + 'K';
        }

      }, gridLines: {
        drawTicks: true,
        display: true,
        zeroLineColor: "transparent"
      }
    }],
    xAxes: [{
      gridLines: {
        zeroLineColor: "transparent"
      }
    }]
  },
  elements: {
    rectangle: {
      borderSkipped: 'right',
    }
  },
  scaleShowVerticalLines: false,
  responsive: true,
  maintainAspectRatio: false

};
export var barChartCaseLoadLabels: string[] = [
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep"
];
export var barChartCaseLoadType = 'bar';
export var barChartCaseLoadLegend = true;

export var barChartCaseLoadData: any[] = [
  { data: [10563, 11515, 11191, 11294, 11044, 10530, 10508, 11243, 12401, 11370, 11628, 11703], label: '2016' },
  { data: [11976, 11981, 11979, 11976, 11961, 11935, 11860, 11848, 11839, 12023, 12002, 11839], label: '2017' },
  { data: [11563, 11575, 11591, 11594, 11544, 11530, 11508, 11443, 11001, 11070, 11628, 11713], label: '2018' },
  { data: [null, null, null, 11346, 11288], label: '2019' }
];


export var barChartCaseLoadColors: Array<any> = [
  {

    backgroundColor: 'rgb(0, 157, 160)',
    borderColor: 'rgb(0, 157, 160)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: 'rgb(255, 141, 96)',
    borderColor: 'rgb(255, 141, 96)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: 'rgb(255, 88, 107)',
    borderColor: 'rgb(255, 88, 107)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: '#843cf7',
    borderColor: '#843cf7',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {
    borderDash: [5, 5],
    type: 'line', fill: 'false',
    borderColor: '#78cc37',
    pointRadius: 0,
    lineTension: 0,
    backgroundColor: 'transparent',
    pointStyle: 'rectRounded'
  }
];



export var widgetlineChartData: Array<any> = [
  { data: [65, 23, 45, 56, 55, 45, 22, 89, 58, 74, 55, 22], label: 'County' },
  { data: [89, 55, 85, 23, 70, 65, 55, 65, 74, 59, 56, 33], label: 'State' }
];

export var widgetlineChartOptions: any = {
  tooltips: {
    mode: 'index',
    intersect: true
  },
  animation: {
    duration: 1000, // general animation time
    easing: 'easeOutBack'
  },
  hover: {
    animationDuration: 1000, // duration of animations when hovering an item
    mode: 'index'
  },
  responsiveAnimationDuration: 1000, // animation duration after a resize
  responsive: true,
  maintainAspectRatio: false,

  scales: {
    xAxes: [{
      gridLines: {
        display: false,
      },
      scaleLabel: {
        display: false

      },
      ticks: {
        display: true,
        fontColor: 'white'
      },
    }],
    yAxes: [{
      ticks: {
        beginAtZero: false,
        fontColor: 'white'
      },
      scaleLabel: {
        display: false
      },
      gridLines: {
        display: false,
      }
    }]
  }
};



export var lineChartData: Array<any> = [
  { data: [4282360, 4285052, 4546579, 4101487, 4474531, 4885548, 4429840, 4611256, 4467394, 4175881, 4736769, 4335721], label: '2016' },
  { data: [4223171, 4374696, 4292934, 4323582, 3960648, 5156190, 4204981, 4913913, 4357242, 4278333, 4352640, 4058404], label: '2017' },
  { data: [4246588, 4051318, 4078958, 4349486, 3963736, 4675520, 4577583, 4646932, 4141479, 4315150, 4487952, 3822682], label: '2018' },
  { data: [null, null, null, 3949486, 4163736], label: '2019' }

];

export var lineChartLabels: Array<any> = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
export var lineChartOptions: any = {
  tooltips: {
    mode: 'index',
    intersect: true
  },
  animation: {
    duration: 1000, // general animation time
    easing: 'easeOutBack'
  },
  hover: {
    animationDuration: 1000, // duration of animations when hovering an item
    mode: 'label'
  },
  responsiveAnimationDuration: 1000, // animation duration after a resize
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: 'top',
  },
  scales: {
    xAxes: [{
      display: true,
      gridLines: {

        drawTicks: true,
      },
      scaleLabel: {
        display: true
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        callback: function (label, index, labels) {
          return label / 1000000 + 'M';
        }
      },
      display: true,
      gridLines: {
        color: "#f3f3f3",
        drawTicks: true,
      },
      scaleLabel: {
        display: false,
        labelString: 'Value'
      }
    }]
  }
};
export var lineChartColors: Array<any> = [
  // {
  //   fill: false,
  //   borderDash: [5, 5],
  //   borderColor: "#B71C1C",
  //   pointBorderColor: "#B71C1C",
  //   pointBackgroundColor: "#B71C1C",
  //   pointBorderWidth: 2,
  //   pointHoverBorderWidth: 2,
  //   pointRadius: 0,
  //   lineTension: 0,
  //   backgroundColor: 'transparent',
  //   pointStyle: 'rectRounded',
  // },
  {
    fill: false,
    borderColor: "rgba(56, 184, 242, 1)",
    pointBorderColor: "rgba(56, 184, 242, 1)",
    pointBackgroundColor: "rgba(56, 184, 242, 1)",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    backgroundColor: "rgba(56, 184, 242, 1)",

  },
  {

    fill: false,
    borderColor: "rgba(255, 106, 0, 1)",
    pointBorderColor: "rgba(255, 106, 0, 1)",
    pointBackgroundColor: "rgba(255, 106, 0, 1)",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    backgroundColor: "rgba(255, 106, 0, 1)",
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "rgba(120, 204, 55, 1)",
    pointBorderColor: "rgba(120, 204, 55, 1)",
    pointBackgroundColor: "rgba(120, 204, 55, 1)",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    backgroundColor: "rgba(120, 204, 55, 1)",
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "rgba(255, 57, 111, 1)",
    pointBorderColor: "rgba(255, 57, 111, 1)",
    pointBackgroundColor: "rgba(255, 57, 111, 1)",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    backgroundColor: "rgba(255, 57, 111, 1)",
  }

];
export var lineChartLegend = true;
export var lineChartType = 'line';



export var lineChartAvgData: Array<any> = [
  { data: [331, 430, 351, 411, 365, 361, 367, 343, 351, 364, 357, 361], label: '2016' },
  { data: [342, 404, 405, 397, 404, 377, 394, 336, 363, 348, 352, 376], label: '2017' },
  { data: [312, 401, 305, 397, 356, 377, 324, 310, 356, 328, 312, 319], label: '2018' },
  { data: [null, null, null, 398, 412], label: '2019' }

];

export var lineChartAvgLabels: Array<any> = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
export var lineChartAvgOptions: any = {
  tooltips: {
    mode: 'index',
    intersect: true
  },
  animation: {
    duration: 1000, // general animation time
    easing: 'easeOutBack'
  },
  hover: {
    animationDuration: 1000, // duration of animations when hovering an item
    mode: 'label'
  },
  responsiveAnimationDuration: 1000, // animation duration after a resize
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: 'top',
  },
  scales: {
    xAxes: [{
      display: true,
      gridLines: {

        drawTicks: true,
      },
      scaleLabel: {
        display: true
      }
    }],
    yAxes: [{
      ticks: {

        beginAtZero: true
      },
      display: true,
      gridLines: {
        color: "#f3f3f3",
        drawTicks: true,
      },
      scaleLabel: {
        display: false,
        labelString: 'Value'
      }
    }]
  }

};
export var lineChartAvgColors: Array<any> = [
  // {
  //   fill: false,
  //   borderDash: [5, 5],
  //   borderColor: "#B71C1C",
  //   pointBorderColor: "#B71C1C",
  //   pointBackgroundColor: "#B71C1C",
  //   pointBorderWidth: 2,
  //   pointHoverBorderWidth: 2,
  //   pointRadius: 0,
  //   lineTension: 0,
  //   backgroundColor: 'transparent',
  //   pointStyle: 'rectRounded',
  // },
  {
    fill: false,
    borderColor: "rgba(56, 184, 242, 1)",
    pointBorderColor: "rgba(56, 184, 242, 1)",
    pointBackgroundColor: "rgba(56, 184, 242, 1)",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    backgroundColor: "rgba(56, 184, 242, 1)",

  },
  {

    fill: false,
    borderColor: "rgba(255, 106, 0, 1)",
    pointBorderColor: "rgba(255, 106, 0, 1)",
    pointBackgroundColor: "rgba(255, 106, 0, 1)",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    backgroundColor: "rgba(255, 106, 0, 1)",
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "rgba(120, 204, 55, 1)",
    pointBorderColor: "rgba(120, 204, 55, 1)",
    pointBackgroundColor: "rgba(120, 204, 55, 1)",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    backgroundColor: "rgba(120, 204, 55, 1)",
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "rgba(255, 57, 111, 1)",
    pointBorderColor: "rgba(255, 57, 111, 1)",
    pointBackgroundColor: "rgba(255, 57, 111, 1)",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    backgroundColor: "rgba(255, 57, 111, 1)",
  }

];
export var lineChartAvgLegend = true;
export var lineChartAvgType = 'line';




export var currentSupportPaidbarChartOptions: any = {
  tooltips: {
    mode: 'label'
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: false,
        labelString: 'Month',
      },

      barPercentage: 0.9,
      categoryPercentage: 0.6,
      // ticks: {
      //   callback: function (label) {
      //     var month = label.split(";")[0];
      //     var year = label.split(";")[1];
      //     return year;
      //   }
      // }
    }

    ]
  },
  scaleShowVerticalLines: false,
  responsive: true,
  maintainAspectRatio: false

};
export var currentSupportPaidbarChartLabels: string[] = [
  'Previous FFY Quarter',
  'Previous FFY Quarter',
  'Previous FFY Quarter',
  'Current FFY Quarter',
];
export var currentSupportPaidbarChartType = 'bar';
export var currentSupportPaidbarChartLegend = true;

export var currentSupportPaidbarChartData: any[] = [
  { data: [66.7, 66.7, 65.4, 55.8], label: 'Current Assistance (CA)' },
  { data: [66.8, 67.8, 66.2, 52.8], label: 'Former  Assistance (FA)' },
  { data: [67.7, 69.3, 65.9, 61.8], label: 'Never Assistance (NA)' }


];


export var currentSupportPaidbarChartColors: Array<any> = [
  {
    backgroundColor: '#38b8f2',
    borderColor: '#38b8f2',
    pointBackgroundColor: '#843cf7',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#843cf7'
  },
  {

    backgroundColor: '#ff6a00',
    borderColor: '#ff6a00',
    pointBackgroundColor: '#ee0979',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#ee0979'
  },
  {

    backgroundColor: '#78cc37',
    borderColor: '#78cc37',
    pointBackgroundColor: '#004b91',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#004b91'
  },
  {

    backgroundColor: '#FF396f',
    borderColor: '#FF396f',
    pointBackgroundColor: '#9B3cb7',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#9B3cb7'
  },
  {
    borderDash: [5, 5],
    type: 'line', fill: 'false',
    borderColor: '#78cc37',
    lineTension: 0,
    backgroundColor: 'transparent',
    pointStyle: 'rectRounded',
    pointRadius: 0,
  }
];




// collectionsDuebarChart
export var collectionsDuebarChartOptions: any = {
  animation: {
    easing: 'easeInOutQuad',
    duration: 520
  },

  scales: {
    yAxes: [{
      display: true,
      ticks: {
        beginAtZero: false,
        callback: function (label, index, labels) {
          return label / 1000000 + 'M';
        },
        stepSize: 5000000
      },
      stacked: true,

      gridLines: {
        color: "#f3f3f3",
        drawTicks: true,
      },
    }],
    xAxes: [{
      stacked: true,
      beginAtZero: false
    }]
  },
  tooltips: {
    mode: 'index',
    intersect: false
  },
  hover: {
    mode: 'nearest',
    intersect: true
  },
  scaleShowVerticalLines: false,
  responsive: true,
  maintainAspectRatio: false

};
export var collectionsDuebarChartLabels: string[] = [
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep"
];
export var collectionsDuebarChartType = 'bar';
export var collectionsDuebarChartLegend = true;

export var collectionsDuebarChartData: any[] = [

  // tslint:disable-next-line:max-line-length
  { data: [5621838, 5404960, 5798472, 5121458, 4404060, 3798472, 2621838, 3798472, 5790072, 5001838, 5104160, 2798472], label: 'Current Assistance (CA)' },
  // tslint:disable-next-line:max-line-length
  { data: [5461382, 3607111, 3791222, 3331458, 2444460, 1755572, 2666138, 1755572, 2222072, 1001838, 1504160, 1898472], label: 'Former Assistance (FA)' },
  // tslint:disable-next-line:max-line-length
  { data: [5337658, 5404960, 5798472, 5121458, 4404060, 3798472, 2621838, 7404960, 5790072, 5001838, 5104160, 2798472], label: 'Never Assistance (NA)' },

];


export var collectionsDuebarChartColors: Array<any> = [
  {
    borderColor: '#78cc37',
    pointBackgroundColor: '#78cc37',
    pointRadius: 0,
    lineTension: 0,
    backgroundColor: 'transparent',
    pointStyle: 'rectRounded',
    pointHoverBorderColor: '#78cc37',
    borderDash: [5, 5]
  },
  {

    backgroundColor: 'rgb(0, 157, 160)',
    borderColor: 'rgb(0, 157, 160)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: 'rgb(255, 141, 96)',
    borderColor: 'rgb(255, 141, 96)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: 'rgb(255, 88, 107)',
    borderColor: 'rgb(255, 88, 107)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: '#843cf7',
    borderColor: '#843cf7',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }

];
// collectionsDuebarChart


// collectionsPaidbarChart
export var collectionsPaidbarChartOptions: any = {
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    yAxes: [{

      stacked: true,
      ticks: {
        beginAtZero: false,
        callback: function (label, index, labels) {
          return label / 1000000 + 'M';
        },
        stepSize: 5000000
      },
      gridLines: {
        color: "#f3f3f3",
        drawTicks: true,
      },
    }],
    xAxes: [{
      stacked: true,
    }]
  },
  tooltips: {
    mode: 'index',
    intersect: false
  },
  scaleShowVerticalLines: false,
  responsive: true,
  maintainAspectRatio: false

};
export var collectionsPaidbarChartLabels: string[] = [
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep"
];
export var collectionsPaidbarChartType = 'bar';
export var collectionsPaidbarChartLegend = true;

export var collectionsPaidbarChartData: any[] = [

  // tslint:disable-next-line:max-line-length
  { data: [3579018, 3607481, 3791399, 3121458, 2403560, 5698472, 2000138, 3102960, 5192072, 3901838, 4504160, 1298472], label: 'Current Assistance (CA)' },
  // tslint:disable-next-line:max-line-length
  { data: [3648905, 3607111, 3341222, 3121658, 2894460, 5565572, 2006138, 3744960, 2200072, 5001838, 1104160, 7898472], label: 'Former Assistance (FA)' },
  // tslint:disable-next-line:max-line-length
  { data: [3612519, 3607111, 3791222, 3331458, 2444460, 5565572, 2666138, 3777960, 2222072, 1001838, 1504160, 1898472], label: 'Never Assistance (NA)' },

];


export var collectionsPaidbarChartColors: Array<any> = [
  {
    borderColor: '#78cc37',
    pointBackgroundColor: '#78cc37',
    pointRadius: 0,
    lineTension: 0,
    backgroundColor: 'transparent',
    pointStyle: 'rectRounded',
    pointHoverBorderColor: '#78cc37',
    borderDash: [5, 5]
  },
  {

    backgroundColor: 'rgb(0, 157, 160)',
    borderColor: 'rgb(0, 157, 160)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: 'rgb(255, 141, 96)',
    borderColor: 'rgb(255, 141, 96)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: 'rgb(255, 88, 107)',
    borderColor: 'rgb(255, 88, 107)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: '#843cf7',
    borderColor: '#843cf7',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }

];
// collectionsDuebarChart
