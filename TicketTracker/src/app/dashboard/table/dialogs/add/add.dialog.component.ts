import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Issue } from '../../models/issue';

export interface IStatus {
  name: string;

}
@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../dialogs/add/add.dialog.html',
  styleUrls: ['../../dialogs/add/add.dialog.css']
})

export class AddDialogComponent {

  isValidFormSubmitted = false;
  minNum = 1;
  maxNum = 40;

  formControl = new FormControl('', [
    Validators.required
  ]);
  minCreatedDate: Date; maxCreatedDate: Date;

  minDueDate: Date; maxDueDate: Date;
  num: FormControl;



  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Issue,
    public dataService: DataService) {
    this.minCreatedDate = new Date(2017, 0, 1);
    this.maxCreatedDate = new Date(2027, 0, 1);

    this.minDueDate = new Date(2017, 0, 1);
    this.maxDueDate = new Date(2027, 0, 1);
    this.num = new FormControl();
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : '';

  }
  getErrors(ctrl) {
    return Object.keys(ctrl.errors);
  }

  getMaxErrorMessage(errorMsg) {
    if (errorMsg === 'required') {
      return 'Required field';
    } else {
      return 'Cannot be more than 40hrs';
    }

  }
  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;

  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.addIssue(this.data);
  }

  OnSelectCreateAt($event) {
    console.log($event);
    this.minDueDate = new Date($event.getFullYear(), $event.getMonth(), $event.getDate());


  }

  OnSelectDueAt($event) {
    console.log($event);
    this.maxCreatedDate = new Date($event.getFullYear(), $event.getMonth(), $event.getDate());


  }


}
