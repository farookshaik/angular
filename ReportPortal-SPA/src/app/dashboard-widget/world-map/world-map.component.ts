import { Component, OnInit, Input } from '@angular/core';

import am4geodata_region_usa_njLow from "@amcharts/amcharts4-geodata/region/usa/njLow";
declare const AmCharts;
@Component({
  selector: 'cdk-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {

  @Input() tableData = [];
  constructor() { }

  ngOnInit() {
    // var map = AmCharts.makeChart("chartdiv", {

    //   "type": "map",
    //   "theme": "light",
    //   "projection": "miller",

    //   "dataProvider": {
    //     "map": "worldLow",
    //     "getAreasFromMap": true
    //   },
    //   "areasSettings": {
    //     "autoZoom": true,
    //     "selectedColor": "#CC0000"
    //   },
    //   "smallMap": {}
    // });
    // map.geodata = am4geodata_region_usa_njLow;

  }
}
