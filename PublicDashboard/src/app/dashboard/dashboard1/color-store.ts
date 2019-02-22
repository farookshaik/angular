

export class ColorStore {
  colorGroupBarChartModel: any = [];
  colorStackedBarChartModel: any = [];
  colorGroupedLineChartModel: any = [];
  colorStateWideGroupBarChartModel: any = [];

  getGroupBarChartColors(htmlElement: any) {
    const gradient_2016 = htmlElement.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient_2016.addColorStop(0, 'rgba(132, 60, 247,1)');
    gradient_2016.addColorStop(1, 'rgba(56, 184, 242, 1)');

    const gradient_2017 = htmlElement.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient_2017.addColorStop(0, 'rgba(238, 9, 121,1)');
    gradient_2017.addColorStop(1, 'rgba(255, 106, 0, 1)');

    const gradient_2018 = htmlElement.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient_2018.addColorStop(0, 'rgba(0, 75, 145,1)');
    gradient_2018.addColorStop(1, 'rgba(120, 204, 55, 1)');

    const gradient_2019 = htmlElement.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient_2019.addColorStop(0, 'rgba(155, 60, 183,1)');
    gradient_2019.addColorStop(1, 'rgba(255, 57, 111, 1)');

    this.colorGroupBarChartModel = [
      // {
      //   borderDash: [4, 4],
      //   type: 'line', fill: 'false',
      //   borderColor: '#B71C1C',
      //   lineTension: 1,
      //   backgroundColor: 'transparent',
      //   pointStyle: 'rectRounded',
      //   pointRadius: 0,
      //   pointBorderColor: 'transparent',
      //   pointBackgroundColor: 'transparent',
      //   pointBorderWidth: 0,
      //   pointHoverBorderWidth: 0

      // },
      {
        backgroundColor: 'rgba(56, 184, 242, 1)',
        hoverBackgroundColor: 'rgba(56, 184, 242, 1)',
        borderColor: 'rgba(56, 184, 242, 1)',
        pointBackgroundColor: 'rgba(56, 184, 242, 1)',
        pointBorderColor: 'rgba(56, 184, 242, 1)',
        pointHoverBackgroundColor: 'rgba(56, 184, 242, 1)',
        pointHoverBorderColor: 'rgba(56, 184, 242, 1)',
      },

      {
        backgroundColor: 'rgba(255, 106, 0, 1)',
        hoverBackgroundColor: 'rgba(255, 106, 0, 1)',
        borderColor: 'rgba(255, 106, 0, 1)',
        pointBackgroundColor: 'rgba(255, 106, 0, 1)',
        pointBorderColor: 'rgba(255, 106, 0, 1)',
        pointHoverBackgroundColor: 'rgba(255, 106, 0, 1)',
        pointHoverBorderColor: 'rgba(255, 106, 0, 1)',
      },
      {
        backgroundColor: 'rgba(120, 204, 55, 1)',
        hoverBackgroundColor: 'rgba(120, 204, 55, 1)',
        borderColor: 'rgba(120, 204, 55, 1)',
        pointBackgroundColor: 'rgba(120, 204, 55, 1)',
        pointBorderColor: 'rgba(120, 204, 55, 1)',
        pointHoverBackgroundColor: 'rgba(120, 204, 55, 1)',
        pointHoverBorderColor: 'rgba(120, 204, 55, 1)',
      },
      {
        backgroundColor: 'rgba(255, 57, 111, 1)',
        hoverBackgroundColor: 'rgba(255, 57, 111, 1)',
        borderColor: 'rgba(255, 57, 111, 1)',
        pointBackgroundColor: 'rgba(255, 57, 111, 1)',
        pointBorderColor: 'rgba(255, 57, 111, 1)',
        pointHoverBackgroundColor: 'rgba(255, 57, 111, 1)',
        pointHoverBorderColor: 'rgba(255, 57, 111, 1)',
      }
    ];
    return this.colorGroupBarChartModel
  }


