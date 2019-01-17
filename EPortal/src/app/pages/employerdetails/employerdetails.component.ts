import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { EmployerDetailsRecordData } from './employer-record-data.model';
import { EmployerSearchInData } from './employer-search-in-data.model';
import { AppConfig } from '../../../config';
import { PagerService } from '../common/pagerservice';
import { EmployerService } from '../../shared/services/employer.service';



@Component({
  selector: 'app-employerdetails',
  templateUrl: './employerdetails.component.html',
  styleUrls: ['./employerdetails.component.scss'],
  providers: [EmployerService]
})
export class EmployerDetailsComponent implements OnInit {

  public columnDefs: any[];
  public employersearchRecordData: any;
  public employersearchInData: any;
  /* pagination Info */
  public pageSize = 5;
  public pageNumber = 1;

  constructor(private eService: EmployerService) {

    this.columnDefs = [{ headerName: 'Member DCN' },
    { headerName: 'Member Name' },
    { headerName: 'SSN' },
    { headerName: 'Docket' },
    { headerName: 'County' },
    { headerName: 'Case ID' }

    ];
  }
  onEmployerSearch() {
    this.getEmployerRecords()

  }
  ngOnInit() {
    this.employersearchInData = new EmployerSearchInData();
    this.getEmployerRecords();
  }

  getEmployerRecords(): any {
    this.employersearchRecordData = [];
    this.eService.getServiceEmployerRecords(this.employersearchInData)
      .subscribe((data: any[]) => {
        this.employersearchRecordData = data['result'];

      })
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }



}
