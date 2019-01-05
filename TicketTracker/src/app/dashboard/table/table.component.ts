import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DataService } from './services/data.service';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Issue } from './models/issue';
import { DataSource } from '@angular/cdk/collections';
import { AddDialogComponent } from './dialogs/add/add.dialog.component';
import { EditDialogComponent } from './dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete.dialog.component';
import { fromEvent, BehaviorSubject, Observable, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AlertDialogComponent } from './dialogs/alert/alert.dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [AlertDialogComponent]
})
export class TableComponent implements OnInit {
  displayedColumns = ['ticketno', 'ticketdesc', 'cdstatus', 'dtcreate', 'dtdue', 'esthrs', 'actions'];
  exampleDatabase: DataService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  ticketno: string;


  editing = {};


  constructor(public httpClient: HttpClient,
    public dialog: MatDialog,
    public dataService: DataService, private _alertDialog: AlertDialogComponent, private changeDetectorRefs: ChangeDetectorRef) { }

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
    } else {
      return 'Work in Progress';
    }
  }

  refresh() {
    this.loadData();
  }

  addNew(issue: Issue) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: { issue: issue }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {

        const statusMessage = this.exampleDatabase.addItem(this.dataService.getDialogData());
        // this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        console.log(statusMessage);
        setTimeout(() => {
          this.loadData();
          this.refreshTable();
          this.changeDetectorRefs.detectChanges();

        }, 500);
      }
    });
  }

  startEdit(i: number, ticketno: string, ticketdesc: string, cdstatus: string, dtcreate: string, dtdue: string, esthrs: number) {
    this.ticketno = ticketno;
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditDialogComponent, {
      // tslint:disable-next-line:max-line-length
      data: { ticketno: ticketno, ticketdesc: ticketdesc, cdstatus: cdstatus, dtcreate: dtcreate, dtdue: dtdue, esthrs: esthrs }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        //   const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.ticketno === this.ticketno);
        //  this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // this.refreshTable();
        this.exampleDatabase.UpdateItem(this.dataService.getDialogData());
        setTimeout(() => {
          this.loadData();
          this.refreshTable();
          this.changeDetectorRefs.detectChanges();
          this._alertDialog.onShowMessage('Your Ticket has been Updated');
        }, 500);
      }
    });
  }

  deleteItem(i: number, ticketno: string, ticketdesc: string, dtcreate: string, dtdue: string, esthrs: number) {
    this.ticketno = ticketno;
    this.index = i;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { ticketno: ticketno, ticketdesc: ticketdesc, dtcreate: dtcreate, dtdue: dtdue, esthrs: esthrs }
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
    this.exampleDatabase = new DataService(this.httpClient, this._alertDialog);
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

export class ExampleDataSource extends DataSource<Issue> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: Issue[] = [];
  renderedData: Issue[] = [];

  constructor(public _exampleDatabase: DataService,
    public _paginator: MatPaginator,
    public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  connect(): Observable<Issue[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._exampleDatabase.getAllIssues();

    return merge(...displayDataChanges).pipe(map(() => {
      this.filteredData = this._exampleDatabase.data.slice().filter((issue: Issue) => {
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


  sortData(data: Issue[]): Issue[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'ticketno': [propertyA, propertyB] = [a.ticketno, b.ticketno]; break;
        case 'ticketdesc': [propertyA, propertyB] = [a.ticketdesc, b.ticketdesc]; break;
        case 'cdstatus': [propertyA, propertyB] = [a.cdstatus, b.cdstatus]; break;
        case 'dtcreate': [propertyA, propertyB] = [a.dtcreate, b.dtcreate]; break;
        case 'dtdue': [propertyA, propertyB] = [a.dtdue, b.dtdue]; break;
        case 'esthrs': [propertyA, propertyB] = [a.esthrs, b.esthrs]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }

}
