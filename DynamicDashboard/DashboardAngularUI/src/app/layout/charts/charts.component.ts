import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { routerTransition } from '../../router.animations';
import { DashboardService } from '../../services/dashboard.service';
import { PageHeaderComponent } from '../../shared/modules/page-header/page-header.component';
import { ChartConfig } from '../../common/chart.config';
@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()],
    providers: [ChartConfig]
})
export class ChartsComponent implements OnInit, AfterViewInit {
    @ViewChild(PageHeaderComponent) dateHeaderValue: PageHeaderComponent;

    fromDate: Date;
    getFromDate: Date;
    toDate: Date;
    getToDate: Date;
    istotalApplicationsByUnitData = false;
    istotalApplicationsByHouseData = false;
    isbedsMarkedAvailabilityByHouseData = false;
    isResponseApplicationsByHouseData = false;
    istotalResponseTimeByHouseData = false;
    isbutterflyHousepieChartData = false;
    iscornerstoneHousepieChartData = false;
    iscaseWomenShelterHousepieChartData = false;
    isphoenixRecoveryHousepieChartData = false;
    isfreshlyRenewedWomenHousepieChartData = false;
    isqualityLivingCenterHousepieChartData = false;
    isshalomRecoveryCenterHousepieChartData = false;

    // totalApplicationsByUnit bar chart
    totalApplicationsbarChartOptions = this.chartconfig.totalApplicationsbarChartOptions;
    totalApplicationsByUnitbarChartLabels: string[] = [];
    totalApplicationsByUnitbarChartType = 'horizontalBar';
    totalApplicationsByUnitbarChartLegend = false;
    totalApplicationsByUnitbarChartData: Array<any> = [];
    totalApplicationsByUnitbarChartCount: number[] = [];
    totalApplicationsByUnitbarchartColors: any[] = [
        {
            backgroundColor: ["#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A"]
        }];

    // totalApplicationsByHouse bar chart

    totalApplicationsByHousebarChartOptions = this.chartconfig.totalApplicationsByHousebarChartOptions;
    totalApplicationsByHousebarChartLabels: string[] = [];
    totalApplicationsByHousebarChartType = 'horizontalBar';
    totalApplicationsByHousebarChartLegend = false;
    totalApplicationsByHousebarChartData: Array<any> = [];
    totalApplicationsByHousebarChartCount: number[] = [];
    totalApplicationsByHousebarchartColors: any[] = [
        {
            backgroundColor: ["#11C987", "#11C987", "#11C987", "#11C987", "#11C987", "#11C987", "#11C987", "#11C987", "#11C987", "#11C987", "#11C987", "#11C987", "#11C987"]
        }];


    // Beds Marked Avaiability by House

    bedsMarkedAvailabilityByHousebarChartOptions = this.chartconfig.bedsMarkedAvailabilityByHousebarChartOptions;
    bedsMarkedAvailabilityByHousebarChartLabels: string[] = [];
    bedsMarkedAvailabilityByHousebarChartType = 'horizontalBar';
    bedsMarkedAvailabilityByHousebarChartLegend = false;
    bedsMarkedAvailabilityByHousebarChartData: Array<any> = [];
    bedsMarkedAvailabilityByHousebarChartCount: number[] = [];
    bedsMarkedAvailabilityByHousebarchartColors: any[] = [
        {
            backgroundColor: ["#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A", "#FF976A"]
        }];


    // applicationResponseByHouse bar chart

    applicationResponseByHouseOptions = this.chartconfig.applicationResponseByHouseOptions;
    applicationResponseByHousebarChartType = 'horizontalBar';
    applicationResponseByHousebarChartLabels: string[] = [];
    applicationResponseByHousebarChartLegend = true;
    applicationResponseByHousebarChartData: Array<any> = [];
    applicationResponseByHousebarChartCount_approved: number[] = [];
    applicationResponseByHousebarChartCount_rejected: number[] = [];
    applicationResponseByHousebarChartCount_pending: number[] = [];
    applicationResponseByHousebarchartColors: any[] = [
        {
            backgroundColor: ["#11C987", "#11C987", "#11C987", "#11C987", "#11C987", "#11C987", "#11C987", "#11C987", "#11C987"]
        }];


