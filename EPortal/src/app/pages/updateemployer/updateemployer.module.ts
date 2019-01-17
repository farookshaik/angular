import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './updateemployer.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployerComponent } from './updateemployer.component';
import { ModalModule } from 'ngx-modal';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
    imports: [
        NgxPaginationModule,
        CommonModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        ModalModule,
        PdfViewerModule,
        routing,
        BsDatepickerModule.forRoot(),
        DatepickerModule.forRoot()

    ],
    declarations: [
        UpdateEmployerComponent
    ]
})
export class UpdateEmployerModule { }
