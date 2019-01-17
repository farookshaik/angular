import { Injectable } from '@angular/core';

@Injectable()
export class ChartConfig {
    BUTTERFLY_HOUSE = 'Butterfly House';
    CASA_WOMENS_SHELTER = 'CASA Womens Shelter';
    CORNERSTONE_TRANSITION_HOME = 'Cornerstone Transition Home';
    FRESHLY_RENEWED_WOMEN = 'Freshly Renewed - Women';
    HOPE_HOUSE_RECOVERY = 'Hope House of Recovery';
    PHOENIX_RECOVERY = 'Phoenix Recovery';
    QUALITY_LIVING_CENTER_2 = 'Quality Living Center 2';
    SHALOM_RECOVERY_CENTERS = 'Shalom Recovery Centers';

    // Units
    WRIGHTSVILLE_HAWKINS_CENTER = 'Wrightsville Hawkins Center';
    TUCKER_REENTRY_WORK_RELEASE = 'Tucker Re-Entry Work Release';
    TUCKER_REENTRY_CENTER = 'Tucker Re-Entry Center';
    TUCKER_REENTRY = 'Tucker Re-Entry';
    SW_AR_CCC_FEMALES = 'SW AR CCC Females';
    SW_AR_CCC = 'SW AR CCC';
    OMEGA_SUPERVISION_SANCTION_CENTER = 'Omega Supervision Sanction Center';
    NW_AR_CCC = 'NW AR CCC';
    NE_AR_CCC = 'NE AR CCC';
    MCPHERSON_UNIT = 'McPherson Unit';
    MCPHERSON_MH_RESIDENTIAL_PROG_UNIT = 'McPherson MH Residential Prog Unit';
    EAST_CENTRAL_AR_CCCFEMALES_DRUG_TREATMENT = 'East Central AR CCC-Females Drug Treatment';
    EAST_CENTRAL_AR_CCC_SUPERVISION_SANCTION_FEMALE = 'East Central AR CCC Supervision Sanction-Female';
    EAST_CENTRAL_AR_CCC = 'East Central AR CCC';
    CENTRAL_AR_CCC_SHORT_TERM_DRUG_COURT_TREATMENT = 'Central AR CCC - Short Term Drug Court Treatment';
    CENTRAL_AR_CCC_MALES = 'Central AR CCC - Males';


    POINTOVERRADIUS: 10;
    constructor() {


    }



    totalApplicationsbarChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Number of Applications',
                    fontSize: 13
                },
                ticks: {
                    beginAtZero: true
                },
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Units',
                    fontSize: 13
                }, gridLines: {
                    display: false
                },
            }]
        }
    };


    totalApplicationsByHousebarChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Number of Applications',
                    fontSize: 13
                },
                ticks: {
                    beginAtZero: true
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Houses',
                    fontSize: 13
                }, gridLines: {
                    display: false
                }
            }]
        }
    };


    applicationResponseByHouseOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: true,
            position: 'bottom'

        },
        scales: {
            xAxes: [{
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Number of Applications',
                    fontSize: 13
                },
                ticks: {
                    beginAtZero: true
                }
            }],
            yAxes: [{
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Houses',
                    fontSize: 13
                }, gridLines: {
                    display: false
                }
            }]
        }

    };


    bedsMarkedAvailabilityByHousebarChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Number of Applications',
                    fontSize: 13
                }, ticks: {
                    max: 10,
                    min: 0,
                    stepSize: 1
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Houses',
                    fontSize: 13
                }, gridLines: {
                    display: false
                }
            }]
        }
    };

    totalResponseTimeByHouseOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: true,
        scaleShowValues: true,
        scales: {

            yAxes: [{
                ticks: {
                    beginAtZero: true
                }, scaleLabel: {
                    display: true,
                    labelString: 'Days',
                    fontSize: 13
                }
            }],
            xAxes: [{
                ticks: {
                    autoSkip: false
                }, scaleLabel: {
                    display: true,
                    labelString: 'Houses',
                    fontSize: 13
                }, gridLines: {
                    display: false
                },
                barPercentage: 0.7
            }]
        },

    };

    pieHouseOptions: any = {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: true,
            position: 'bottom'

        },

    };


    totalUnitslineChartColors
        : Array<any> = [
            {
                // EAST_CENTRAL_AR_CCC
                backgroundColor: '#11C987',
                borderColor: '#11C987',
                pointBackgroundColor: '#11C987',
                pointBorderColor: '#A5A5A5',
                pointHoverBackgroundColor: '#11C987',
                pointHoverBorderColor: '#11C987',
                fill: false,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
            },
            {
                // MCPHERSON_UNIT
                backgroundColor: '#FF976A',
                borderColor: '#FF976A',
                pointBackgroundColor: '#FF976A',
                pointBorderColor: '#A5A5A5',
                pointHoverBackgroundColor: '#FF976A',
                pointHoverBorderColor: '#FF976A',
                fill: false,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
            },
            {
                // NW_AR_CCC
                backgroundColor: '#A5A5A5',
                borderColor: '#A5A5A5',
                pointBackgroundColor: '#A5A5A5',
                pointBorderColor: '#A5A5A5',
                pointHoverBackgroundColor: '#A5A5A5',
                pointHoverBorderColor: '#A5A5A5',
                fill: false,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,

            },
            {
                // SW_AR_CCC_FEMALES
                backgroundColor: '#FFC000',
                borderColor: '#FFC000',
                pointBackgroundColor: '#FFC000',
                pointBorderColor: '#FFC000',
                pointHoverBackgroundColor: '#FFC000',
                pointHoverBorderColor: '#FFC000',
                fill: false,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,

            },
            {
                // WRIGHTSVILLE_HAWKINS_CENTER
                backgroundColor: '#FF6377',
                borderColor: '#FF6377',
                pointBackgroundColor: '#FF6377',
                pointBorderColor: '#FF6377',
                pointHoverBackgroundColor: '#FF6377',
                pointHoverBorderColor: '#FF6377',
                fill: false,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
            },

            {
                // EAST_CENTRAL_AR_CCC
                backgroundColor: '#7a5456',
                borderColor: '#7a5456',
                pointBackgroundColor: '#7a5456',
                pointBorderColor: '#7a5456',
                pointHoverBackgroundColor: '#7a5456',
                pointHoverBorderColor: '#7a5456',
                fill: false,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
            },
            {
                // MCPHERSON_UNIT
                backgroundColor: '#f5d431',
                borderColor: '#f5d431',
                pointBackgroundColor: '#f5d431',
                pointBorderColor: '#f5d431',
                pointHoverBackgroundColor: '#f5d431',
                pointHoverBorderColor: '#f5d431',
                fill: false,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
            },
            {
                // NW_AR_CCC
                backgroundColor: '#c5ed93',
                borderColor: '#c5ed93',
                pointBackgroundColor: '#c5ed93',
                pointBorderColor: '#c5ed93',
                pointHoverBackgroundColor: '#c5ed93',
                pointHoverBorderColor: '#c5ed93',
                fill: false,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,

            },
            {
                // SW_AR_CCC_FEMALES
                backgroundColor: '#59f5f7',
                borderColor: '#59f5f7',
                pointBackgroundColor: '#59f5f7',
                pointBorderColor: '#59f5f7',
                pointHoverBackgroundColor: '#59f5f7',
                pointHoverBorderColor: '#59f5f7',
                fill: false,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,

            },
            {
                // WRIGHTSVILLE_HAWKINS_CENTER
                backgroundColor: '#59b0f7',
                borderColor: '#59b0f7',
                pointBackgroundColor: '#59b0f7',
                pointBorderColor: '#59b0f7',
                pointHoverBackgroundColor: '#59b0f7',
                pointHoverBorderColor: '#59b0f7',
                fill: false,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
            },
            {
                // EAST_CENTRAL_AR_CCC
                backgroundColor: '#59b30b',
                borderColor: '#59b30b',
                pointBackgroundColor: '#59b30b',
                pointBorderColor: '#59b30b',
                pointHoverBackgroundColor: '#59b30b',
                pointHoverBorderColor: '#59b30b',
                fill: false,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
            },
            {
                // MCPHERSON_UNIT
                backgroundColor: '#e87d25',
                borderColor: '#e87d25',
                pointBackgroundColor: '#e87d25',
                pointBorderColor: '#e87d25',
                pointHoverBackgroundColor: '#e87d25',
                pointHoverBorderColor: '#e87d25',
                fill: false,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
            },
            {
                // NW_AR_CCC
                backgroundColor: '#4925e8',
                borderColor: '#4925e8',
                pointBackgroundColor: '#4925e8',
                pointBorderColor: '#4925e8',
                pointHoverBackgroundColor: '#4925e8',
                pointHoverBorderColor: '#4925e8',
                fill: false,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,

            },
            {
                // SW_AR_CCC_FEMALES
                backgroundColor: '#25e8db',
                borderColor: '#25e8db',
                pointBackgroundColor: '#25e8db',
                pointBorderColor: '#25e8db',
                pointHoverBackgroundColor: '#25e8db',
                pointHoverBorderColor: '#25e8db',
                fill: false,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,

            },
            {
                // WRIGHTSVILLE_HAWKINS_CENTER
                backgroundColor: '#d525e8',
                borderColor: '#d525e8',
                pointBackgroundColor: '#d525e8',
                pointBorderColor: '#d525e8',
                pointHoverBackgroundColor: '#d525e8',
                pointHoverBorderColor: '#d525e8',
                fill: false,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
            },

        ];


    totalApplicationlineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: '#11C987',
            borderColor: '#11C987',
            pointBackgroundColor: '#11C987',
            pointBorderColor: '#11C987',
            pointHoverBackgroundColor: '#11C987',
            pointHoverBorderColor: '#11C987',
            fill: false,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
        },
        {
            // dark grey
            backgroundColor: '#FF976A',
            borderColor: '#FF976A',
            pointBackgroundColor: '#FF976A',
            pointBorderColor: '#FF976A',
            pointHoverBackgroundColor: '#FF976A',
            pointHoverBorderColor: '#FF976A',
            fill: false,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
        },
        {
            // grey
            backgroundColor: '#A5A5A5',
            borderColor: '#A5A5A5',
            pointBackgroundColor: '#A5A5A5',
            pointBorderColor: '#A5A5A5',
            pointHoverBackgroundColor: '#A5A5A5',
            pointHoverBorderColor: '#A5A5A5',
            fill: false,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,

        },
        {
            // grey
            backgroundColor: '#FFC000',
            borderColor: '#FFC000',
            pointBackgroundColor: '#FFC000',
            pointBorderColor: '#FFC000',
            pointHoverBackgroundColor: '#FFC000',
            pointHoverBorderColor: '#FFC000',
            fill: false,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,

        },
        {
            // grey
            backgroundColor: '#FF6377',
            borderColor: '#FF6377',
            pointBackgroundColor: '#FF6377',
            pointBorderColor: '#FF6377',
            pointHoverBackgroundColor: '#FF6377',
            pointHoverBorderColor: '#FF6377',
            fill: false,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,

        }
    ];


    totalApplicationByHouseover3MonthslineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: '#4472C4',
            borderColor: '#4472C4',
            pointBorderColor: '#4472C4',
            pointBackgroundColor: '#4472C4',
            pointHoverBackgroundColor: '#4472C4',
            pointHoverBorderColor: '#4472C4',
            fill: false,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
        },
        {
            // dark grey
            backgroundColor: '#FF976A',
            borderColor: '#FF976A',
            pointBackgroundColor: '#FF976A',
            pointBorderColor: '#FF976A',
            pointHoverBackgroundColor: '#FF976A',
            pointHoverBorderColor: '#FF976A',
            fill: false,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
        },
        {
            // grey
            backgroundColor: '#A5A5A5',
            borderColor: '#A5A5A5',
            pointBackgroundColor: '#A5A5A5',
            pointBorderColor: '#A5A5A5',
            pointHoverBackgroundColor: '#A5A5A5',
            pointHoverBorderColor: '#A5A5A5',
            fill: false,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,

        },
        {
            // grey
            backgroundColor: '#FFC000',
            borderColor: '#FFC000',
            pointBackgroundColor: '#FFC000',
            pointBorderColor: '#FFC000',
            pointHoverBackgroundColor: '#FFC000',
            pointHoverBorderColor: '#FFC000',
            fill: false,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,

        },
        {
            // grey
            backgroundColor: '#FF6377',
            borderColor: '#FF6377',
            pointBackgroundColor: '#FF6377',
            pointBorderColor: '#FF6377',
            pointHoverBackgroundColor: '#FF6377',
            pointHoverBorderColor: '#FF6377',
            fill: false,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,

        },
        {
            // grey
            backgroundColor: '#11C987',
            borderColor: '#11C987',
            pointBackgroundColor: '#11C987',
            pointBorderColor: '#11C987',
            pointHoverBackgroundColor: '#11C987',
            pointHoverBorderColor: '#11C987',
            fill: false,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,

        },
        {
            // grey
            backgroundColor: '#264478',
            borderColor: '#264478',
            pointBackgroundColor: '#264478',
            pointBorderColor: '#264478',
            pointHoverBackgroundColor: '#264478',
            pointHoverBorderColor: '#264478',
            fill: false,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,

        },

    ];

    lineChartOptions: any = {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Months',
                    fontSize: 15
                }, gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Number of Applications',
                    fontSize: 15
                }
            }]
        },
        responsive: true,
        legend: {
            display: true,
            position: 'bottom'

        },
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        }

    };

    lineAvgChartOptions: any = {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Months',
                    fontSize: 15
                }, gridLines: {
                    display: false
                },

            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Days',
                    fontSize: 15
                }
            }]
        },
        responsive: true,

        legend: {
            display: true,
            position: 'bottom'

        },
        elements: {
            line: {
                tension: 0, // disables bezier curves
            },

        }

    };


}
