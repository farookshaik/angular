import { Routes, RouterModule } from '@angular/router'; 
import { UpdateEmployerComponent } from './updateemployer.component';

const childRoutes: Routes = [
    {
        path: '',
        component: UpdateEmployerComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);


