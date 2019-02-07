import * as shape from 'd3-shape';
//Bar Chart

export var barChartView: any[] = [550, 400];

// options
export var barChartShowXAxis = true;
export var barChartShowYAxis = true;
export var barChartGradient = false;
export var barChartShowLegend = false;
export var barChartShowXAxisLabel = true;
export var barChartXAxisLabel = '';
export var barChartShowYAxisLabel = true;
export var barChartYAxisLabel = '';

export var barChartColorScheme = {
  domain: ['#009DA0', '#FF8D60', '#FF586B', '#AAAAAA']
};

//Pie CHart

export var pieChartView: any[] = [550, 400];

// options
export var pieChartShowLegend = false;

export var pieChartColorScheme = {
  domain: ['#009DA0', '#FF8D60', '#FF586B', '#AAAAAA']
};

// pie
export var pieChartShowLabels = true;
export var pieChartExplodeSlices = false;
export var pieChartDoughnut = true;
export var pieChartGradient = false;

export var pieChart1ExplodeSlices = true;
export var pieChart1Doughnut = false;

//Line Charts

export var lineChartView: any[] = [550, 400];

// options
export var lineChartShowXAxis = true;
export var lineChartShowYAxis = true;
export var lineChartGradient = true;
export var lineChartShowLegend = false;
export var lineChartShowXAxisLabel = true;
export var lineChartXAxisLabel = '';
export var lineChartShowYAxisLabel = true;
export var lineChartYAxisLabel = '';

export var lineChartColorScheme = {
  domain: ['#009DA0', '#FF8D60', '#FF586B', '#AAAAAA']
};

// line, area
export var lineChartAutoScale = false;
export var lineChartLineInterpolation = shape.curveBasis;

//Area Charts
export var areaChartView: any[] = [550, 400];

// options
export var areaChartShowXAxis = true;
export var areaChartShowYAxis = true;
export var areaChartGradient = false;
export var areaChartShowLegend = false;
export var areaChartShowXAxisLabel = true;
export var areaChartXAxisLabel = '';
export var areaChartShowYAxisLabel = true;
export var areaChartYAxisLabel = '';

export var areaChartColorScheme = {
  domain: ['#FF8D60', '#FF586B', '#1CBCD8', '#795548']
};

// line, area
export var areaChartAutoScale = true;
export var areaChartLineInterpolation = shape.curveBasis;
