import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormControl, Validators } from '@angular/forms';
import { Issue } from '../../models/issue';


@Component({
  selector: 'app-edit.dialog',
  templateUrl: '../../dialogs/edit/edit.dialog.html',
  styleUrls: ['../../dialogs/edit/edit.dialog.css']
})
export class EditDialogComponent {
  selectControl = new FormControl('', [Validators.required]);
  public statussData = [
    { "name": 'Open', "value": 'O' },
    { "name": 'Completed', "value": 'C' },
    { "name": 'Work in Progress', "value": 'W' }

  ];
  minCreatedDate: Date; maxCreatedDate: Date;

  minDueDate: Date; maxDueDate: Date;
  createConvert: Date;
  dueConvert: Date;
  minNum = 1;
  maxNum = 40;
  formControl = new FormControl('', [
    Validators.required
  ]);
  selectedValue: string;
  num: FormControl;


  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Issue, public dataService: DataService) {
    this.num = new FormControl();
    this.minCreatedDate = new Date(2017, 0, 1);
    this.maxCreatedDate = new Date(2027, 0, 1);

    this.minDueDate = new Date(2017, 0, 1);
    this.maxDueDate = new Date(2027, 0, 1);
    this.createConvert = new Date(data.dtcreate);
    this.createConvert.setDate(this.createConvert.getDate() + 1);

    this.dueConvert = new Date(data.dtdue);
    this.dueConvert.setDate(this.dueConvert.getDate() + 1);
    this.selectedValue = data.cdstatus;

  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : '';

  }
  getErrors(ctrl) {
    return Object.keys(ctrl.errors);
  }
  onChangeStatus(value) {
    this.data.cdstatus = value;
    console.log(value);

  }
  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getMaxErrorMessage(errorMsg) {
    if (errorMsg === 'required') {
      return 'Required field';
    } else {
      return 'Cannot be more than 40hrs';
    }

  }

  OnSelectCreateAt($event) {
    this.minDueDate = new Date($event.getFullYear(), $event.getMonth(), $event.getDate());
  }

  OnSelectDueAt($event) {
    this.maxCreatedDate = new Date($event.getFullYear(), $event.getMonth(), $event.getDate());
  }
  public confirmUpdate(): void {
    this.dataService.updateIssue(this.data);
  }

}
