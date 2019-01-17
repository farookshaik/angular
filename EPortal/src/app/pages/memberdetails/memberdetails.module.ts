import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './memberdetails.routing';
import { SharedModule } from '../../shared/shared.module';
import { MemberdetailsComponent } from './memberdetails.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { CS006TemplateComponent } from '../templates/CS006.template/CS006.template.component';
import { CS070TemplateComponent } from '../templates/CS070.template/CS070.template.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    PdfViewerModule,
    PdfJsViewerModule,
    routing
  ],
  declarations: [MemberdetailsComponent, CS006TemplateComponent,CS070TemplateComponent]
})
export class MemberdetailsModule { }
