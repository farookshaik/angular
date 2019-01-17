import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './login/auth.service';
import { EmployerService } from '../shared/services/employer.service';
import { OnlyNumber } from './common/onlynumber.directive';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        routing

    ],
    declarations: [
        PagesComponent,
        LoginComponent, OnlyNumber
    ],
    providers: [AuthenticationService, EmployerService]
})
export class PagesModule { }
