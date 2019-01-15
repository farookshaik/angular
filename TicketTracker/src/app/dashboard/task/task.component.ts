import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DataTaskService } from './services/datatask.service';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';

import { DataSource } from '@angular/cdk/collections';
import { fromEvent, BehaviorSubject, Observable, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AlertDialogComponent } from '../table/dialogs/alert/alert.dialog.component';
import { TaskIssue } from './models/taskissue';
import { AddTaskDialogComponent } from './dialogs/add/addtask.dialog.component';
import { EditTaskDialogComponent } from './dialogs/edit/edittask.dialog.component';
import { DeleteTaskDialogComponent } from './dialogs/delete/deletetask.dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [AlertDialogComponent]
})
export class TaskComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['ticketno', 'ticketdesc', 'tickettype', 'assignee', 'cdstatus', 'dtassigned', 'dtrecived', 'spenthrs', 'userid', 'actions'];
  exampleDatabase: DataTaskService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  ticketno: string;


  editing = {};


  constructor(public httpClient: HttpClient,
    public dialog: MatDialog,
    public dataService: DataTaskService, private _alertDialog: AlertDialogComponent, private changeDetectorRefs: ChangeDetectorRef) { }

  // tslint:disable-next-line:member-ordering
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // tslint:disable-next-line:member-ordering
  @ViewChild(MatSort) sort: MatSort;
  // tslint:disable-next-line:member-ordering
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.loadData();

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
    this.loadData();
  }

  addNew(issue: TaskIssue) {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      data: { issue: issue }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const statusMessage = this.exampleDatabase.addItem(this.dataService.getDialogData());
        console.log(statusMessage);
        setTimeout(() => {
          this.loadData();
          this.refreshTable();
          this.changeDetectorRefs.detectChanges();

        }, 500);
      }
    });
  }

  // tslint:disable-next-line:max-line-length
  startEdit(i: number, ticketno: string, ticketdesc: string, tickettype: string, assignee: string, cdstatus: string, dtassigned: Date, dtrecived: Date, spenthrs: number) {
    this.ticketno = ticketno;
    this.index = i;
    console.log(cdstatus);
    const dialogRef = this.dialog.open(EditTaskDialogComponent, {
      // tslint:disable-next-line:max-line-length
      data: { ticketno: ticketno, ticketdesc: ticketdesc, tickettype: tickettype, assignee: assignee, cdstatus: cdstatus, dtassigned: dtassigned, dtrecived: dtrecived, spenthrs: spenthrs }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.exampleDatabase.UpdateItem(this.dataService.getDialogData());
        setTimeout(() => {
          this.loadData();
          this.refreshTable();
          this.changeDetectorRefs.detectChanges();
          // this._alertDialog.onShowMessage('Your Ticket has been Updated');
        }, 500);
      }
    });
  }
  // tslint:disable-next-line:max-line-length
  deleteItem(i: number, ticketno: string, ticketdesc: string, tickettype: string) {
    this.ticketno = ticketno;
    this.index = i;
    const dialogRef = this.dialog.open(DeleteTaskDialogComponent, {
      // tslint:disable-next-line:max-line-length
      data: { ticketno: ticketno, ticketdesc: ticketdesc }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.ticketno === this.ticketno);
        // this.exampleDatabase.dataChange.value.splice(foundIndex, 1);

        this.exampleDatabase.DeleteTicket(this.dataService.getDialogData());
        setTimeout(() => {
          this.loadData();
          this.refreshTable();
          this.changeDetectorRefs.detectChanges();

          this._alertDialog.onShowMessage('Your Ticket has been Deleted');
        }, 500);

      }
    });
  }


  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }




  public loadData() {
    this.exampleDatabase = new DataTaskService(this.httpClient, this._alertDialog);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
      // .debounceTime(150)
      // .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}

export class ExampleDataSource extends DataSource<TaskIssue> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: TaskIssue[] = [];
  renderedData: TaskIssue[] = [];

  constructor(public _exampleDatabase: DataTaskService,
    public _paginator: MatPaginator,
    public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  connect(): Observable<TaskIssue[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._exampleDatabase.getAllIssues();

    return merge(...displayDataChanges).pipe(map(() => {
      this.filteredData = this._exampleDatabase.data.slice().filter((issue: TaskIssue) => {
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

  disconnect() { }


  sortData(data: TaskIssue[]): TaskIssue[] {
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
