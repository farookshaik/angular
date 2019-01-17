import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { Utility } from '../common/utility';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/xml',
        'Accept': 'application/xml',
        'Response-Type': 'text',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Origin': 'http://192.168.180.63:4200',
        'Access-Control-Allow-Credentials': 'true'
    })
};
@Component({
    selector: 'app-layout',
    template: `
    <app-header (onFDateChange)='onFromDateChangeEvent($event)' (onTDateChange)='onToDateChangeEvent($event)'></app-header>
    <app-sidebar (collapsedEvent)="receiveCollapsed($event)"></app-sidebar>
    <section class="main-container" [ngClass]="{collapsed: collapedSideBar}">
        <router-outlet></router-outlet>
    </section>
    `,
    styleUrls: ['./layout.component.scss']

})
export class LayoutComponent implements OnInit {
    userID: string;
    model: any = {};
    collapedSideBar: boolean;

    constructor(public router: Router, private tservice: DashboardService) { }

    ngOnInit() {
        

    }

  
    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }

    onFromDateChangeEvent(inputdate) {
    }
    onToDateChangeEvent(inputdate) {

    }




}
