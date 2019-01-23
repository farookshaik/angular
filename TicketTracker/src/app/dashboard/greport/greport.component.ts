import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AlertDialogComponent } from '../table/dialogs/alert/alert.dialog.component';
import { GReportDataModel } from './models/greport-model';
import { GReportService } from './services/greport-service';
import { AppConfig } from 'config';
import * as XLSX from 'xlsx';
import { ExcelService } from './services/excel.service';

@Component({
  selector: 'app-greport',
  templateUrl: './greport.component.html',
  styleUrls: ['./greport.component.css', './greport.component.scss'],
  providers: [AlertDialogComponent]
})
export class GReportComponent implements OnInit {
  // tslint:disable-next-line:member-ordering
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('TABLE', { read: ElementRef }) table: ElementRef;

  // tslint:disable-next-line:max-line-length
  displayedColumns = ['ticketno', 'ticketdesc', 'tickettype', 'assignee', 'cdstatus', 'dtassigned', 'dtrecived', 'spenthrs'];
  exampleDatabase: GReportService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  ticketno: string;
  public statusData = [
    { "name": 'ALL', "value": '' },
    { "name": 'API', "value": 'A' },
    { "name": 'UI', "value": 'U' }
  ];


  selectedTicketTypeValue: string;
  id_user: any;
  cd_type: any;
  dtFrom: any;
  dtTo: any;

  constructor(public httpClient: HttpClient,
    public dialog: MatDialog,
    // tslint:disable-next-line:max-line-length
    public dataService: GReportService, private _alertDialog: AlertDialogComponent, private changeDetectorRefs: ChangeDetectorRef, private excelService: ExcelService) {

    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (currentUser.UserID === AppConfig.admin) {
      this.id_user = '';
    } else {
      this.id_user = currentUser.UserID;
    }
  }

  ngOnInit() {

    this.loadData(this.cd_type, this.dtFrom, this.dtTo);

  }

  onChangeStatus(value: any) {
    this.cd_type = value;
    this.selectedTicketTypeValue = this.cd_type;
    this.loadData(this.cd_type, this.dtFrom, this.dtTo);

  }

  OnSelectDateRangeReport(value: { begin: any; end: any; }) {
    this.dtFrom = value.begin;
    this.dtTo = value.end
    this.loadData(this.cd_type, this.dtFrom, this.dtTo);
  }

  ExportTOExcel() {
    this.excelService.exportAsExcelFile(this.exampleDatabase.data, 'todayreport');

  }
  print() {
    // let doc = new jsPDF();
    // doc.autoTable({
    //   head: [['Log', '', 'Amount']],
    //   body: [["log1", "$100"], ["log2", "$200"]]
    // });
    // doc.save('table.pdf')

  }

  getStatus(status: string) {
    if (status === 'O') {
      return 'Open';
    } else if (status === 'C') {
      return 'Completed';
    } else if (status === 'W') {
      return 'Work in Progress';
    }
  }

  refresh() {
    this.loadData(this.cd_type, this.dtFrom, this.dtTo);
  }

  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }


  public loadData(cd_type, dt_From, dt_To) {
    this.exampleDatabase = new GReportService(this.httpClient, this._alertDialog);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort, cd_type, dt_From, dt_To);

  }
}

export class ExampleDataSource extends DataSource<GReportDataModel> {
  _filterChange = new BehaviorSubject('');
  cd_type: any;
  dt_From: any;
  dt_To: any;
  convertFromDate: Date;
  convertToDate: Date;

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }




  filteredData: GReportDataModel[] = [];
  renderedData: GReportDataModel[] = [];

  constructor(public _exampleDatabase: GReportService,
    public _paginator: MatPaginator, public _sort: MatSort, cd_type, dt_From, dt_To
  ) {

    super();
    this.cd_type = cd_type;
    this.dt_From = dt_From;
    this.dt_To = dt_To;
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  connect(): Observable<GReportDataModel[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];


    this._exampleDatabase.getReport(this.filteredInput());

    return merge(...displayDataChanges).pipe(map(() => {
      this.filteredData = this._exampleDatabase.data.slice().filter((issue: GReportDataModel) => {
        const searchStr = (issue.ticketno).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });


      const sortedData = this.sortData(this.filteredData.slice());

      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
      return this.renderedData;
    }
    ));
  }

  filteredInput(): any {

    if (this.dt_From === undefined && this.dt_To === undefined) {
      this.dt_From = '';
      this.dt_From = '';
    } else {
      this.convertFromDate = new Date(this.dt_From);
      this.convertToDate = new Date(this.dt_To);
      this.dt_From = this.convertFromDate.toISOString();
      this.dt_To = this.convertToDate.toISOString();
    }

    // tslint:disable-next-line:max-line-length
    const body = { cdtype: this.cd_type, datefrom: this.dt_From, dateto: this.dt_To };
    return body;
  }

  disconnect() { }

  sortData(data: GReportDataModel[]): GReportDataModel[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: Date | number | string = '';
      let propertyB: Date | number | string = '';

      switch (this._sort.active) {
        case 'ticketno': [propertyA, propertyB] = [a.ticketno, b.ticketno]; break;
        case 'ticketdesc': [propertyA, propertyB] = [a.ticketdesc, b.ticketdesc]; break;
        case 'tickettype': [propertyA, propertyB] = [a.tickettype, b.tickettype]; break;
        case 'dtassign': [propertyA, propertyB] = [a.dtassign, b.dtassign]; break;
        case 'dtrecive': [propertyA, propertyB] = [a.dtrecive, b.dtrecive]; break;
        case 'hrsspent': [propertyA, propertyB] = [a.hrsspent, b.hrsspent]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }


}
