
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent } from './dashboard/component/panels/panels.component';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';

import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
import { LockComponent } from './page/lock/lock.component';
import { RegisterComponent } from './page/register/register.component';
import { AuthGuard } from './shared/guard';
import { NgModule } from '@angular/core';
import { TaskComponent } from './dashboard/task/task.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'lock', component: LockComponent },
  // { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard', component: RootComponent, children: [
      { path: '', component: HomeComponent },
      // { path: 'profile', component: ProfileComponent },
      { path: 'table', component: TableComponent },
      { path: 'task', component: TaskComponent },
      // { path: 'notification', component: NotificationComponent },
      // { path: 'alert', component: SweetAlertComponent },
      // { path: 'settings', component: SettingsComponent },
      // { path: 'components/price-table', component: PriceTableComponent },
      // { path: 'components/panels', component: PanelsComponent },
      // { path: 'components/wizard', component: WizardComponent }
    ]
  }
];

export const routing = RouterModule.forRoot(routes);



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
