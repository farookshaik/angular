import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../../config';
import { Subject } from 'rxjs';
import { WebStorage } from '../common/web.storage';

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

  //Load THDATA

  loadTHReports() {

    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/loadTHReports`, null, httpOptions);
  }

  // Table
  getOverdueApplicationsByHouses() {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetOverdueApplicationsByHouse`, null, httpOptions);
  }




  getInput(fromDate, toDate) {
    fromDate = fromDate.toLocaleDateString();
    toDate = toDate.toLocaleDateString();
    return JSON.stringify({ fromDate, toDate });
  }

  //Bar
  getTotalApplicationsByUnit(fromDate, toDate) {
    return this
      .http
      // tslint:disable-next-line:max-line-length
      .post(`${AppConfig.apiUrl}/THReports/GetTotalApplicationsByUnit`, this.getInput(fromDate, toDate), httpOptions);
  }
  getTotalapplicationResponseByHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalApplicationsByHouse`, this.getInput(fromDate, toDate), httpOptions);
  }
  getapplicationResponseByHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalApplicationsResponseByHouse`, this.getInput(fromDate, toDate), httpOptions);
  }
  getTotalResponseTimeByHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalResponseTimeByHouse`, this.getInput(fromDate, toDate), httpOptions);
  }
  getBedsMarkedAvailabilityByHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetBedsMarkedAvailabilityByHouse`, this.getInput(fromDate, toDate), httpOptions);
  }

  //Pie
  getButterflyHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalButterFlyResponseByHouse`, this.getInput(fromDate, toDate), httpOptions);
  }

  getCornerstoneHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalCornerstoneTransitionHomeByHouse`, this.getInput(fromDate, toDate), httpOptions);
  }

  getCasaWomenShelterByHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalCasaWomenShelterByHouse`, this.getInput(fromDate, toDate), httpOptions);
  }

  getPhoenixRecoveryHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalPhoenixRecoveryWomenByHouse`, this.getInput(fromDate, toDate), httpOptions);
  }

  getfreshlyRenewedWomenHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalFreshlyRenewedWomenByHouse`, this.getInput(fromDate, toDate), httpOptions);
  }

  getoMARTHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalOMARTByHouse`, this.getInput(fromDate, toDate), httpOptions);
  }

  getqualityLivingCenterHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalQualityLivingCenterByHouse`, this.getInput(fromDate, toDate), httpOptions);
  }

  getshalomRecoveryCentersHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalShalomRecoveryCentersByHouse`, this.getInput(fromDate, toDate), httpOptions);
  }

  getsoberLivingHouse(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalSoberLivingByHouse`, this.getInput(fromDate, toDate), httpOptions);
  }

  //Trend

  getTotalApplicationbyUnitService(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalApplicationsByInmateUnit`, this.getInput(fromDate, toDate), httpOptions);
  }
  getTotalApplicationByHouseService(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetTotalApplicationsOver3MonthsByHouse`, this.getInput(fromDate, toDate), httpOptions);
  }

  getAverageResponseByHouseService(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetAverageResponseOver3MonthsByHouse`, this.getInput(fromDate, toDate), httpOptions);
  }


  getBedsMarkedAvailabilityByHouseService(fromDate, toDate) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/THReports/GetBedsMarkedAvailabilityOverMonths`, this.getInput(fromDate, toDate), httpOptions);
  }

}

