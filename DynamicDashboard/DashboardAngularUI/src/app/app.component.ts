import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utility } from './common/utility';
import { DashboardService } from './services/dashboard.service';
import { NgxSpinnerService } from 'ngx-spinner';


export let browserRefresh = false;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    userID: string;
    model: any = {};
    info: string;
    constructor(public route: ActivatedRoute, private tservice: DashboardService, private spinner: NgxSpinnerService) {

    }

    ngOnInit() {
        console.log(localStorage.getItem('userID'));
        this.route.queryParams.subscribe(params => {
            this.userID = params['userID'];

            if (this.userID !== undefined) {
                this.navigateURL(this.userID);

            } else {
                this.navigateURL(localStorage.getItem('userID'));
            }
        });
    }

    navigateURL(userID) {
        if (userID == null) {
            this.info = 'User Not Found';
            this.spinner.show();
            return false;
        }
        if (userID !== undefined) {
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('userID', userID);
            this.info = 'Loading...';
            this.loadTHReports();
        } else {
            this.info = 'User Not Found';
            this.spinner.show();
        }
    }

    loadTHReports(): any {
        this.spinner.show();
        setTimeout(() => {
            this.tservice.loadTHReports().subscribe(res => {
                this.spinner.hide();
                //  this.router.navigate(['/charts']);
            });
        }, 2500);
    }

    ngOnDestroy() {

    }
}
