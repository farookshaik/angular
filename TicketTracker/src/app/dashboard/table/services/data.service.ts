import { Injectable, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, config } from 'rxjs';
import { Issue } from '../models/issue';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'config';
import { AlertDialogComponent } from '../dialogs/alert/alert.dialog.component';
import { DashBoardCountRecordData } from 'app/shared/models/dashboardcount_recorddata.model';

var headers = new Headers({
  "Content-Type": "application/json",
  "Accept": 'application/json'
});

@Injectable()
export class DataService {
  private readonly API_URL = 'https://api.github.com/repos/angular/angular/issues';

  dataChange: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  id_user: any;
  statusMessage: any;

  constructor(private httpClient: HttpClient, private alertDialog: AlertDialogComponent) {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.id_user = currentUser.UserID;

  }

  get data(): Issue[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): void {
    const body = { cd_status: '', dtFrom: '', dtto: '', id_user: this.id_user, 'row_from': 0, 'row_to': 0 };

    this.httpClient.post<Issue[]>(AppConfig.apiUrl + 'timetracker/getTaskListNew', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).subscribe(data => {
      console.log(data['result']);
      this.dataChange.next(data['result']);

    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });



  }

  // DEMO ONLY, you can find working methods below
  addIssue(issue: Issue): void {
    this.dialogData = issue;
  }

  updateIssue(issue: Issue): void {
    this.dialogData = issue;
  }

  deleteIssue(issue: Issue): void {
    this.dialogData = issue;
  }

  addItem(issue: Issue): void {
    issue.id_user = this.id_user;
    this.httpClient.post(AppConfig.apiUrl + 'timetracker/AddNewTask', issue, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).subscribe(data => {
      if (data['status'][0].message_code === 'F') {
        this.alertDialog.onShowErrorMessage(data['status'][0].message_description);
        this.statusMessage = data['status'][0].message_code;
      } else {
        this.dialogData = issue;
        this.alertDialog.onShowMessage('Your Ticket has been Added');
        this.statusMessage = data['status'][0].message_code;
      }
    },
      (err: HttpErrorResponse) => {
        this.alertDialog.onShowErrorMessage('Error occurred. Details: ' + err.name + ' ' + err.message);
        this.statusMessage = 'F';
      });
    return this.statusMessage;
  }

  UpdateItem(issue: Issue): void {
    issue.id_user = this.id_user;
    this.httpClient.post(AppConfig.apiUrl + 'timetracker/UpdateTask', issue, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).subscribe(data => {
      this.dialogData = issue;
      //  this.alertDialog.onShowMessage('Your Ticket has been Updated');
    },
      (err: HttpErrorResponse) => {
        this.alertDialog.onShowMessage('Error occurred. Details: ' + err.name + ' ' + err.message);
      });
  }

  DeleteTicket(issue: Issue): void {
    issue.id_user = this.id_user;
    this.httpClient.post(AppConfig.apiUrl + 'timetracker/RemoveTask', issue, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).subscribe(data => {
      this.dialogData = issue;
      // this.alertDialog.onShowMessage('Your Ticket has been Deleted');
    },
      (err: HttpErrorResponse) => {
        this.alertDialog.onShowMessage('Error occurred. Details: ' + err.name + ' ' + err.message);
      });
  }





}



/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:

    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/




