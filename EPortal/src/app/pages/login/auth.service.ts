import { Injectable } from '@angular/core';
import { EmployerProfileInData } from '../../shared/components/profile/profile-in-data.model';
import { EmployerService } from '../../shared/services/employer.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    public employerProfileInData: EmployerProfileInData;
    public employerProfileRecordData: any;
    constructor(private router: Router, private eService: EmployerService) { }

    login(othpID: string, password: string) {
        this.httpassignValue(othpID, password);
        this.eService.getServiceEmployerProfileRecords(this.employerProfileInData)
            .subscribe(data => {
                this.employerProfileRecordData = data['result'];
                if (this.employerProfileRecordData.otherparty_name != null) {
                    localStorage.setItem('currentEmployer', JSON.stringify(this.employerProfileRecordData['otherparty_name']));
                    localStorage.setItem('currentEmployerID', this.employerProfileInData.othp_id);
                    this.router.navigate(['/pages/profile']);
                }
            })

    }

    httpassignValue(othpID, password): any {
        this.employerProfileInData = new EmployerProfileInData();
        this.employerProfileInData.othp_id = othpID;
        this.employerProfileInData.fein_id = '';
        this.employerProfileInData.row_from = 1;
        this.employerProfileInData.row_to = 10;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentEmployer');
    }
}