    totalResponseTimeByHouseOptions = this.chartconfig.totalResponseTimeByHouseOptions;
    totalResponseTimeByHousebarChartType = 'bar';
    totalResponseTimeByHousebarChartLabels: string[] = [];
    totalResponseTimeByHousebarChartLegend = false;
    totalResponseTimeByHousebarChartData: Array<any> = [];
    totalResponseTimeByHousebarChartCount: number[] = [];
    totalResponseTimeByHousebarchartColors: Array<any> = [
        {
            backgroundColor: ["#11C987", "#11C987", "#11C987", "#11C987", "#11C987", "#11C987", "#11C987", "#11C987", "#11C987"]
        }];

    // Butterfly House - Pie

    pieHouseOptions = this.chartconfig.pieHouseOptions;
    public housePieChartLabels: string[] = ['Approved', 'Rejected'];
    public butterflyHousepieChartData: number[] = [];
    public pieChartType = 'pie';
    pieHouseColors: any[] = [
        {
            backgroundColor: ["#FF6377", "#00A5A8"]
        }];

    // Cornerstone Transition Home -- pie

    public cornerstoneHousepieChartData: number[] = [];

    // CASA Womens Shelter -- pie

    public caseWomenShelterHousepieChartData: number[] = [];

    // Phoenix Recovery for Women -- pie

    public phoenxiRecoveryHousepieChartData: number[] = [];

    // Freshly Renewed - Women -- pie

    public freshlyRenewedWomenHousepieChartData: number[] = [];


    // Quality Living Center 2 -- pie

    public qualityLivingCenterHousepieChartData: number[] = [];

    // Shalom Recovery Centers -- pie

