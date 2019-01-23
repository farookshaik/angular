import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'config';
import { AlertDialogComponent } from 'app/dashboard/table/dialogs/alert/alert.dialog.component';
import { VTicketDataModel } from '../models/viewticket-model';



@Injectable()
export class VTicketService {
  dataChange: BehaviorSubject<VTicketDataModel[]> = new BehaviorSubject<VTicketDataModel[]>([]);

  dialogData: any;
  id_user: any;
  statusMessage: any;
  constructor(private httpClient: HttpClient, private alertDialog: AlertDialogComponent) {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.id_user = currentUser.UserID;
  }
  get data(): VTicketDataModel[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(formData: any): void {
    // const body = { assignee: '', cd_status: '', dtFrom: '', dtto: '', id_user: this.id_user, row_from: 0, row_to: 0 };
    this.httpClient.post<VTicketService[]>(AppConfig.apiUrl + 'timetracker/getUITaskList', formData, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).subscribe(data => {
      console.log(data['result']);
      this.dataChange.next(data['result']);
    }, (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
  }


}
