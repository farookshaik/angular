import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../../services/employer.service';
import { EmployerProfileRecordData } from './profile-record-data.model';
import { EmployerProfileAddressRecordData } from './profile-address-record-data.model';
import { EmployerProfileInData } from './profile-in-data.model';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [EmployerService]
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/org.jpg';
  public employerProfileRecordData: any;
  public employerProfileAddressRecordData: any;
  public employerProfileInData: EmployerProfileInData;
  constructor(private eService: EmployerService) { }

  ngOnInit() {
    this.employerProfileInData = new EmployerProfileInData();
    this.employerProfileInData.othp_id = localStorage.getItem('currentEmployerID');
    this.getEmployerProfile();

  }
  getEmployerProfile(): any {
    this.employerProfileRecordData = [];
    this.employerProfileAddressRecordData = [];
    this.eService.getServiceEmployerProfileRecords(this.employerProfileInData)
      .subscribe(data => {
        this.employerProfileRecordData = data['result'];
        this.employerProfileAddressRecordData = data['result']['address'];
      })
  }

}
