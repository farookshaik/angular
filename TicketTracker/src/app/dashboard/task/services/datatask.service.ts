import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'config';
import { AlertDialogComponent } from 'app/dashboard/table/dialogs/alert/alert.dialog.component';
import { TaskIssue } from '../models/taskissue';

var headers = new Headers({
  "Content-Type": "application/json",
  "Accept": 'application/json'
});

@Injectable()
export class DataTaskService {


  dataChange: BehaviorSubject<TaskIssue[]> = new BehaviorSubject<TaskIssue[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  id_user: any;
  statusMessage: any;

  constructor(private httpClient: HttpClient, private alertDialog: AlertDialogComponent) {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.id_user = currentUser.UserID;

  }

  get data(): TaskIssue[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): void {
    const body = { assignee: '', cd_status: '', dtFrom: '', dtto: '', id_user: this.id_user, row_from: 0, row_to: 0 };

    this.httpClient.post<TaskIssue[]>(AppConfig.apiUrl + 'timetracker/getUITaskList', body, {
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
  addIssue(issue: TaskIssue): void {
    this.dialogData = issue;
  }

  updateIssue(issue: TaskIssue): void {
    this.dialogData = issue;
  }

  deleteIssue(issue: TaskIssue): void {
    this.dialogData = issue;
  }

  addItem(issue: TaskIssue): void {
    issue.id_user = this.id_user;
    this.httpClient.post(AppConfig.apiUrl + 'timetracker/AddNewUITask', issue, {
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

  UpdateItem(issue: TaskIssue): void {
    issue.id_user = this.id_user;
    this.httpClient.post(AppConfig.apiUrl + 'timetracker/UpdateUITask', issue, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).subscribe(data => {
      this.dialogData = issue;
      this.alertDialog.onShowMessage('Your Ticket has been Updated');
    },
      (err: HttpErrorResponse) => {
        this.alertDialog.onShowErrorMessage('Error occurred. Details: ' + err.name + ' ' + err.message);
      });
  }

  DeleteTicket(issue: TaskIssue): void {
    issue.id_user = this.id_user;
    this.httpClient.post(AppConfig.apiUrl + 'timetracker/RemoveUITask', issue, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).subscribe(data => {
      this.dialogData = issue;
      // this.alertDialog.onShowMessage('Your Ticket has been Deleted');
    },
      (err: HttpErrorResponse) => {
        this.alertDialog.onShowErrorMessage('Error occurred. Details: ' + err.name + ' ' + err.message);
      });
  }





}




