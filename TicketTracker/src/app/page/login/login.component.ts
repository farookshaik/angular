import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserDetailOutData } from 'app/shared/models/usermodels/user-detail-out-data.model';
import { AuthenticationInData } from 'app/shared/models/authentication-in-data.model';
import { AuthenticationService } from 'app/shared/guard/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AlertDialogComponent } from 'app/dashboard/table/dialogs/alert/alert.dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService, AlertDialogComponent]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  @ViewChild('username') redel: ElementRef;
  hide = true;

  public authenticationInData: AuthenticationInData;
  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, public router: Router, private authenticator: AuthenticationService, private route: ActivatedRoute, private alertDialog: AlertDialogComponent) {
    //  this.redel = '';

  }

  ngOnInit() {

    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
        // Validators.minLength(2)
      ]],
      password: ['', [
        Validators.required,
        //  Validators.minLength(2)
      ]],
    });

    this.authenticationInData = new AuthenticationInData();
  }
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  OnChangePasswordTextBox() {
    this.onLogin();
  }

  onLogin() {
    this.authenticator.Authenticate(this.authenticationInData).subscribe(result => {
      if ((result as UserDetailOutData).Ticket) {

        sessionStorage.setItem('currentUser', JSON.stringify(result));
        this.router.navigate(['/dashboard']);
      } else {
        this.alertDialog.onShowErrorMessage('Sorry.. invalid Credential');
        // if (result.StatusList.length === 1 && result.StatusList[0].Code === "S") {

        //   this.alertDialog.onShowErrorMessage('Sorry.. invalid Credential');
        // } else {

        //   this.alertDialog.onShowErrorMessage(result.StatusList[0].Description);
        // }


        // this.router.navigate(['/dashboard/profile']);

      }
    });
  }
}