  getStateWiseCaseloadGroupBarChartColors(htmlElement: any) {
    const gradient_2016 = htmlElement.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient_2016.addColorStop(0, 'rgba(132, 60, 247,1)');
    gradient_2016.addColorStop(1, 'rgba(56, 184, 242, 1)');

    const gradient_2017 = htmlElement.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient_2017.addColorStop(0, 'rgba(238, 9, 121,1)');
    gradient_2017.addColorStop(1, 'rgba(255, 106, 0, 1)');

    const gradient_2018 = htmlElement.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient_2018.addColorStop(0, 'rgba(0, 75, 145,1)');
    gradient_2018.addColorStop(1, 'rgba(120, 204, 55, 1)');

    const gradient_2019 = htmlElement.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient_2019.addColorStop(0, 'rgba(155, 60, 183,1)');
    gradient_2019.addColorStop(1, 'rgba(255, 57, 111, 1)');

    this.colorStateWideGroupBarChartModel = [
      {
        backgroundColor: 'rgba(56, 184, 242, 1)',
        hoverBackgroundColor: 'rgba(56, 184, 242, 1)',
        borderColor: 'rgba(56, 184, 242, 1)',
        pointBackgroundColor: 'rgba(56, 184, 242, 1)',
        pointBorderColor: 'rgba(56, 184, 242, 1)',
        pointHoverBackgroundColor: 'rgba(56, 184, 242, 1)',
        pointHoverBorderColor: 'rgba(56, 184, 242, 1)',
      },
      {
        backgroundColor: 'rgba(255, 106, 0, 1)',
        hoverBackgroundColor: 'rgba(255, 106, 0, 1)',
        borderColor: 'rgba(255, 106, 0, 1)',
        pointBackgroundColor: 'rgba(255, 106, 0, 1)',
        pointBorderColor: 'rgba(255, 106, 0, 1)',
        pointHoverBackgroundColor: 'rgba(255, 106, 0, 1)',
        pointHoverBorderColor: 'rgba(255, 106, 0, 1)',
      },
      {
        backgroundColor: 'rgba(120, 204, 55, 1)',
        hoverBackgroundColor: 'rgba(120, 204, 55, 1)',
        borderColor: 'rgba(120, 204, 55, 1)',
        pointBackgroundColor: 'rgba(120, 204, 55, 1)',
        pointBorderColor: 'rgba(120, 204, 55, 1)',
        pointHoverBackgroundColor: 'rgba(120, 204, 55, 1)',
        pointHoverBorderColor: 'rgba(120, 204, 55, 1)',
      },
      {
        backgroundColor: 'rgba(255, 57, 111, 1)',
        hoverBackgroundColor: 'rgba(255, 57, 111, 1)',
        borderColor: 'rgba(255, 57, 111, 1)',
        pointBackgroundColor: 'rgba(255, 57, 111, 1)',
        pointBorderColor: 'rgba(255, 57, 111, 1)',
        pointHoverBackgroundColor: 'rgba(255, 57, 111, 1)',
        pointHoverBorderColor: 'rgba(255, 57, 111, 1)',
      }
    ];
    return this.colorStateWideGroupBarChartModel
  }


