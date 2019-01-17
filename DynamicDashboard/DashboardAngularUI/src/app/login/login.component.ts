import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Utility } from '../common/utility';
import { WebStorage } from '../common/web.storage';
import { DashboardService } from '../services/dashboard.service';
import { AppConfig } from '../../config';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    userID: string;
    model: any = {};
    constructor(public router: Router, private tservice: DashboardService) {


    }

    navigateURL(href) {
        if (href !== '') {
            var queryJSON = Utility.parseQueryString(href);
            this.userID = queryJSON.userID;
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('userID', this.userID);
            this.loadTHReports();

        }
    }
    loadTHReports(): any {
        setTimeout(() => {
            this.tservice.loadTHReports().subscribe(res => {
                this.router.navigate(['/charts']);
            });
        });
    }

    ngOnInit() {

        this.navigateURL(window.location.search);



        // if (typeof (queryJSON['caseid']) == 'string' && !window.location.hash.match('access_token')) {
        //     WebStorage.setItem('CaseID', queryJSON['caseid']);
        //     this.tservice.setApplicationDataByKey('CaseID', queryJSON['caseid'])
        // }
        // else if (typeof (queryJSON['caseid']) != 'string' && !window.location.hash.match('access_token')) {
        //     WebStorage.setItem('CaseID', AppConfig.CaseId);
        // }
        // if (AppConfig.isProduction) {
        //     this.InitiateGlueAuth(window["OIDC"]);
        //     this.router.navigate(['/charts']);
        // }
        // else {
        //     WebStorage.setItem("isUserAvailable", "true");
        //     this.router.navigate(['/charts']);
        // }
    }
    InitiateGlueAuth = function (OIDC) {
        var savedHash, idToken, accessToken, idTokenClaims, expires, userInfo = {};

        var globals = globals != 'undefined' ? globals : {};

        if (!window.location.hash.match('access_token')) {
            var clientInfo = {
                client_id: AppConfig.GluClientID,
                redirect_uri: AppConfig.RedirectURI
            };
            var providerInfo = OIDC.discover(AppConfig.GluUrl);
            OIDC.setClientInfo(clientInfo);
            OIDC.setProviderInfo(providerInfo);
            OIDC.storeInfo(providerInfo, clientInfo);

            // Remove State and Nonce from previous session
            WebStorage.removeItem('state');
            WebStorage.removeItem('nonce');

            // save the original location hash and search for restore after login
            WebStorage.setItem('savedHash', window.location.hash);

            // OIDC.login({ scope: 'openid profile email', response_type: 'token id_token' });

        }
        else {
            this.tservice.setLoader(true);
            OIDC.restoreInfo();
            try {
                if (WebStorage.getItem("CaseID")) {
                }
                try {
                    idToken = OIDC.getValidIdToken();
                    accessToken = OIDC.getAccessToken();
                    idTokenClaims = JSON.parse(OIDC.getIdTokenParts(idToken)[1]);
                    expires = idTokenClaims.exp;
                    userInfo = JSON.parse(OIDC.getUserInfo(accessToken));
                    var currentUser = {
                        Ticket: accessToken
                    };
                    WebStorage.setItem("currentUser", JSON.stringify(currentUser));
                    sessionStorage.setItem("userToken", idToken);
                    WebStorage.setItem("isUserAvailable", "true");

                    this.tservice.setLoginStatus(true);
                    this.tservice.setMessage("Login Successfully", "S");
                }
                catch (e) {
                    e.code = 'invalid_token';
                    console.log('invalid_token error', e);
                    this.router.navigate(['/login']);
                    this.tservice.setLoginStatus(false);
                    return;
                }
                WebStorage.setItem("EmailAddress", userInfo["email"]);
                var input = { 'ContactEml': userInfo["email"] };
                // this.AppService.GetUserInformation(input).subscribe(result => {
                //     this.userInformationCallback(result);
                // });
                this.tservice.setLoader(false);
            }
            catch (e) {
                console.log('Exception : ', e);
                return;
            }
        }
    };

    userInformationCallback = function (result) {
        // result["UserID"] = "UEC54827";
        WebStorage.setItem("WorkerID", result["UserID"]);
        this.tservice.setApplicationDataByKey("WorkerID", result["UserID"])
        this.appStartInst.Load(false);
    }

    onLoggedin() {
        if (localStorage.getItem('userID') !== "undefined") {
            this.navigateURL('?userID=' + this.model.UserID);
        } else { this.navigateURL('?userID=' + this.model.UserID); }
    }
}
