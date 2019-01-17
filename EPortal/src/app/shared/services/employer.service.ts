import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../../../config';
import { ResponseContentType, ResponseType } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/pdf',
    'Accept': "application/pdf"

  })
};

@Injectable()
export class EmployerService {

  constructor(private http: HttpClient) { }

  getServiceEmployerRecords(input)  {
    return this
      .http
      .post(`${AppConfig.apiUrl}/otherparty/getEmpListGridDetails`, input);
  }

  getServiceMemberRecords(input) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/otherparty/getReportGridDetails`, input);
  }

  getServiceEmployerProfileRecords(input) {
    return this
      .http
      .post(`${AppConfig.apiUrl}/otherparty/getEmpListGridHeader`, input);
  }

  getNoticeRecords(input): Observable<any> {
    // return this
    //   .http
    //   .post(`${AppConfig.noticeapiUrl}/notice/generatenotice`, input, httpOptions);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${AppConfig.noticeapiUrl}/notice/generatenoticeforbarcode/` + input, input, {
      responseType: "blob",
      headers: new HttpHeaders().append("Content-Type", "application/pdf")
    });




  }

}