  getStackedBarChartColors(htmlElement: any) {
    const gradient_2016 = htmlElement.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradient_2016.addColorStop(0, 'rgba(132, 60, 247,1)');
    gradient_2016.addColorStop(1, 'rgba(56, 184, 242, 1)');

    const gradient_2017 = htmlElement.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient_2017.addColorStop(0, 'rgba(238, 9, 121,1)');
    gradient_2017.addColorStop(1, 'rgba(255, 106, 0, 1)');

    const gradient_2018 = htmlElement.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient_2018.addColorStop(0, 'rgba(0, 75, 145,1)');
    gradient_2018.addColorStop(1, 'rgba(120, 204, 55, 1)');

    const gradient_2019 = htmlElement.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient_2019.addColorStop(0, 'rgba(155, 60, 183,1)');
    gradient_2019.addColorStop(1, 'rgba(255, 57, 111, 1)');

    this.colorStackedBarChartModel = [
      // {
      //   borderDash: [4, 4],
      //   type: 'line', fill: 'false',
      //   borderColor: '#B71C1C',
      //   lineTension: 1,
      //   backgroundColor: 'transparent',
      //   pointStyle: 'rectRounded',
      //   pointRadius: 0,
      //   pointBorderColor: 'transparent',
      //   pointBackgroundColor: 'transparent',
      //   pointBorderWidth: 0,
      //   pointHoverBorderWidth: 0



      //   lineTension: 0.1,
      //   backgroundColor: 'rgba(75,192,192,0.4)',
      //   borderColor: 'rgba(75,192,192,1)',
      //   borderCapStyle: 'butt',
      //   borderDash: [],
      //   borderDashOffset: 0.0,
      //   borderJoinStyle: 'miter',
      //   pointBorderColor: 'rgba(75,192,192,1)',
      //   pointBackgroundColor: '#fff',
      //   pointBorderWidth: 1,
      //   pointHoverRadius: 5,
      //   pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      //   pointHoverBorderColor: 'rgba(220,220,220,1)',
      //   pointHoverBorderWidth: 2,
      //   pointRadius: 1,
      //   pointHitRadius: 10,

      // },
      {
        backgroundColor: 'rgba(56, 184, 242, 1)',
        hoverBackgroundColor: 'rgba(56, 184, 242, 1)',
        borderColor: 'rgba(56, 184, 242, 1)',
        pointBackgroundColor: 'rgba(56, 184, 242, 1)',
        pointBorderColor: 'rgba(56, 184, 242, 1)',
        pointHoverBackgroundColor: 'rgba(56, 184, 242, 1)',
        pointHoverBorderColor: 'rgba(56, 184, 242, 1)',
      },

      {
        backgroundColor: 'rgba(255, 106, 0, 1)',
        hoverBackgroundColor: 'rgba(255, 106, 0, 1)',
        borderColor: 'rgba(255, 106, 0, 1)',
        pointBackgroundColor: 'rgba(255, 106, 0, 1)',
        pointBorderColor: 'rgba(255, 106, 0, 1)',
        pointHoverBackgroundColor: 'rgba(255, 106, 0, 1)',
        pointHoverBorderColor: 'rgba(255, 106, 0, 1)',
      },
      {
        backgroundColor: 'rgba(120, 204, 55, 1)',
        hoverBackgroundColor: 'rgba(120, 204, 55, 1)',
        borderColor: 'rgba(120, 204, 55, 1)',
        pointBackgroundColor: 'rgba(120, 204, 55, 1)',
        pointBorderColor: 'rgba(120, 204, 55, 1)',
        pointHoverBackgroundColor: 'rgba(120, 204, 55, 1)',
        pointHoverBorderColor: 'rgba(120, 204, 55, 1)',
      }
      // ,
      // {
      //   backgroundColor: 'rgba(255, 57, 111, 1)',
      //   hoverBackgroundColor: 'rgba(255, 57, 111, 1)',
      //   borderColor: 'rgba(255, 57, 111, 1)',
      //   pointBackgroundColor: 'rgba(255, 57, 111, 1)',
      //   pointBorderColor: 'rgba(255, 57, 111, 1)',
      //   pointHoverBackgroundColor: 'rgba(255, 57, 111, 1)',
      //   pointHoverBorderColor: 'rgba(255, 57, 111, 1)',
      // }
    ];
    return this.colorStackedBarChartModel
  }

  getGroupLineChartColors(htmlElement: any) {
    const gradient_2016 = htmlElement.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradient_2016.addColorStop(0, 'rgba(132, 60, 247,1)');
    gradient_2016.addColorStop(1, 'rgba(56, 184, 242, 1)');

    const gradient_2017 = htmlElement.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient_2017.addColorStop(0, 'rgba(238, 9, 121,1)');
    gradient_2017.addColorStop(1, 'rgba(255, 106, 0, 1)');

    const gradient_2018 = htmlElement.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient_2018.addColorStop(0, 'rgba(0, 75, 145,1)');
    gradient_2018.addColorStop(1, 'rgba(120, 204, 55, 1)');

    const gradient_2019 = htmlElement.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient_2019.addColorStop(0, 'rgba(155, 60, 183,1)');
    gradient_2019.addColorStop(1, 'rgba(255, 57, 111, 1)');

    this.colorGroupedLineChartModel = [
      {
        fill: false,
        borderDash: [5, 0],
        borderColor: 'rgba(56, 184, 242, 1)',
        pointBorderColor: 'rgba(56, 184, 242, 1)',
        pointBackgroundColor: 'rgba(56, 184, 242, 1)',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
      },
      {
        fill: false, borderDash: [5, 0],
        borderColor: 'rgba(255, 106, 0, 1)',
        pointBorderColor: 'rgba(255, 106, 0, 1)',
        pointBackgroundColor: 'rgba(255, 106, 0, 1)',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
      },
      {
        fill: false, borderDash: [5, 0],
        borderColor: 'rgba(120, 204, 55, 1)',
        pointBorderColor: 'rgba(120, 204, 55, 1)',
        pointBackgroundColor: 'rgba(120, 204, 55, 1)',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
      },
      {
        fill: false, borderDash: [5, 0],
        borderColor: 'rgba(255, 57, 111, 1)',
        pointBorderColor: 'rgba(255, 57, 111, 1)',
        pointBackgroundColor: 'rgba(255, 57, 111, 1)',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
      },
      {


        borderDash: [4, 4],
        fill: 'false',
        borderColor: '#B71C1C',
        lineTension: 1,
        backgroundColor: 'transparent',
        pointStyle: 'rectRounded',
        pointRadius: 0,
        pointBorderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0

      },
    ];
    return this.colorGroupedLineChartModel
  }

}
