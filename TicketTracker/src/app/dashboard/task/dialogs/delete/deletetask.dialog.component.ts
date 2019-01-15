import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {DataTaskService} from '../../services/datatask.service';
import { TaskIssue } from '../../models/taskissue';


@Component({
  selector: 'app-deletetask.dialog',
  templateUrl: '../../dialogs/delete/deletetask.dialog.html',
  styleUrls: ['../../dialogs/delete/deletetask.dialog.css']
})
export class DeleteTaskDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteTaskDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: TaskIssue, public dataService: DataTaskService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

 public confirmDelete(): void {
    this.dataService.deleteIssue(this.data);
  }
}
