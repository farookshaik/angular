import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployerService } from '../../shared/services/employer.service';
import { UpdateEmployerRecordData } from './updateemployer-record-data.model';
import { UpdateEmployerSearchInData } from './updateemployer-search-in-data.model';
import { PDFAnnotationData } from 'pdfjs-dist';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { NoticeConfig } from '../notices/noticeconfig';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateemployer',
  templateUrl: './updateemployer.component.html',
  styleUrls: ['./updateemployer.component.scss'],
  providers: [EmployerService]
})
export class UpdateEmployerComponent implements OnInit {

  bsFromValue = new Date();
  bsToValue = new Date();
  minDate: Date;
  maxDate: Date;
  selectedFromDate: Date;
  selectedToDate: Date;

  selectedRow: Number;
  error: any;
  rotation = NoticeConfig.rotation;
  zoom = NoticeConfig.zoom;
  originalSize = NoticeConfig.originalSize;
  pdf: any;
  renderText = NoticeConfig.renderText;
  stickToPage = NoticeConfig.stickToPage;
  showAll = false;
  autoresize = NoticeConfig.autoresize;
  fitToPage = NoticeConfig.fitToPage;
  outline: any[];
  isOutlineShown = NoticeConfig.isOutlineShown;
  pdfQuery = '';

  pageurl: SafeResourceUrl;

  buttonWasClicked: boolean = false;
  public IWResponsecolumnDefs: any[];
  public EmpVerificationcolumnDefs: any[];
  public employersearchRecordData: any;
  public employersearchInData: any;
  /* pagination Info */
  barCode: string;
  pageSize = 5;
  pageNumber = 1;
  pdfsrc: string = '';
  noticeTitle: string;
  readonly dpiRatio = 96 / 72;
  private addInput(annotation: PDFAnnotationData, rect: number[] = null): void {

    console.log(annotation);
  }
  constructor(private router: Router, private eService: EmployerService, private domSanitizer: DomSanitizer) {

    this.IWResponsecolumnDefs = [{ headerName: 'Member DCN' },
    { headerName: 'Member Name' },
    { headerName: 'SSN' },
    { headerName: 'Docket' },
    { headerName: 'Case ID' },
    { headerName: 'IW Begin Date' },
    { headerName: 'Date of Last IW Notice' },
    { headerName: 'View Notice' }
    ];

    this.EmpVerificationcolumnDefs = [{ headerName: 'Member DCN' },
    { headerName: 'Member Name' },
    { headerName: 'SSN' },
    { headerName: 'Docket' },
    { headerName: 'Case ID' },
    { headerName: 'View Notice' }
    ];

  }

  getNotice(barcode): any {
    this.pdfsrc = '';
    this.eService.getNoticeRecords(barcode)
      .subscribe(data => {
        const blob = new Blob([data], { type: 'application/pdf' });
        this.pdfsrc = window.URL.createObjectURL(blob);
        //    this.pageurl = this.domSanitizer.bypassSecurityTrustResourceUrl('this.pdfsrc');

      });
  }

  onEmployerSearch() {
    this.getEmployerRecords();

  }

  OnEmployerSearch() {
    console.log(this.employersearchInData);
    this.getEmployerRecords();
  }
  ngOnInit() {
    this.minDate = new Date();
    this.maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() - 3, 1);
    this.employersearchInData = new UpdateEmployerSearchInData();
    this.employersearchInData.othp_id = localStorage.getItem('currentEmployerID');
    this.getEmployerRecords();
  }

  getEmployerRecords(): any {
    this.employersearchRecordData = [];
    this.eService.getServiceEmployerRecords(this.employersearchInData)
      .subscribe((data: UpdateEmployerRecordData[]) => {
        this.employersearchRecordData = data['result'];

      });
  }



  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  OnViewNotice(index, clicked: boolean) {
    // if (index == 0 || index == 2) {
    //   this.noticeTitle = 'CS070 - EMPLOYMENT VERIFICATION LETTER';
    //   this.barCode = '42141443'

    // }
    // if (index == 1 || index == 4 || index == 6) {
    //   this.noticeTitle = 'CS006 - INCOME WITHHOLDING FOR SUPPORT';
    //   this.barCode = '43060265'

    // }
    // if (index == 3 || index == 5) {
    //   this.noticeTitle = 'CS025 - NOTICE TO EMPLOYER OF NON-COMPLIANCE WITH INCOME EXECUTION ORDER';
    //   this.barCode = '55098304'

    // }
    this.noticeTitle = 'CS006 - INCOME WITHHOLDING FOR SUPPORT';
    this.barCode = '43060265'
    this.getNotice(this.barCode);
    this.buttonWasClicked = clicked;
  }

  OnBackToForm() {
    this.buttonWasClicked = false;;

  }

  OnClickPrint() {
    window.open(this.pdfsrc).print();

  }

  setClickedRow(index) {
    this.selectedRow = index;

  }
  setDoubleClickedRow(index) {
    this.router.navigate(['/pages/memberdetails']);
  }

  closeModal(modal) {
    modal.close();
    console.log(modal);
  }

  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;
  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }
  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;

    for (let i = 1; i <= pdfData.numPages; i++) {
      let currentPage = null;
      pdfData.getPage(i).then(p => {
        currentPage = p;
        return p.getAnnotations();
      }).then(ann => {
        const annotations = (<any>ann) as PDFAnnotationData[];
        annotations
          .filter(a => a.subtype === 'Widget')
          .forEach(a => {
            const fieldRect = currentPage.getViewport(this.dpiRatio)
              .convertToViewportRectangle(a.rect);
            this.addInput(a, fieldRect);
          });
      });
    }
  }
}
