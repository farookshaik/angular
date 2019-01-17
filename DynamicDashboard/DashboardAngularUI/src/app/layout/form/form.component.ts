import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DashboardService } from '../../services/dashboard.service';
import { PageHeaderComponent } from '../../shared/modules/page-header/page-header.component';
import { ChartConfig } from '../../common/chart.config';
import { ChartsModule } from 'ng2-charts';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()],
    providers: [ChartConfig]
})
export class FormComponent implements OnInit, AfterViewInit {
    // Total Application over 3 Months -- lineChart
    fromDate: Date;
    toDate: Date;
    getFromDate: Date;
    getToDate: Date;
    @ViewChild('chart1') chart1: ChartsModule;
    @ViewChild(PageHeaderComponent) dateHeaderValue: PageHeaderComponent;
    public totalApplicationlineChartLabels: string[];
    public totalApplicationlineChartData: { label: string, data: Array<any> }[] = [];
    public East_Central_AR_CCC_CNT: Array<any> = [];
    public McPherson_Unit_CNT: Array<any> = [];
    public NW_AR_CCC_CNT: Array<any> = [];
    public SW_AR_CCC_Females_CNT: Array<any> = [];
    public Wrightsville_Hawkins_Center_CNT: Array<any> = [];
    Central_AR_CCC_Males_CNT: Array<any> = [];
    Tucker_ReEntry_Work_Release_CNT: Array<any> = [];
    Tucker_ReEntry_Center_CNT: Array<any> = [];
    Tucker_ReEntry_CNT: Array<any> = [];
    Omega_Supervision_Sanction_Center_CNT: Array<any> = [];
    MH_Residential_CNT: Array<any> = [];
    East_Central_AR_CCCFemales_DrugTreatment_CNT: Array<any> = [];
    Sanction_Female_CNT: Array<any> = [];
    Short_Term_Drug_CNT: Array<any> = [];
    NE_AR_CCC_CNT: Array<any> = [];
    SW_AR_CCC_CNT: Array<any> = [];
    isUnitData: boolean;

    public totalUnitslineChartColors = this.chartconfig.totalUnitslineChartColors;
    // Total Application by House over 3 Months -- lineChart

    public totalApplicationlineChartColors = this.chartconfig.totalApplicationlineChartColors;
    public totalApplicationByHouseoverlineChartLabels: string[];
    public totalApplicationByHouseoverlineChartData: { label: string, data: Array<any> }[] = [];
    public Total_Butterfly_House_CNT: Array<any> = [];
    public Total_CASA_Womens_Shelter_CNT: Array<any> = [];
    public Total_Cornerstone_Transition_Home_CNT: Array<any> = [];
    public Total_Freshly_Renewed_Women_CNT: Array<any> = [];
    public Total_Phoenix_Recovery_CNT: Array<any> = [];
    public Total_Quality_Living_Center_2_CNT: Array<any> = [];
    public Total_Shalom_Recovery_Centers_CNT: Array<any> = [];
    public Total_Hope_House_Recovery_CNT: Array<any> = [];
    public totalApplicationByHouseover3MonthslineChartColors = this.chartconfig.totalApplicationByHouseover3MonthslineChartColors;
    isHouseData: boolean;
    // Average Response by House over 3 Months -- lineChart

    public AVG_Butterfly_House_CNT: Array<any> = [];
    public AVG_CASA_Womens_Shelter_CNT: Array<any> = [];
    public AVG_Cornerstone_Transition_Home_CNT: Array<any> = [];
    public AVG_Freshly_Renewed_Women_CNT: Array<any> = [];
    public AVG_Phoenix_Recovery_CNT: Array<any> = [];
    public AVG_Quality_Living_Center_2_CNT: Array<any> = [];
    public AVG_Shalom_Recovery_Centers_CNT: Array<any> = [];
    public AVG_Hope_House_Recovery_CNT: Array<any> = [];
    public averageResponseByHouselineChartLabels: string[] = [];
    public averageResponseByHouselineChartData: { label: string, data: Array<any> }[] = [];
    isAvgHouseData: boolean;

