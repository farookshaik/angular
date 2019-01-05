import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName: string;
  lastName: string;
  userName: string;
  userID: string;
  eMail: string;
  width: number = 364;
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.firstName = currentUser.NameFirst;
    this.lastName = currentUser.NameLast;
    this.userName = currentUser.UserName;
    this.userID = currentUser.UserID;
    this.eMail = currentUser.EMail;

  }

}
