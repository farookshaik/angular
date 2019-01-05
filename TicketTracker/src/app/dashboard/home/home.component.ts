import { Component, OnInit } from '@angular/core';
import { DataService } from '../table/services/data.service';
import { DashBoardCountRecordData } from 'app/shared/models/dashboardcount_recorddata.model';
import { AppConfig } from 'config';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opencount: any;
  wipcount: any;
  compcount: any;
  totcount: any;
  id_user: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.id_user = currentUser.UserID;
    this.getDashboardData()

  }

  getDashboardData() {
    const body = { userid: this.id_user };
    this.httpClient.post(AppConfig.apiUrl + 'timetracker/Dashboardreport', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).subscribe(data => {
      this.opencount = data['result'].opencount;
      this.wipcount = data['result'].wipcount;
      this.compcount = data['result'].compcount;
      this.totcount = data['result'].totcount;
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
  }


}