    public lineChartOptions = this.chartconfig.lineChartOptions;
    public lineAvgChartOptions = this.chartconfig.lineAvgChartOptions;

    /// Beds Marked Availability
    public bedsMarkedAvailabilityByHouseData: { label: string, data: Array<any> }[] = [];
    public bedsMarkedAvailabilityByHouseLabels: string[] = [];
    public Beds_Butterfly_House_CNT: Array<any> = [];
    public Beds_CASA_Womens_Shelter_CNT: Array<any> = [];
    public Beds_Cornerstone_Transition_Home_CNT: Array<any> = [];
    public Beds_Freshly_Renewed_Women_CNT: Array<any> = [];
    public Beds_Phoenix_Recovery_CNT: Array<any> = [];
    public Beds_Quality_Living_Center_2_CNT: Array<any> = [];
    public Beds_Shalom_Recovery_Centers_CNT: Array<any> = [];
    isBedMarkedHouseData: boolean;
    public lineChartLegend = true;
    public lineChartType = 'line';



    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }



    constructor(private tservice: DashboardService, private chartconfig: ChartConfig) { }

    onRangeDateChangeEvent(inputdate: any) {
        console.log(inputdate);
        this.renderChart();

    }

    onFromDateChangeEvent(inputdate) {
        this.renderChart();
    }

    onToDateChangeEvent(inputdate) {
        this.renderChart();
    }
    public getTrendChartDataFromServices(fromEDate, toEdate) {
        if (fromEDate !== '' && toEdate !== '') {
            // tslint:disable-next-line:max-line-length
            this.tservice.getTotalApplicationbyUnitService(fromEDate, toEdate).subscribe((res: any[]) => this.getTotalApplicationbyUnitData(res));
            // tslint:disable-next-line:max-line-length
            this.tservice.getTotalApplicationByHouseService(fromEDate, toEdate).subscribe((res: any[]) => this.getTotalApplicationByHouseData(res));
            // tslint:disable-next-line:max-line-length
            this.tservice.getAverageResponseByHouseService(fromEDate, toEdate).subscribe((res: any[]) => this.getAverageResponseByHouseData(res));
            // tslint:disable-next-line:max-line-length
            this.tservice.getBedsMarkedAvailabilityByHouseService(fromEDate, toEdate).subscribe((res: any[]) => this.getBedsMarkedAvailabilityData(res));
        }
    }
    getTotalApplicationbyUnitData(res: any[]): void {

        this.clearTotalApplicationbyUnitData();
        res.forEach(y => {
            this.totalApplicationlineChartLabels.push(y.MONTH);
            this.Tucker_ReEntry_Work_Release_CNT.push(y.Tucker_ReEntry_Work_Release_CNT);
            this.Tucker_ReEntry_Center_CNT.push(y.Tucker_ReEntry_Center_CNT);
            this.Tucker_ReEntry_CNT.push(y.Tucker_ReEntry_CNT);
            this.SW_AR_CCC_CNT.push(y.SW_AR_CCC_CNT);
            this.Omega_Supervision_Sanction_Center_CNT.push(y.Omega_Supervision_Sanction_Center_CNT);
            this.NE_AR_CCC_CNT.push(y.NE_AR_CCC_CNT);
            this.MH_Residential_CNT.push(y.MH_Residential_CNT);
            this.East_Central_AR_CCCFemales_DrugTreatment_CNT.push(y.East_Central_AR_CCCFemales_DrugTreatment_CNT);
            this.Sanction_Female_CNT.push(y.Sanction_Female_CNT);
            this.Short_Term_Drug_CNT.push(y.Short_Term_Drug_CNT);
            this.Central_AR_CCC_Males_CNT.push(y.Central_AR_CCC_Males_CNT);
            this.East_Central_AR_CCC_CNT.push(y.East_Central_AR_CCC_CNT);
            this.McPherson_Unit_CNT.push(y.McPherson_Unit_CNT);
            this.NW_AR_CCC_CNT.push(y.NW_AR_CCC_CNT);
            this.SW_AR_CCC_Females_CNT.push(y.SW_AR_CCC_Females_CNT);
            this.Wrightsville_Hawkins_Center_CNT.push(y.Wrightsville_Hawkins_Center_CNT);
        });
        if (res.length > 0) {
            setTimeout(() => {
                // tslint:disable-next-line:max-line-length
                this.Central_AR_CCC_Males_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationlineChartData.push({ data: this.Central_AR_CCC_Males_CNT, label: this.chartconfig.CENTRAL_AR_CCC_MALES }) : this.Central_AR_CCC_Males_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Short_Term_Drug_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationlineChartData.push({ data: this.Short_Term_Drug_CNT, label: this.chartconfig.CENTRAL_AR_CCC_SHORT_TERM_DRUG_COURT_TREATMENT }) : this.Short_Term_Drug_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Sanction_Female_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationlineChartData.push({ data: this.Sanction_Female_CNT, label: this.chartconfig.EAST_CENTRAL_AR_CCC_SUPERVISION_SANCTION_FEMALE }) : this.Sanction_Female_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.East_Central_AR_CCC_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationlineChartData.push({ data: this.East_Central_AR_CCC_CNT, label: this.chartconfig.EAST_CENTRAL_AR_CCC }) : this.East_Central_AR_CCC_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.East_Central_AR_CCCFemales_DrugTreatment_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationlineChartData.push({ data: this.East_Central_AR_CCCFemales_DrugTreatment_CNT, label: this.chartconfig.EAST_CENTRAL_AR_CCCFEMALES_DRUG_TREATMENT }) : this.East_Central_AR_CCCFemales_DrugTreatment_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.MH_Residential_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationlineChartData.push({ data: this.MH_Residential_CNT, label: this.chartconfig.MCPHERSON_MH_RESIDENTIAL_PROG_UNIT }) : this.MH_Residential_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.McPherson_Unit_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationlineChartData.push({ data: this.McPherson_Unit_CNT, label: this.chartconfig.MCPHERSON_UNIT }) : this.McPherson_Unit_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.NE_AR_CCC_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationlineChartData.push({ data: this.NE_AR_CCC_CNT, label: this.chartconfig.NE_AR_CCC }) : this.NE_AR_CCC_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.NW_AR_CCC_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationlineChartData.push({ data: this.NW_AR_CCC_CNT, label: this.chartconfig.NW_AR_CCC }) : this.NW_AR_CCC_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Omega_Supervision_Sanction_Center_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationlineChartData.push({ data: this.Omega_Supervision_Sanction_Center_CNT, label: this.chartconfig.OMEGA_SUPERVISION_SANCTION_CENTER }) : this.Omega_Supervision_Sanction_Center_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.SW_AR_CCC_Females_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationlineChartData.push({ data: this.SW_AR_CCC_Females_CNT, label: this.chartconfig.SW_AR_CCC_FEMALES }) : this.SW_AR_CCC_Females_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.SW_AR_CCC_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationlineChartData.push({ data: this.SW_AR_CCC_CNT, label: this.chartconfig.SW_AR_CCC }) : this.SW_AR_CCC_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Tucker_ReEntry_Work_Release_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationlineChartData.push({ data: this.Tucker_ReEntry_Work_Release_CNT, label: this.chartconfig.TUCKER_REENTRY_WORK_RELEASE }) : this.Tucker_ReEntry_Work_Release_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Tucker_ReEntry_Center_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationlineChartData.push({ data: this.Tucker_ReEntry_Center_CNT, label: this.chartconfig.TUCKER_REENTRY_CENTER }) : this.Tucker_ReEntry_Center_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Tucker_ReEntry_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationlineChartData.push({ data: this.Tucker_ReEntry_CNT, label: this.chartconfig.TUCKER_REENTRY }) : this.Tucker_ReEntry_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Wrightsville_Hawkins_Center_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationlineChartData.push({ data: this.Wrightsville_Hawkins_Center_CNT, label: this.chartconfig.WRIGHTSVILLE_HAWKINS_CENTER }) : this.Wrightsville_Hawkins_Center_CNT = [];
            }, 300);
            this.isUnitData = true;
        } else {
            this.isUnitData = false;
        }
    }

    clearTotalApplicationbyUnitData(): any {
        this.totalApplicationlineChartLabels = [];
        this.totalApplicationlineChartData = [];

        this.East_Central_AR_CCC_CNT = [];
        this.McPherson_Unit_CNT = [];
        this.NW_AR_CCC_CNT = [];
        this.SW_AR_CCC_Females_CNT = [];
        this.Wrightsville_Hawkins_Center_CNT = [];
        this.Central_AR_CCC_Males_CNT = [];
        this.Tucker_ReEntry_Work_Release_CNT = [];
        this.Tucker_ReEntry_Center_CNT = [];
        this.Tucker_ReEntry_CNT = [];
        this.Omega_Supervision_Sanction_Center_CNT = [];
        this.MH_Residential_CNT = [];
        this.East_Central_AR_CCCFemales_DrugTreatment_CNT = [];
        this.Sanction_Female_CNT = [];
        this.Short_Term_Drug_CNT = [];
        this.NE_AR_CCC_CNT = [];
        this.SW_AR_CCC_CNT = [];
    }

    getTotalApplicationByHouseData(res: any[]): void {
        this.clearTotalApplicationByHouseData();
        res.forEach(y => {
            this.totalApplicationByHouseoverlineChartLabels.push(y.MONTH);
            this.Total_Butterfly_House_CNT.push(y.Butterfly_House_CNT);
            this.Total_CASA_Womens_Shelter_CNT.push(y.CASA_Womens_Shelter_CNT);
            this.Total_Cornerstone_Transition_Home_CNT.push(y.Cornerstone_Transition_Home_CNT);
            this.Total_Freshly_Renewed_Women_CNT.push(y.Freshly_Renewed_Women_CNT);
            this.Total_Hope_House_Recovery_CNT.push(y.Hope_House_of_Recovery_CNT);
            this.Total_Phoenix_Recovery_CNT.push(y.Phoenix_Recovery_CNT);
            this.Total_Quality_Living_Center_2_CNT.push(y.Quality_Living_Center_2_CNT);
            this.Total_Shalom_Recovery_Centers_CNT.push(y.Shalom_Recovery_Centers_CNT);

        });
        if (res.length > 0) {
            setTimeout(() => {
                // tslint:disable-next-line:max-line-length
                this.Total_Butterfly_House_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationByHouseoverlineChartData.push({ data: this.Total_Butterfly_House_CNT, label: this.chartconfig.BUTTERFLY_HOUSE }) : this.Total_Butterfly_House_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Total_CASA_Womens_Shelter_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationByHouseoverlineChartData.push({ data: this.Total_CASA_Womens_Shelter_CNT, label: this.chartconfig.CASA_WOMENS_SHELTER }) : this.Total_CASA_Womens_Shelter_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Total_Cornerstone_Transition_Home_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationByHouseoverlineChartData.push({ data: this.Total_Cornerstone_Transition_Home_CNT, label: this.chartconfig.CORNERSTONE_TRANSITION_HOME }) : this.Total_Cornerstone_Transition_Home_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Total_Freshly_Renewed_Women_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationByHouseoverlineChartData.push({ data: this.Total_Freshly_Renewed_Women_CNT, label: this.chartconfig.FRESHLY_RENEWED_WOMEN }) : this.Total_Freshly_Renewed_Women_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Total_Hope_House_Recovery_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationByHouseoverlineChartData.push({ data: this.Total_Hope_House_Recovery_CNT, label: this.chartconfig.HOPE_HOUSE_RECOVERY }) : this.Total_Hope_House_Recovery_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Total_Phoenix_Recovery_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationByHouseoverlineChartData.push({ data: this.Total_Phoenix_Recovery_CNT, label: this.chartconfig.PHOENIX_RECOVERY }) : this.Total_Phoenix_Recovery_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Total_Quality_Living_Center_2_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationByHouseoverlineChartData.push({ data: this.Total_Quality_Living_Center_2_CNT, label: this.chartconfig.QUALITY_LIVING_CENTER_2 }) : this.Total_Quality_Living_Center_2_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Total_Shalom_Recovery_Centers_CNT.reduce((sum, c) => sum + c) > 0 ? this.totalApplicationByHouseoverlineChartData.push({ data: this.Total_Shalom_Recovery_Centers_CNT, label: this.chartconfig.SHALOM_RECOVERY_CENTERS }) : this.Total_Shalom_Recovery_Centers_CNT = [];
            }, 300);
            this.isHouseData = true;
        } else { this.isHouseData = false; }
    }

    clearTotalApplicationByHouseData(): any {
        this.totalApplicationByHouseoverlineChartLabels = [];
        this.Total_Butterfly_House_CNT = [];
        this.Total_CASA_Womens_Shelter_CNT = [];
        this.Total_Cornerstone_Transition_Home_CNT = [];
        this.Total_Freshly_Renewed_Women_CNT = [];
        this.Total_Hope_House_Recovery_CNT = [];
        this.Total_Phoenix_Recovery_CNT = [];
        this.Total_Quality_Living_Center_2_CNT = [];
        this.Total_Shalom_Recovery_Centers_CNT = [];
        this.totalApplicationByHouseoverlineChartData = [];
    }

    getAverageResponseByHouseData(res: any[]): void {
        this.clearAverageResponseByHouseData();
        res.forEach(y => {
            this.averageResponseByHouselineChartLabels.push(y.MONTH);
            this.AVG_Butterfly_House_CNT.push(y.Butterfly_House_CNT);
            this.AVG_CASA_Womens_Shelter_CNT.push(y.CASA_Womens_Shelter_CNT);
            this.AVG_Cornerstone_Transition_Home_CNT.push(y.Cornerstone_Transition_Home_CNT);
            this.AVG_Freshly_Renewed_Women_CNT.push(y.Freshly_Renewed_Women_CNT);
            this.AVG_Hope_House_Recovery_CNT.push(y.Hope_House_of_Recovery_CNT);
            this.AVG_Phoenix_Recovery_CNT.push(y.Phoenix_Recovery_CNT);
            this.AVG_Quality_Living_Center_2_CNT.push(y.Quality_Living_Center_2_CNT);
            this.AVG_Shalom_Recovery_Centers_CNT.push(y.Shalom_Recovery_Centers_CNT);
        });
        if (res.length > 0) {
            setTimeout(() => {
                // tslint:disable-next-line:max-line-length
                this.AVG_Butterfly_House_CNT.reduce((sum, c) => sum + c) > 0 ? this.averageResponseByHouselineChartData.push({ data: this.AVG_Butterfly_House_CNT, label: this.chartconfig.BUTTERFLY_HOUSE }) : this.AVG_Butterfly_House_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.AVG_CASA_Womens_Shelter_CNT.reduce((sum, c) => sum + c) > 0 ? this.averageResponseByHouselineChartData.push({ data: this.AVG_CASA_Womens_Shelter_CNT, label: this.chartconfig.CASA_WOMENS_SHELTER }) : this.AVG_CASA_Womens_Shelter_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.AVG_Cornerstone_Transition_Home_CNT.reduce((sum, c) => sum + c) > 0 ? this.averageResponseByHouselineChartData.push({ data: this.AVG_Cornerstone_Transition_Home_CNT, label: this.chartconfig.CORNERSTONE_TRANSITION_HOME }) : this.AVG_Cornerstone_Transition_Home_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.AVG_Freshly_Renewed_Women_CNT.reduce((sum, c) => sum + c) > 0 ? this.averageResponseByHouselineChartData.push({ data: this.AVG_Freshly_Renewed_Women_CNT, label: this.chartconfig.FRESHLY_RENEWED_WOMEN }) : this.AVG_Freshly_Renewed_Women_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.AVG_Hope_House_Recovery_CNT.reduce((sum, c) => sum + c) > 0 ? this.averageResponseByHouselineChartData.push({ data: this.AVG_Hope_House_Recovery_CNT, label: this.chartconfig.HOPE_HOUSE_RECOVERY }) : this.AVG_Hope_House_Recovery_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.AVG_Phoenix_Recovery_CNT.reduce((sum, c) => sum + c) > 0 ? this.averageResponseByHouselineChartData.push({ data: this.AVG_Phoenix_Recovery_CNT, label: this.chartconfig.PHOENIX_RECOVERY }) : this.AVG_Phoenix_Recovery_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.AVG_Quality_Living_Center_2_CNT.reduce((sum, c) => sum + c) > 0 ? this.averageResponseByHouselineChartData.push({ data: this.AVG_Quality_Living_Center_2_CNT, label: this.chartconfig.QUALITY_LIVING_CENTER_2 }) : this.AVG_Quality_Living_Center_2_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.AVG_Shalom_Recovery_Centers_CNT.reduce((sum, c) => sum + c) > 0 ? this.averageResponseByHouselineChartData.push({ data: this.AVG_Shalom_Recovery_Centers_CNT, label: this.chartconfig.SHALOM_RECOVERY_CENTERS }) : this.AVG_Shalom_Recovery_Centers_CNT = [];
            }, 300);
            this.isAvgHouseData = true;
        } else { this.isAvgHouseData = false; }
    }

    clearAverageResponseByHouseData(): any {
        this.averageResponseByHouselineChartLabels = [];
        this.AVG_Butterfly_House_CNT = [];
        this.AVG_CASA_Womens_Shelter_CNT = [];
        this.AVG_Cornerstone_Transition_Home_CNT = [];
        this.AVG_Phoenix_Recovery_CNT = [];
        this.AVG_Quality_Living_Center_2_CNT = [];
        this.AVG_Shalom_Recovery_Centers_CNT = [];
        this.AVG_Freshly_Renewed_Women_CNT = [];
        this.AVG_Hope_House_Recovery_CNT = [];
        this.averageResponseByHouselineChartData = [];
    }

    getBedsMarkedAvailabilityData(res: any[]): void {
        this.clearBedsMarkedAvailabilityData();
        res.forEach(y => {
            this.bedsMarkedAvailabilityByHouseLabels.push(y.MONTH);
            this.Beds_Butterfly_House_CNT.push(y.Butterfly_House_CNT);
            this.Beds_CASA_Womens_Shelter_CNT.push(y.CASA_Womens_Shelter_CNT);
            this.Beds_Cornerstone_Transition_Home_CNT.push(y.Cornerstone_Transition_Home_CNT);
            this.Beds_Freshly_Renewed_Women_CNT.push(y.Freshly_Renewed_Women_CNT);
            this.Beds_Phoenix_Recovery_CNT.push(y.Phoenix_Recovery_CNT);
            this.Beds_Quality_Living_Center_2_CNT.push(y.Quality_Living_Center_2_CNT);
            this.Beds_Shalom_Recovery_Centers_CNT.push(y.Shalom_Recovery_Centers_CNT);
        });
        if (res.length > 0) {
            setTimeout(() => {
                // tslint:disable-next-line:max-line-length
                this.Beds_Butterfly_House_CNT.reduce((sum, c) => sum + c) > 0 ? this.bedsMarkedAvailabilityByHouseData.push({ data: this.Beds_Butterfly_House_CNT, label: this.chartconfig.BUTTERFLY_HOUSE }) : this.Beds_Butterfly_House_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Beds_CASA_Womens_Shelter_CNT.reduce((sum, c) => sum + c) > 0 ? this.bedsMarkedAvailabilityByHouseData.push({ data: this.Beds_CASA_Womens_Shelter_CNT, label: this.chartconfig.CASA_WOMENS_SHELTER }) : this.Beds_CASA_Womens_Shelter_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Beds_Cornerstone_Transition_Home_CNT.reduce((sum, c) => sum + c) > 0 ? this.bedsMarkedAvailabilityByHouseData.push({ data: this.Beds_Cornerstone_Transition_Home_CNT, label: this.chartconfig.CORNERSTONE_TRANSITION_HOME }) : this.Beds_Cornerstone_Transition_Home_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Beds_Freshly_Renewed_Women_CNT.reduce((sum, c) => sum + c) > 0 ? this.bedsMarkedAvailabilityByHouseData.push({ data: this.Beds_Freshly_Renewed_Women_CNT, label: this.chartconfig.FRESHLY_RENEWED_WOMEN }) : this.Beds_Freshly_Renewed_Women_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Beds_Phoenix_Recovery_CNT.reduce((sum, c) => sum + c) > 0 ? this.bedsMarkedAvailabilityByHouseData.push({ data: this.Beds_Phoenix_Recovery_CNT, label: this.chartconfig.PHOENIX_RECOVERY }) : this.Beds_Phoenix_Recovery_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Beds_Quality_Living_Center_2_CNT.reduce((sum, c) => sum + c) > 0 ? this.bedsMarkedAvailabilityByHouseData.push({ data: this.Beds_Quality_Living_Center_2_CNT, label: this.chartconfig.QUALITY_LIVING_CENTER_2 }) : this.Beds_Quality_Living_Center_2_CNT = [];
                // tslint:disable-next-line:max-line-length
                this.Beds_Shalom_Recovery_Centers_CNT.reduce((sum, c) => sum + c) > 0 ? this.bedsMarkedAvailabilityByHouseData.push({ data: this.Beds_Shalom_Recovery_Centers_CNT, label: this.chartconfig.SHALOM_RECOVERY_CENTERS }) : this.Beds_Shalom_Recovery_Centers_CNT = [];
            }, 300);
            this.isBedMarkedHouseData = true;
        } else { this.isBedMarkedHouseData = false; }
    }


    ngOnInit() {

    }

    ngAfterViewInit() {

        this.renderChart();
    }

    renderChart(): any {
        setTimeout(() => {
            this.getFromDate = new Date(localStorage.getItem('fromDate'));
            this.getToDate = new Date(localStorage.getItem('toDate'));
            // this.dateHeaderValue.bsFromValue = this.getFromDate;
            // this.dateHeaderValue.bsToValue = this.getToDate;

            this.dateHeaderValue.bsRangeValue = [this.getFromDate, this.getToDate];
            this.getTrendChartDataFromServices(this.getFromDate, this.getToDate);
        });
    }

    clearBedsMarkedAvailabilityData(): any {
        this.bedsMarkedAvailabilityByHouseLabels = [];
        this.bedsMarkedAvailabilityByHouseData = [];
        this.Beds_Butterfly_House_CNT = [];
        this.Beds_CASA_Womens_Shelter_CNT = [];
        this.Beds_Cornerstone_Transition_Home_CNT = [];
        this.Beds_Freshly_Renewed_Women_CNT = [];
        this.Beds_Phoenix_Recovery_CNT = [];
        this.Beds_Quality_Living_Center_2_CNT = [];
        this.Beds_Shalom_Recovery_Centers_CNT = [];
    }
}
