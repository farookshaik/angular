import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './auth.service';
import { first } from 'rxjs/operators';
import { map } from 'rxjs/operator/map';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      othpID: ['101731779', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  btnClick() {

    //    this.router.navigate(['/pages/profile']);

  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.login(this.f.othpID.value, this.f.password.value)



  }

}
