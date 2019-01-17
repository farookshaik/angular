import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../config';
import { Subject } from 'rxjs';
import { WebStorage } from './common/web.storage';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  fromSDate: Date;
  toSDate: Date;
  constructor(private http: HttpClient) { }
  public FromRootContainer = new Subject<any>();
  public ToRootContainer = new Subject<any>();
  public applicationData = {
    "ApplicationID": "",
    "CaseID": "",
    "WorkerID": ""
  };


  getCaseID() {
    return WebStorage.getItem("CaseID");
  }

  getWorkerID() {
    return WebStorage.getItem("WorkerID");
  }

  getApplicationID() {
    return WebStorage.getItem("ApplicationNumber");
  }

  setApplicationData(data) {

    this.sendApplicationData();
  }

  setApplicationDataByKey(key, value) {
    this.applicationData[key] = value;
    this.sendApplicationData();
  }

  getApplicationData() {
    return this.applicationData;
  }

  sendApplicationData() {

    this.FromRootContainer.next(this.applicationData);
  }

  setLoginStatus(data) {
    this.ToRootContainer.next({ "type": "LOGIN", "value": data });
  }

  setMessage(msg, status) {
    this.ToRootContainer.next({ "type": "MSG", "data": { "msg": msg, "status": status } });
  }

  setFieldMessage(key, msg) {
    this.ToRootContainer.next({ "type": "FIELD_MSG", "data": { "key": key, "msg": msg } });
  }

  setLoader(isShow) {
    this.ToRootContainer.next({ "type": "LOADER", "data": isShow });
  }
  // Table
  getOverdueApplicationsByHouses() {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetOverdueApplicationsByHouse`, null, httpOptions);
  }

  //Bar
  getTotalApplicationsByUnit(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalApplicationsByUnit`, JSON.stringify({ fromDate, toDate }), httpOptions);
  }
  getTotalapplicationResponseByHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalApplicationsByHouse`, JSON.stringify({ fromDate, toDate }), httpOptions);
  }
  getapplicationResponseByHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalApplicationsResponseByHouse`, JSON.stringify({ fromDate, toDate }), httpOptions);
  }
  getTotalResponseTimeByHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalResponseTimeByHouse`, JSON.stringify({ fromDate, toDate }), httpOptions);
  }

  //Pie
  getButterflyHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalButterFlyResponseByHouse`, JSON.stringify({ fromDate, toDate }), httpOptions);
  }

  getCornerstoneHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalCornerstoneTransitionHomeByHouse`, JSON.stringify({ fromDate, toDate }), httpOptions);
  }

  getCasaWomenShelterByHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalCasaWomenShelterByHouse`, JSON.stringify({ fromDate, toDate }), httpOptions);
  }

  getPhoenixRecoveryHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalPhoenixRecoveryWomenByHouse`, JSON.stringify({ fromDate, toDate }), httpOptions);
  }

  getfreshlyRenewedWomenHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalFreshlyRenewedWomenByHouse`, JSON.stringify({ fromDate, toDate }), httpOptions);
  }

  getoMARTHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalOMARTByHouse`, JSON.stringify({ fromDate, toDate }), httpOptions);
  }

  getqualityLivingCenterHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalQualityLivingCenterByHouse`, JSON.stringify({ fromDate, toDate }), httpOptions);
  }

  getshalomRecoveryCentersHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalShalomRecoveryCentersByHouse`, JSON.stringify({ fromDate, toDate }), httpOptions);
  }

  getsoberLivingHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalSoberLivingByHouse`, JSON.stringify({ fromDate, toDate }), httpOptions);
  }
  
  //Trend

  getTotalApplicationbyInmateUnit(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalApplicationsByInmateUnit`, JSON.stringify({ fromDate, toDate }), httpOptions);
  }
  getTotalApplicationByHouseover3Months(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalApplicationsOver3MonthsByHouse`, JSON.stringify({ fromDate, toDate }), httpOptions);
  }

  getAverageResponseByHouseover3Months(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetAverageResponseOver3MonthsByHouse`, JSON.stringify({ fromDate, toDate }), httpOptions);
  }




}

