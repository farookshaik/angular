import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-crm',
  templateUrl: './dashboard-crm.component.html',
  styleUrls: ['./dashboard-crm.component.scss']
})

export class DashboardCrmComponent implements OnInit {

  public dashCard = [
    { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 66, title: '2016', icon: 'local_grocery_store' },
    { colorDark: '#42A5F5', colorLight: '#64B5F6', number: 67.1, title: '2017', icon: 'new_releases' },
    { colorDark: '#26A69A', colorLight: '#4DB6AC', number: 68.1, title: '2018', icon: 'assignments' },
    { colorDark: '#66BB6A', colorLight: '#81C784', number: 69.1, title: '2019', icon: 'account_balance' }
  ];

  tableData = [
    { country: 'ATLANTIC COUNTY', sales: '001', percentage: '40%' },
    { country: 'BERGEN COUNTY', sales: '002', percentage: '30.33%' },
    { country: 'BURLINGTON COUNTY', sales: '003', percentage: '18.056%' },
    { country: 'CAMDEN COUNTY', sales: '004', percentage: '6%' },
    { country: 'CAPE MAY COUNTY', sales: '005', percentage: '4.50%' },
    { country: 'CUMBERLAND COUNTY', sales: '006', percentage: '2.50%' },
    { country: 'ESSEX COUNTY', sales: '007', percentage: '40%' },
    { country: 'GLOUCESTER COUNTY', sales: '008', percentage: '30.33%' },
    { country: 'HUDSON COUNTY', sales: '009', percentage: '18.056%' },
    { country: 'HUNTERDON COUNTY', sales: '010', percentage: '6%' },
    { country: 'MERCER COUNTY', sales: '011', percentage: '4.50%' },
    { country: 'MIDDLESEX COUNTY', sales: '012', percentage: '2.50%' },
    { country: 'MONMOUTH COUNTY', sales: '013', percentage: '40%' },
    { country: 'MORRIS COUNTY', sales: '014', percentage: '30.33%' },
    { country: 'OCEAN COUNTY', sales: '015', percentage: '18.056%' },
    { country: 'PASSAIC COUNTY', sales: '016', percentage: '6%' },
    { country: 'SALEM COUNTY', sales: '017', percentage: '4.50%' },
    { country: 'SOMERSET COUNTY', sales: '018', percentage: '2.50%' },
    { country: 'SUSSEX COUNTY', sales: '019', percentage: '18.056%' },
    { country: 'UNION COUNTY', sales: '020', percentage: '6%' },
    { country: 'WARREN COUNTY', sales: '021', percentage: '4.50%' },
    { country: 'CENTRAL COUNTY', sales: '000', percentage: '2.50%' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
