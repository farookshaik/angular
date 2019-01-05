import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  Name: string;
  constructor(public router: Router) {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.Name = currentUser.NameFirst + ' ' + currentUser.NameLast;



  }

  ngOnInit() {
  }

  menuClick() {
    // document.getElementById('main-panel').style.marginRight = '260px';
  }

  onLogOut(event: any) {
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/']);

  }
}
