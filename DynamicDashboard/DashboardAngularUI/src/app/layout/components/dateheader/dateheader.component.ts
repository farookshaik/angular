import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dateheader',
  templateUrl: './dateheader.component.html',
  styleUrls: ['./dateheader.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DateheaderComponent implements OnInit {
  @Output() onFDateChange = new EventEmitter();
  @Output() onTDateChange = new EventEmitter();

  bsFromValue = new Date();
  bsToValue = new Date();
  minDate: Date;
  maxDate: Date;
  selectedDate: Date;
  constructor() {

  }

  ngOnInit() {
    this.minDate = new Date();
    this.maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() - 3, 1);
    this.bsFromValue = this.maxDate;
    this.bsToValue.setDate(this.minDate.getDate());
  }
  public onFromDateChange(value: Date) {
    // this.selectedDate = new Date($('#todate').val().toString());
    this.onFDateChange.emit(value);
    this.bsFromValue = value;
    // localStorage.setItem('fromDate', value.toLocaleDateString());
    // localStorage.setItem('toDate', this.selectedDate.toLocaleDateString());

  }

  // public onToDateChange(value: Date) {
  //   // this.selectedDate = new Date($('#fromdate').val().toString());
  //   this.onTDateChange.emit(value);
  //   // localStorage.setItem('fromDate', this.selectedDate.toLocaleDateString());
  //   // localStorage.setItem('toDate', this.selectedDate.toLocaleDateString());
  // }
}
