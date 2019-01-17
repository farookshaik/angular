import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './editor.routing';
import { SharedModule } from '../../shared/shared.module';
import { EditorComponent } from './editor.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
// import { SelectModule } from 'ng2-select';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        PdfViewerModule, 
        // SelectModule,
        routing
    ],
    declarations: [
        EditorComponent
    ]
})
export class EditorModule { }