    public shalomRecoveryCentersHousepieChartData: number[] = [];



    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }


    constructor(private tservice: DashboardService, private chartconfig: ChartConfig, private cd: ChangeDetectorRef) {
    }



    ngAfterViewInit() {
        this.renderChart();
    }

    ngOnInit() {
    }

    onFromDateChangeEvent(inputdate) {
        this.renderChart();
    }

    onRangeDateChangeEvent(inputdate: any) {
        console.log(inputdate);
        this.renderChart();

    }

    renderChart(): any {

        this.getFromDate = new Date(localStorage.getItem('fromDate'));
        this.getToDate = new Date(localStorage.getItem('toDate'));
        // this.dateHeaderValue.bsFromValue = this.getFromDate;
        // this.dateHeaderValue.bsToValue = this.getToDate;

        this.dateHeaderValue.bsRangeValue = [this.getFromDate, this.getToDate];
        this.getChartDataFromServices(this.getFromDate, this.getToDate);
        this.cd.detectChanges();

    }

    onToDateChangeEvent(inputdate) {
        this.renderChart();

    }

    public getChartDataFromServices(fromEDate, toEdate) {

        this.RenderBedsMarkedAvailabilityByHousebarChartData(fromEDate, toEdate);
        this.RenderTotalApplicationsByUnitbarChartData(fromEDate, toEdate);
        this.RenderTotalApplicationsByHousebarChartData(fromEDate, toEdate);
        this.RenderResponseApplicationsByHousebarChartData(fromEDate, toEdate);
        this.RenderTotalResponseTimeByHousebarChartData(fromEDate, toEdate);
        this.RenderButterflyHousePieChart(fromEDate, toEdate);
        this.RendercornerstoneHousePieChart(fromEDate, toEdate);
        this.RendercaseWomenShelterHousePieChart(fromEDate, toEdate);
        this.RenderphoenxiRecoveryHousePieChart(fromEDate, toEdate);
        this.RenderfreshlyRenewedWomenPieChart(fromEDate, toEdate);
        this.RenderqualityLivingCenterPieChart(fromEDate, toEdate);
        this.shalomRecoveryCenterPieChart(fromEDate, toEdate);


    }

    RenderBedsMarkedAvailabilityByHousebarChartData(fromEDate: any, toEdate: any): any {
        this.bedsMarkedAvailabilityByHousebarChartLabels = [];
        this.bedsMarkedAvailabilityByHousebarChartCount = [];
        this.bedsMarkedAvailabilityByHousebarChartData.pop();
        if (fromEDate !== '' && toEdate !== '') {
            this.tservice.getBedsMarkedAvailabilityByHouse(fromEDate, toEdate).subscribe((res: any[]) => {
                res.forEach(y => {
                    this.bedsMarkedAvailabilityByHousebarChartLabels.push(y.HouseName);
                    this.bedsMarkedAvailabilityByHousebarChartCount.push(y.Total);
                }, (err: HttpErrorResponse) => {
                    console.log(err.message);
                });
                this.bedsMarkedAvailabilityByHousebarChartData.push({ "data": this.bedsMarkedAvailabilityByHousebarChartCount });
                if (this.bedsMarkedAvailabilityByHousebarChartCount.length > 0) {
                    // this.refresh_TotalApplicationsByHouseChartData();
                    this.isbedsMarkedAvailabilityByHouseData = true;
                } else {
                    this.isbedsMarkedAvailabilityByHouseData = false;
                }
            });
        }

    }

    shalomRecoveryCenterPieChart(fromEDate: any, toEdate: any): any {
        this.shalomRecoveryCentersHousepieChartData = [];
        if (fromEDate !== '' && toEdate !== '') {
            this.tservice.getshalomRecoveryCentersHouse(fromEDate, toEdate).subscribe((res: any[]) => {
                res.forEach(y => {
                    this.shalomRecoveryCentersHousepieChartData.push(y.Total);
                }, (err: HttpErrorResponse) => {
                    console.log(err.message);
                });
                if (this.shalomRecoveryCentersHousepieChartData.length > 0) {
                    this.isshalomRecoveryCenterHousepieChartData = true;
                } else {
                    this.isshalomRecoveryCenterHousepieChartData = false;
                }
            });
        }
    }

    RenderqualityLivingCenterPieChart(fromEDate: any, toEdate: any): any {
        this.qualityLivingCenterHousepieChartData = [];
        if (fromEDate !== '' && toEdate !== '') {
            this.tservice.getqualityLivingCenterHouse(fromEDate, toEdate).subscribe((res: any[]) => {
                res.forEach(y => {
                    this.qualityLivingCenterHousepieChartData.push(y.Total);
                }, (err: HttpErrorResponse) => {
                    console.log(err.message);
                });
                if (this.qualityLivingCenterHousepieChartData.length > 0) {
                    this.isqualityLivingCenterHousepieChartData = true;
                } else {
                    this.isqualityLivingCenterHousepieChartData = false;
                }
            });
        }
    }


    RenderfreshlyRenewedWomenPieChart(fromEDate: any, toEdate: any): any {
        this.freshlyRenewedWomenHousepieChartData = [];
        if (fromEDate !== '' && toEdate !== '') {
            this.tservice.getfreshlyRenewedWomenHouse(fromEDate, toEdate).subscribe((res: any[]) => {
                res.forEach(y => {
                    this.freshlyRenewedWomenHousepieChartData.push(y.Total);
                }, (err: HttpErrorResponse) => {
                    console.log(err.message);
                });
                if (this.freshlyRenewedWomenHousepieChartData.length > 0) {
                    this.isfreshlyRenewedWomenHousepieChartData = true;
                } else {
                    this.isfreshlyRenewedWomenHousepieChartData = false;
                }
            });
        }
    }
    RenderphoenxiRecoveryHousePieChart(fromEDate: any, toEdate: any): any {
        this.phoenxiRecoveryHousepieChartData = [];
        if (fromEDate !== '' && toEdate !== '') {
            this.tservice.getPhoenixRecoveryHouse(fromEDate, toEdate).subscribe((res: any[]) => {
                res.forEach(y => {
                    this.phoenxiRecoveryHousepieChartData.push(y.Total);
                }, (err: HttpErrorResponse) => {
                    console.log(err.message);
                });
                if (this.phoenxiRecoveryHousepieChartData.length > 0) {
                    this.isphoenixRecoveryHousepieChartData = true;
                } else {
                    this.isphoenixRecoveryHousepieChartData = false;
                }
            });
        }
    }
    RendercaseWomenShelterHousePieChart(fromEDate: any, toEdate: any): any {
        this.caseWomenShelterHousepieChartData = [];
        if (fromEDate !== '' && toEdate !== '') {
            this.tservice.getCasaWomenShelterByHouse(fromEDate, toEdate).subscribe((res: any[]) => {
                res.forEach(y => {
                    this.caseWomenShelterHousepieChartData.push(y.Total);
                }, (err: HttpErrorResponse) => {
                    console.log(err.message);
                });
                if (this.caseWomenShelterHousepieChartData.length > 0) {
                    this.iscaseWomenShelterHousepieChartData = true;
                } else {
                    this.iscaseWomenShelterHousepieChartData = false;
                }
            });
        }
    }
    RendercornerstoneHousePieChart(fromEDate: any, toEdate: any): any {
        this.cornerstoneHousepieChartData = [];
        if (fromEDate !== '' && toEdate !== '') {
            this.tservice.getCornerstoneHouse(fromEDate, toEdate).subscribe((res: any[]) => {
                res.forEach(y => {
                    this.cornerstoneHousepieChartData.push(y.Total);
                }, (err: HttpErrorResponse) => {
                    console.log(err.message);
                });
                if (this.cornerstoneHousepieChartData.length > 0) {
                    // this.refresh_TotalApplicationsByHouseChartData();
                    this.iscornerstoneHousepieChartData = true;
                } else {
                    this.iscornerstoneHousepieChartData = false;
                }
            });
        }

    }
    RenderButterflyHousePieChart(fromEDate: any, toEdate: any): any {
        this.butterflyHousepieChartData = [];
        if (fromEDate !== '' && toEdate !== '') {
            this.tservice.getButterflyHouse(fromEDate, toEdate).subscribe((res: any[]) => {
                res.forEach(y => {
                    this.butterflyHousepieChartData.push(y.Total);
                }, (err: HttpErrorResponse) => {
                    console.log(err.message);
                });
                if (this.butterflyHousepieChartData.length > 0) {
                    // this.refresh_TotalApplicationsByHouseChartData();
                    this.isbutterflyHousepieChartData = true;
                } else {
                    this.isbutterflyHousepieChartData = false;
                }
            });
        }
    }


    RenderTotalResponseTimeByHousebarChartData(fromEDate: any, toEdate: any): any {
        this.totalResponseTimeByHousebarChartLabels = [];
        this.totalResponseTimeByHousebarChartCount = [];
        this.totalResponseTimeByHousebarChartData.pop();
        if (fromEDate !== '' && toEdate !== '') {
            this.tservice.getTotalResponseTimeByHouse(fromEDate, toEdate).subscribe((res: any[]) => {
                res.forEach(y => {
                    this.totalResponseTimeByHousebarChartLabels.push(y.HouseName);
                    this.totalResponseTimeByHousebarChartCount.push(y.Total);
                }, (err: HttpErrorResponse) => {
                    console.log(err.message);
                });
                this.totalResponseTimeByHousebarChartData.push({ "data": this.totalResponseTimeByHousebarChartCount });
                if (this.totalResponseTimeByHousebarChartCount.length > 0) {
                    // this.refresh_TotalApplicationsByHouseChartData();
                    this.istotalResponseTimeByHouseData = true;
                } else {
                    this.istotalResponseTimeByHouseData = false;
                }
            });
        }
    }

    RenderResponseApplicationsByHousebarChartData(fromEDate: any, toEdate: any): any {
        this.applicationResponseByHousebarChartLabels = [];
        this.applicationResponseByHousebarChartCount_approved = [];
        this.applicationResponseByHousebarChartCount_rejected = [];
        this.applicationResponseByHousebarChartCount_pending = [];
        this.applicationResponseByHousebarChartData.pop();
        this.applicationResponseByHousebarChartData.pop();
        this.applicationResponseByHousebarChartData.pop();
        if (fromEDate !== '' && toEdate !== '') {
            this.tservice.getapplicationResponseByHouse(fromEDate, toEdate).subscribe((res: any[]) => {
                res.forEach(y => {
                    this.applicationResponseByHousebarChartLabels.push(y.HouseName);
                    this.applicationResponseByHousebarChartCount_approved.push(y.TotalAPPROVED);
                    this.applicationResponseByHousebarChartCount_rejected.push(y.TotalREJECTED);
                    this.applicationResponseByHousebarChartCount_pending.push(y.TotalPENDING);
                }, (err: HttpErrorResponse) => {
                    console.log(err.message);
                });
                this.applicationResponseByHousebarChartData.push({ "backgroundColor": "#11C987", "data": this.applicationResponseByHousebarChartCount_pending, "label": "Pending" });
                this.applicationResponseByHousebarChartData.push({ "backgroundColor": "#FF6377", "data": this.applicationResponseByHousebarChartCount_approved, "label": "Approved" });
                this.applicationResponseByHousebarChartData.push({ "backgroundColor": "#00A5A8", "data": this.applicationResponseByHousebarChartCount_rejected, "label": "Rejected" });
                if (this.applicationResponseByHousebarChartLabels.length > 0) {
                    this.isResponseApplicationsByHouseData = true;
                } else {
                    this.isResponseApplicationsByHouseData = false;
                }
            });
        }
    }


    RenderTotalApplicationsByHousebarChartData(fromEDate: any, toEdate: any): any {
        this.totalApplicationsByHousebarChartLabels = [];
        this.totalApplicationsByHousebarChartCount = [];
        this.totalApplicationsByHousebarChartData.pop();
        if (fromEDate !== '' && toEdate !== '') {
            this.tservice.getTotalapplicationResponseByHouse(fromEDate, toEdate).subscribe((res: any[]) => {
                res.forEach(y => {
                    this.totalApplicationsByHousebarChartLabels.push(y.House_Name);
                    this.totalApplicationsByHousebarChartCount.push(y.Total);
                }, (err: HttpErrorResponse) => {
                    console.log(err.message);
                });
                this.totalApplicationsByHousebarChartData.push({ "data": this.totalApplicationsByHousebarChartCount });
                if (this.totalApplicationsByHousebarChartCount.length > 0) {
                    // this.refresh_TotalApplicationsByHouseChartData();
                    this.istotalApplicationsByHouseData = true;
                } else {
                    this.istotalApplicationsByHouseData = false;
                }

            });
        }
    }

    RenderTotalApplicationsByUnitbarChartData(fromEDate, toEdate) {
        this.totalApplicationsByUnitbarChartLabels = [];
        this.totalApplicationsByUnitbarChartCount = [];
        this.totalApplicationsByUnitbarChartData.pop();
        if (fromEDate !== '' && toEdate !== '') {
            this.tservice.getTotalApplicationsByUnit(fromEDate, toEdate).subscribe((res: any[]) => {
                res.forEach(y => {
                    this.totalApplicationsByUnitbarChartLabels.push(y.Inmate_Location);
                    this.totalApplicationsByUnitbarChartCount.push(y.Total);
                }, (err: HttpErrorResponse) => {
                    console.log(err.message);
                });
                this.totalApplicationsByUnitbarChartData.push({ "data": this.totalApplicationsByUnitbarChartCount });

                if (this.totalApplicationsByUnitbarChartCount.length > 0) {
                    // this.refresh_TotalApplicationsByUnitbarChartData();
                    this.istotalApplicationsByUnitData = true;
                } else {
                    this.istotalApplicationsByUnitData = false;
                }

            });
        } else { this.istotalApplicationsByUnitData = false; }
    }


    // --refresh
    // refresh_TotalApplicationsByUnitbarChartData() {
    //     setTimeout(() => {
    //         if (this.baseChart && this.baseChart.chart && this.baseChart.chart.config) {
    //             this.baseChart.chart.config.data.labels = this.totalApplicationsByUnitbarChartLabels;
    //             this.baseChart.chart.config.data.datasets = this.totalApplicationsByUnitbarChartData[0];
    //             this.baseChart.chart.config.data.colors = this.totalApplicationsByUnitbarchartColors;
    //             this.baseChart.chart.config.data.options = this.totalApplicationsbarChartOptions;
    //             this.istotalApplicationsByUnitData = true;
    //             this.baseChart.chart.update();
    //         }
    //     });
    // }

    // refresh_TotalApplicationsByHouseChartData() {
    //     setTimeout(() => {
    //         if (this.ApplicationsByHouse && this.ApplicationsByHouse.chart && this.ApplicationsByHouse.chart.config) {
    //             this.ApplicationsByHouse.chart.config.data.labels = this.totalResponseTimeByHousebarChartLabels;
    //             this.ApplicationsByHouse.chart.config.data.datasets = this.totalResponseTimeByHousebarChartData[0];
    //             this.ApplicationsByHouse.chart.config.data.colors = this.totalResponseTimeByHousebarchartColors[0];
    //             this.ApplicationsByHouse.chart.config.data.options = this.totalResponseTimeByHouseOptions;
    //             this.istotalResponseTimeByHouseData = true;
    //             this.ApplicationsByHouse.chart.update();
    //         }
    //     });
    // }
}
