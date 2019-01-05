
import { Component } from '@angular/core';
declare const swal: any;

@Component({
  selector: 'app-alert.dialog',
  templateUrl: '../../dialogs/alert/alert.dialog.html',
  styleUrls: ['../../dialogs/alert/alert.dialog.css']
})

export class AlertDialogComponent {

  constructor() { }



  onNoClick(): void {

  }

  onShowMessage(alertmessage: string) {
    swal({
      type: 'success',
      title: alertmessage,
      confirmButtonClass: 'btn btn-info',
      timer: 10000
    }).catch(swal.noop);

  }

  onShowErrorMessage(alertmessage: string) {
    swal({
      // position: 'top-end',
      type: 'error',
      title: alertmessage,
      confirmButtonClass: 'btn btn-info',
      timer: 10000,
      showConfirmButton: false
    }).catch(swal.noop);

  }

}

