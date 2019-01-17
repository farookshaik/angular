// tslint:disable-next-line:max-line-length
import { Component, OnInit, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DashboardService } from '../../services/dashboard.service';
import { PageHeaderComponent } from '../../shared/modules/page-header/page-header.component';
import { IOverDueApplication } from '../../model/ioverdueapplication';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    @ViewChildren(PageHeaderComponent) dateHeaderValue: PageHeaderComponent;
    houses: IOverDueApplication[];
    fromDate: Date;
    toDate: Date;
    isData = false;
    p: { [id: string]: number } = {};
    @ViewChild('myTable') table: any;
    rows: any[] = [];
    expanded: any = {};
    total: number;
    constructor(private tservice: DashboardService) {

    }

    pageChanged(page: number) {

    }


    getTableDataFromServices() {
        this.rows = [];
        this.tservice.getOverdueApplicationsByHouses().subscribe((data: any[]) => {
            this.houses = data;
            this.rows = data;
            if (this.rows.length > 0) {
                this.isData = true;
            } else {
                this.isData = false;
            }
        });
    }


    ngOnInit() {
        this.getTableDataFromServices();
    }


    toggleExpandRow(row: any) {
        this.table.rowDetail.toggleExpandRow(row);
    }

    onDetailToggle(event: any) {

    }

    getRowDetailsHeight(row: any): number {
        if (row) {
            return row.someHeight;
        }
    }

    getRowHeight(row) {
        if (!row) { return 150; }
        if (row.height === undefined) { return 150; }
        return row.height;
    }



}
