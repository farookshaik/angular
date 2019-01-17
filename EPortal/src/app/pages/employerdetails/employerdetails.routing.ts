import { Routes, RouterModule } from '@angular/router';
import { EmployerDetailsComponent } from './employerdetails.component';

const childRoutes: Routes = [
    {
        path: '',
        component: EmployerDetailsComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);


