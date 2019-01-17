import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, FormRoutingModule, PageHeaderModule, HttpClientModule],
    declarations: [FormComponent]
})
export class FormModule { }


