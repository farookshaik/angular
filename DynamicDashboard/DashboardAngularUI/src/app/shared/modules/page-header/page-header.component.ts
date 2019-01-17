import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { _getComponentHostLElementNode } from '@angular/core/src/render3/instructions';
import { ChangeDetectorRef } from '@angular/core';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit, AfterViewInit {
    @Output() onFDateChange = new EventEmitter();
    @Output() onTDateChange = new EventEmitter();
    @Output() onRangeDateChange = new EventEmitter();
    @Input() heading: string;
    @Input() icon: string;
    private bsValue: any;
    bsFromValue = new Date();
    bsToValue = new Date();
    minDate: Date;
    maxDate: Date;
    dateRangeFromDate: Date;
    dateRangeToDate: Date;
    selectedFromDate: Date;
    selectedToDate: Date;
    bsRangeValue: Date[];
    constructor() {

    }

    onDatepickerShown() {
        this.dateRangeToDate = new Date();
        const datepicker: HTMLElement = document.querySelector('bs-daterangepicker-container');
        datepicker.addEventListener('click', (e: Event) => {
            if ((e.target as HTMLElement).hasAttribute('bsdatepickerdaydecorator')) {
                const clickedDayNum: string = (e.target as HTMLElement).innerText;
                const monthYearButtons: NodeListOf<HTMLButtonElement> = datepicker
                    .querySelector('.bs-datepicker-head')
                    .querySelectorAll('.current');
                const clickedDate = new Date(`${monthYearButtons[0].innerText} ${clickedDayNum}, ${monthYearButtons[1].innerText}`);
                // define this.minDate & this.maxDate from clickedDate
                //  console.log(clickedDate);
                console.log(clickedDate.getMonth());

                if (this.dateRangeToDate.getMonth() <= clickedDate.getMonth() + 3) {
                    return false;
                } else {
                    this.dateRangeToDate = new Date(clickedDate.getFullYear(), clickedDate.getMonth() + 3, 1);
                }


            }
        });
    }

    public onFromDateChange(value: Date) {
        // if (localStorage.getItem('userID') !== null) {
        //     this.selectedToDate = new Date(localStorage.getItem('toDate'));
        //     this.maxDate = value;
        //     this.setStorage(value.toLocaleDateString(), this.selectedToDate.toLocaleDateString());
        //     localStorage.setItem('selectedfromDate', value.toLocaleDateString());
        //     this.onFDateChange.emit({ fromdate: value, todate: this.selectedToDate.toLocaleDateString() });
        // }
    }

    public onToDateChange(value: Date) {
        // if (localStorage.getItem('userID') !== null) {
        //     this.selectedFromDate = new Date(localStorage.getItem('fromDate'));
        //     //  this.minDate = value;
        //     this.setStorage(this.selectedFromDate.toLocaleDateString(), value.toLocaleDateString());
        //     localStorage.setItem('selectedtoDate', value.toLocaleDateString());
        //     this.onTDateChange.emit({ fromdate: this.selectedFromDate.toLocaleDateString(), todate: value });
        // }
    }

    public onInputChanged(event: any) {
        this.setStorage(event[0].toLocaleDateString(), event[1].toLocaleDateString());
        this.onRangeDateChange.emit({ fromdate: event[0].toLocaleDateString(), todate: event[1].toLocaleDateString() });

    }


    ngOnInit() {

        // if (localStorage.getItem('userID') !== null) {
        //     this.minDate = new Date();
        //     this.maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() - 3, 1);
        //     if (localStorage.getItem('selectedfromDate') === null && localStorage.getItem('selectedtoDate') === null) {
        //         this.bsFromValue = this.maxDate;
        //         this.bsToValue.setDate(this.minDate.getDate());
        //         return false;
        //     }
        //     if (localStorage.getItem('selectedfromDate') === null) {
        //         this.bsFromValue = this.maxDate;
        //         this.bsToValue = new Date(localStorage.getItem('toDate'));
        //         return false;
        //     } if (localStorage.getItem('selectedtoDate') === null) {
        //         this.bsFromValue = new Date(localStorage.getItem('fromDate'));
        //         this.bsToValue.setDate(this.minDate.getDate());
        //         this.maxDate = this.bsFromValue;
        //         //  this.minDate = this.bsToValue;
        //         return false;
        //         // tslint:disable-next-line:max-line-length
        //     } if (localStorage.getItem('selectedfromDate') === localStorage.getItem('fromDate') && localStorage.getItem('selectedtoDate') === localStorage.getItem('toDate')) {
        //         this.bsFromValue = new Date(localStorage.getItem('fromDate'));
        //         this.bsToValue = new Date(localStorage.getItem('toDate'));
        //         this.maxDate = this.bsFromValue;
        //         //    this.minDate = this.bsToValue;
        //         return false;
        //     }
        // }
    }

    ngAfterViewInit() {
        // if (localStorage.getItem('userID') !== null) {
        //     this.setStorage(this.dateRangeFromDate.toLocaleDateString(), this.dateRangeToDate.toLocaleDateString());
        // }
        // tslint:disable-next-line:max-line-length
        if (localStorage.getItem('userID') !== null && localStorage.getItem('fromDate') == null && localStorage.getItem('toDate') == null) {
            this.dateRangeFromDate = new Date();
            this.dateRangeToDate = new Date();
            this.dateRangeFromDate = new Date(this.dateRangeToDate.getFullYear(), this.dateRangeToDate.getMonth() - 3, 1);
            this.bsRangeValue = [this.dateRangeFromDate, this.dateRangeToDate];
            this.setStorage(this.dateRangeFromDate.toLocaleDateString(), this.dateRangeToDate.toLocaleDateString());

        }
    }


    setStorage(fromDate: string, toDate: string): any {
        localStorage.setItem('fromDate', fromDate);
        localStorage.setItem('toDate', toDate);
    }
}
