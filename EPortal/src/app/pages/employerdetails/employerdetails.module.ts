import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { EmployerDetailsComponent } from './employerdetails.component';
import { routing } from './employerdetails.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [
        NgxPaginationModule,
        CommonModule,
        SharedModule,
        FormsModule, 
        HttpClientModule,
        routing
        
    ],
    declarations: [
        EmployerDetailsComponent
    ]
})
export class EmployerDetailsModule { }
