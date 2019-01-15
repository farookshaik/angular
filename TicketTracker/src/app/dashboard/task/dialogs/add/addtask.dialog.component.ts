import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { DataTaskService } from '../../services/datatask.service';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { TaskIssue } from '../../models/taskissue';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-addtask.dialog',
  templateUrl: '../../dialogs/add/addtask.dialog.html',
  styleUrls: ['../../dialogs/add/addtask.dialog.css']
})

export class AddTaskDialogComponent {
  selectControl = new FormControl('', [Validators.required]);
  public TicketTypeData = [
    { "name": 'CR', "value": 'CR' },
    { "name": 'Bug', "value": 'Bug' },
    { "name": 'ReWork', "value": 'ReWork' }

  ];
  public AssigneeData = [
    { "name": 'Saki', "value": 'Saki' },
    { "name": 'Jozef', "value": 'Jozef' },
    { "name": 'Gaurav', "value": 'Gaurav' }

  ];

  selectedTicketTypeValue: string;
  selectedAssigneeValue: string;
  isValidFormSubmitted = false;
  minNum = 1;
  maxNum = 40;

  formControl = new FormControl('', [
    Validators.required
  ]);
  minCreatedDate: Date; maxCreatedDate: Date;

  minDueDate: Date; maxDueDate: Date;
  num: FormControl;



  constructor(public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskIssue,
    public dataService: DataTaskService) {
    this.minCreatedDate = new Date(2017, 0, 1);
    this.maxCreatedDate = new Date(2027, 0, 1);

    this.minDueDate = new Date(2017, 0, 1);
    this.maxDueDate = new Date(2027, 0, 1);
    this.num = new FormControl();
    // this.selectedTicketTypeValue = 'Bug';
    // this.selectedAssigneeValue = 'Saki';
    // this.data.tickettype = this.selectedTicketTypeValue;
    // this.data.assignee = this.selectedAssigneeValue;

  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : '';

  }
  getErrors(ctrl) {
    return Object.keys(ctrl.errors);
  }

  onChangeStatus(value) {
    this.data.tickettype = value;


  }

  onAssigneeChangeStatus(value) {
    this.data.assignee = value;

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
    this.minDueDate = new Date($event.getFullYear(), $event.getMonth(), $event.getDate());
  }

  OnSelectDueAt($event) {
    this.maxCreatedDate = new Date($event.getFullYear(), $event.getMonth(), $event.getDate());
  }


}
