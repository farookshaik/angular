import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
declare var require: any;
const tableData: any = require('../../shared/data/forRowGrouping.json');

@Component({
  selector: 'app-tablecaseload',
  templateUrl: './tablecaseload.component.html',
  styleUrls: ['./tablecaseload.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class TableCaseLoadComponent implements OnInit {


  @ViewChild('myTable') table: any;
  loadingIndicator: boolean = true;
  funder = [];
  calculated = [];
  pending = [];
  groups = [];
  editing = {};
  rows = [];


  constructor() {
    this.rows = tableData;

  }

  ngOnInit() {

  }

  getGroupRowHeight(group, rowHeight) {
    let style = {};

    style = {
      height: (group.length * 40) + 'px',
      width: '100%'
    };

    return style;
  }



  toggleExpandGroup(group) {
    console.log('Toggled Expand Group!', group);
    this.table.groupHeader.toggleExpandGroup(group);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

}
