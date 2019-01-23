import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AlertDialogComponent } from '../table/dialogs/alert/alert.dialog.component';
import { VTicketService } from './services/viewticket-service';
import { VTicketDataModel } from './models/viewticket-model';
import { AppConfig } from 'config';


@Component({
  selector: 'app-viewtickets',
  templateUrl: './vticket.component.html',
  styleUrls: ['./vticket.component.css', './vticket.component.scss'],
  providers: [AlertDialogComponent]
})
export class ViewTicketComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['ticketno', 'ticketdesc', 'tickettype', 'assignee', 'cdstatus', 'dtassigned', 'dtrecived', 'spenthrs', 'userid'];
  exampleDatabase: VTicketService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  ticketno: string;
  public statusData = [
    { "name": 'Open', "value": 'O' },
    { "name": 'Completed', "value": 'C' },
    { "name": 'Work in Progress', "value": 'W' }

  ];
  selectedTicketTypeValue: string;
  selectedUserValue: string;
  TicketTypeData = [];
  id_user: any;

  // tslint:disable-next-line:member-ordering
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  cd_status: any;
  dtFrom: any;
  dtTo: any;

  constructor(public httpClient: HttpClient,
    public dialog: MatDialog,
    public dataService: VTicketService, private _alertDialog: AlertDialogComponent, private changeDetectorRefs: ChangeDetectorRef) {

    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (currentUser.UserID === AppConfig.admin) {
      this.id_user = '';
    } else {
      this.id_user = currentUser.UserID;
    }
    this.selectedUserValue = currentUser.UserID;
  }

  ngOnInit() {
    this.getUserList();
    this.loadData(this.id_user, '', this.dtFrom, this.dtTo);

  }

  getUserList() {
    const body = { seqid: '' };
    this.httpClient.post<any[]>(AppConfig.apiUrl + 'timetracker/SelectUserList', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).subscribe(data => {
      this.TicketTypeData = data['result']
    }, (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
  }


  onChangeUserID(value: string) {
    this.id_user = value
    this.selectedUserValue = value;
    this.selectedTicketTypeValue = this.cd_status;
    this.loadData(this.id_user, this.cd_status, this.dtFrom, this.dtTo);
  }

  onChangeStatus(value: string) {
    this.cd_status = value;
    this.selectedUserValue = this.id_user;
    this.selectedTicketTypeValue = this.cd_status;
    this.loadData(this.id_user, this.cd_status, this.dtFrom, this.dtTo);
  }

  OnSelectDateRange(value: { begin: any; end: any; }) {
    this.dtFrom = value.begin;
    this.dtTo = value.end
    this.loadData(this.id_user, this.cd_status, this.dtFrom, this.dtTo);
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
    this.loadData(this.id_user, this.cd_status, this.dtFrom, this.dtTo);
  }
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }

  public loadData(iduser, cdstatus, dtFrom, dtTo) {
    this.exampleDatabase = new VTicketService(this.httpClient, this._alertDialog);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort, iduser, cdstatus, dtFrom, dtTo);
  }
}

export class ExampleDataSource extends DataSource<VTicketDataModel> {
  _filterChange = new BehaviorSubject('');
  cd_status: any;
  dtFrom: any;
  dtTo: any;
  convertFromDate: Date;
  convertToDate: Date;
  id_user: any;

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }


  filteredData: VTicketDataModel[] = [];
  renderedData: VTicketDataModel[] = [];

  constructor(public _exampleDatabase: VTicketService,
    public _paginator: MatPaginator, public _sort: MatSort, iduser, cdstatus, dtFrom, dtTo
  ) {
    super();
    this.id_user = iduser
    this.cd_status = cdstatus;
    this.dtFrom = dtFrom;
    this.dtTo = dtTo;
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  connect(): Observable<VTicketDataModel[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];


    this._exampleDatabase.getAllIssues(this.filteredInput());

    return merge(...displayDataChanges).pipe(map(() => {
      this.filteredData = this._exampleDatabase.data.slice().filter((issue: VTicketDataModel) => {
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
    if (this.dtFrom === undefined && this.dtTo === undefined) {
      this.dtFrom = '';
      this.dtTo = '';
    } else {
      this.convertFromDate = new Date(this.dtFrom);
      this.convertToDate = new Date(this.dtTo);
      this.dtFrom = this.convertFromDate.toISOString();
      this.dtTo = this.convertToDate.toISOString();
    }
    // tslint:disable-next-line:max-line-length
    const body = { assignee: '', cd_status: this.cd_status, dtFrom: this.dtFrom, dtto: this.dtTo, id_user: this.id_user, row_from: 0, row_to: 0 };
    return body;
  }

  disconnect() { }

  sortData(data: VTicketDataModel[]): VTicketDataModel[] {
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
        case 'dtassigned': [propertyA, propertyB] = [a.dtassigned, b.dtassigned]; break;
        case 'dtrecived': [propertyA, propertyB] = [a.dtrecived, b.dtrecived]; break;
        case 'spenthrs': [propertyA, propertyB] = [a.spenthrs, b.spenthrs]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
