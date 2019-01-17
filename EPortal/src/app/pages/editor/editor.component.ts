import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../../shared/services/employer.service';
import { NoticeInData } from './notice-in-data.model';

import { PDFAnnotationData } from 'pdfjs-dist';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [EmployerService]
})
export class EditorComponent implements OnInit {
  public items: Array<any> = [{ 'text': 'CS070', 'id': '42141443' }, { 'text': 'CS006', 'id': '43060265' }, { 'text': 'CS025', 'id': '55098304' }];
  public value: any = {};
  public _disabledV: string = '0';
  public disabled: boolean = false;
  public noticeInData: NoticeInData;
  page: number = 1;
  pdfsrc: string = '';
  totalPages: number;

  isLoaded: boolean = false;
  readonly dpiRatio = 96 / 72;
  private addInput(annotation: PDFAnnotationData, rect: number[] = null): void {

    console.log(annotation);
  }
  public selected(value: any): void {
    console.log('Selected value is: ', value);
    if (value.id.length > 0) {
      this.getNotice(value.id);
    }
  }


  public refreshValue(value: any): void {
    this.value = value;
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

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

  onNoticeSearch() {
    //   this.getNotice();

  }
  onFileSelected() {
    let img: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfsrc = e.target.result;

      }
      reader.readAsArrayBuffer(img.files[0]);

    }

  }
  constructor(private eService: EmployerService) { }

  ngOnInit() {
    // this.pdfsrc = this.getPdf();
    this.noticeInData = new NoticeInData();
    //  this.getNotice();
  }
  getNotice(barcode): any {
    this.eService.getNoticeRecords(barcode)
      .subscribe(data => {
        const blob = new Blob([data], { type: 'application/pdf' });
        this.pdfsrc = window.URL.createObjectURL(blob);
      })
  }

  getPdf() {
    return '/assets/demo.pdf';

  }


}