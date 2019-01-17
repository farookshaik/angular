import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MemberDetailsRecordData } from './member-record-data.model';
import { MemberSearchInData } from './member-search-in-data.model';
import { EmployerService } from '../../shared/services/employer.service';
import { PDFAnnotationData } from 'pdfjs-dist';
import { NoticeConfig } from '../notices/noticeconfig';



@Component({
  selector: 'app-memberdetails',
  templateUrl: './memberdetails.component.html',
  styleUrls: ['./memberdetails.component.scss'],

  providers: [EmployerService]
})

export class MemberdetailsComponent implements OnInit {
  @ViewChild('pdfViewer') public pdfViewer;
  selectedRow: Number;
  public columnDefs: any[];
  public membersearchRecordData: any;
  public membersearchInData: any;
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  verifybuttonWasClicked: boolean = false;
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
  pdfsrc: string = '';
  noticeTitle: string;
  barCode: string;
  showCS006Template: boolean;
  showCS070Template: boolean;
  constructor(private eService: EmployerService) {

    this.columnDefs =
      [
        { headerName: 'Case ID' },
        { headerName: 'Issue Date' },
        { headerName: 'End Date' },
        { headerName: 'Total IWNS Amount' },
        // { headerName: 'Status' },
        { headerName: 'View Notice' },
        { headerName: 'View Employment' },
        { headerName: 'Employment Termination' }

      ];
  }
  public isPdfLoaded = false;
  OnViewCS070Notice(index, clicked: boolean) {
    this.noticeTitle = 'CS070 - EMPLOYMENT VERIFICATION LETTER';
    this.barCode = '42141443';
    this.getNotice(this.barCode);
    this.verifybuttonWasClicked = clicked;
    this.showCS006Template = false;
    this.showCS070Template = true;


  }
  OnViewCS006Notice(index, clicked: boolean) {
    this.noticeTitle = 'CS006 - INCOME WITHHOLDING FOR SUPPORT';
    this.barCode = '43060265';
    this.getNotice(this.barCode);
    this.verifybuttonWasClicked = clicked;
    this.showCS006Template = true;
    this.showCS070Template = false;
  }


  getNotice(barCode: string): any {
    this.pdfsrc = '';
    this.eService.getNoticeRecords(barCode)
      .subscribe(data => {
        const blob = new Blob([data], { type: 'application/pdf' });
        this.pdfsrc = window.URL.createObjectURL(blob);
        // this.pdfViewer.pdfsrc = blob;
        // this.pdfViewer.refresh();

      });
  }
  OnBackToForm() {
    this.verifybuttonWasClicked = false;
    this.page = 1;
  }

  OnClickPrint() {
    window.open(this.pdfsrc).print();

  }
  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;
  readonly dpiRatio = 96 / 72;
  nextPage() {
    this.page++;
  }
  private addInput(annotation: PDFAnnotationData, rect: number[] = null): void {

    console.log(annotation);
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
  onMemberSearch() {
    this.getMemberRecords();

  }
  setClickedMemberRow(index) {
    this.selectedRow = index;

  }
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  ngOnInit() {


    this.membersearchInData = new MemberSearchInData();
    this.membersearchInData.id_othp_employer = localStorage.getItem('currentEmployerID');
    this.getMemberRecords();
    this.page = 1;
  }

  getMemberRecords(): any {
    this.membersearchRecordData = [];
    this.eService.getServiceMemberRecords(this.membersearchInData)
      .subscribe((data: MemberDetailsRecordData[]) => {
        this.membersearchRecordData = data['result'];

      });
  }

}
