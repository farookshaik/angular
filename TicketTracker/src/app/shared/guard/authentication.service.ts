import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationInData } from '../models/authentication-in-data.model';
import { Observable } from 'rxjs';
import { AppConfig } from '../../../config';
import { UserDetailOutData } from '../models/usermodels/user-detail-out-data.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class AuthenticationService {
  apiBaseUrl: string = "";
  constructor(private _http: HttpClient) {
    this.apiBaseUrl = AppConfig.loginApiUrl;
  }

  Authenticate(input: AuthenticationInData): Observable<UserDetailOutData> {
    let url: string = this.apiBaseUrl + 'api/Authentication/Authenticate';
    return this._http.post<UserDetailOutData>(url, input);
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('AuthToken');
  }

  errorHandler(error: Response) {
    console.log(error);
  }
}
