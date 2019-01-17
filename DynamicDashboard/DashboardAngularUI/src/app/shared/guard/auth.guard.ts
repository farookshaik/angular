import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    status: string;
    constructor(private router: Router) { }

    canActivate() {
        status = localStorage.getItem('userID');
        if (localStorage.getItem('isLoggedin') && status != 'undefined') {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
