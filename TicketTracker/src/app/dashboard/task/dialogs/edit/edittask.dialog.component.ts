import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { DataTaskService } from '../../services/datatask.service';
import { FormControl, Validators } from '@angular/forms';
import { TaskIssue } from '../../models/taskissue';


@Component({
  selector: 'app-edittask.dialog',
  templateUrl: '../../dialogs/edit/edittask.dialog.html',
  styleUrls: ['../../dialogs/edit/edittask.dialog.css']
})
export class EditTaskDialogComponent {
  selectControl = new FormControl('', [Validators.required]);
  public statusData = [
    { "name": 'Open', "value": 'O' },
    { "name": 'Completed', "value": 'C' },
    { "name": 'Work in Progress', "value": 'W' }

  ];
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
  selectedTicketTypeValue: string;
  selectedAssigneeValue: string;


  constructor(public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskIssue, public dataService: DataTaskService) {
    this.num = new FormControl();
    this.minCreatedDate = new Date(2017, 0, 1);
    this.maxCreatedDate = new Date(2027, 0, 1);

    this.minDueDate = new Date(2017, 0, 1);
    this.maxDueDate = new Date(2027, 0, 1);
    this.createConvert = new Date(data.dtassigned);
    this.createConvert.setDate(this.createConvert.getDate() + 1);

    this.dueConvert = new Date(data.dtrecived);
    this.dueConvert.setDate(this.dueConvert.getDate() + 1);

    this.selectedValue = data.cdstatus;
    this.selectedTicketTypeValue = data.tickettype;
    this.selectedAssigneeValue = data.assignee;
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : '';

  }
  getErrors(ctrl) {
    return Object.keys(ctrl.errors);
  }
  onChangeTicketStatus(value: string) {
    this.data.cdstatus = value;
  }

  onAssigneeChangeStatus(value: string) {
    this.data.assignee = value;
  }

  onChangeTicketType(value: string) {
    this.data.tickettype = value;
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
    this.data['dtassigned'] = this.createConvert;
    this.data['dtrecived'] = this.dueConvert;
    // this.data['tickettype'] = this.selectedTicketTypeValue;
    // this.data['assignee'] = this.selectedAssigneeValue;
    // this.data['cdstatus'] = this.selectedValue;
    this.dataService.updateIssue(this.data);
  }

}
