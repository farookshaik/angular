import { Routes, RouterModule } from '@angular/router';
import { MemberdetailsComponent } from './memberdetails.component';

const childRoutes: Routes = [
    {
        path: '',
        component: MemberdetailsComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);


