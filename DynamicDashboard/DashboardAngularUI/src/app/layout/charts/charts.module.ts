import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts/ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from '../../services/dashboard.service'; 

@NgModule({
    imports: [CommonModule, Ng2Charts, ChartsRoutingModule, PageHeaderModule, HttpClientModule],
    declarations: [ChartsComponent],
    providers: [DashboardService]
})
export class ChartsModule { }
