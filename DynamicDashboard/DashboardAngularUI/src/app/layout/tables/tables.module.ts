import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { DashboardService } from '../../services/dashboard.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
    // tslint:disable-next-line:max-line-length
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule, HttpClientModule, NgxDatatableModule, NgxPaginationModule, FormsModule],
    declarations: [TablesComponent],
    providers: [DashboardService],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TablesModule { }
