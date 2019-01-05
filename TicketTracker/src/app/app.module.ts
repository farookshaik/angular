import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatRadioModule, MatIconModule, MatInputModule, MatToolbarModule, MatMenuModule, MatCheckboxModule, MatDialogModule, MatSelectModule, MatPaginatorModule, MatDatepickerModule, MatNativeDateModule, MatTableModule, MatSortModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import 'hammerjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { LoginComponent } from './page/login/login.component';
import { RootComponent } from './dashboard/root/root.component';
import { RegisterComponent } from './page/register/register.component';
import { LockComponent } from './page/lock/lock.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent } from './dashboard/component/panels/panels.component';

import { SettingsService } from './services/settings.service';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';
import { AuthGuard } from './shared/guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpRequestInterceptor } from './shared/guard/httprequestinterceptor';
import { AddDialogComponent } from './dashboard/table/dialogs/add/add.dialog.component';
import { EditDialogComponent } from './dashboard/table/dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from './dashboard/table/dialogs/delete/delete.dialog.component';
import { DataService } from './dashboard/table/services/data.service';
import { AlertDialogComponent } from './dashboard/table/dialogs/alert/alert.dialog.component';
import { NumberOnlyDirective } from './shared/util/number.directive';
import { StringOnlyDirective } from './shared/util/string.directive';
import { CustomMinDirective } from './shared/util/custom-min-validator.directive';
import { CustomMaxDirective } from './shared/util/custom-max-validator.directive';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    TableComponent,
    NotificationComponent,
    MsgIconBtnComponent,
    SweetAlertComponent,
    LoginComponent,
    RootComponent,
    RegisterComponent,
    LockComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    PriceTableComponent,
    PanelsComponent,
    WizardComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    AlertDialogComponent,
    NumberOnlyDirective,
    StringOnlyDirective,
    CustomMinDirective,
    CustomMaxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule
  ],
  entryComponents: [
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    AlertDialogComponent
  ],
  providers: [AlertDialogComponent, DataService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true
  }, SettingsService],

  bootstrap: [AppComponent],

})
export class AppModule { }
