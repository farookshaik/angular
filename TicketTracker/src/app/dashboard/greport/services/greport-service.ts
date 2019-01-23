import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'config';
import { AlertDialogComponent } from 'app/dashboard/table/dialogs/alert/alert.dialog.component';
import { GReportDataModel } from '../models/greport-model';




@Injectable()
export class GReportService {
  dataChange: BehaviorSubject<GReportDataModel[]> = new BehaviorSubject<GReportDataModel[]>([]);

  dialogData: any;
  id_user: any;
  statusMessage: any;
  constructor(private httpClient: HttpClient, private alertDialog: AlertDialogComponent) {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.id_user = currentUser.UserID;
  }
  get data(): GReportDataModel[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getReport(formData: any): void {
    // const body = { assignee: '', cd_status: '', dtFrom: '', dtto: '', id_user: this.id_user, row_from: 0, row_to: 0 };
    this.httpClient.post<GReportService[]>(AppConfig.apiUrl + 'timetracker/GenerateReport', formData, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).subscribe(data => {
      this.dataChange.next(data['result']);
    }, (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
  }


}
