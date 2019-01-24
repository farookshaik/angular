import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-round-progressbar',
  templateUrl: './round-progressbar.component.html',
  styleUrls: ['./round-progressbar.component.scss']
})
export class RoundProgressbarComponent implements OnInit {


  @Input() current;
  @Input() max;
  @Input() background;
  @Input() color;
  @Input() boxcolor;
  @Input() title;



  public radius = 50;
  public stroke = "20";
  public semicircle = false;
  public rounded = true;
  public clockwise = false;
  public responsive = false;
  public duration = "800";
  public animation = 'easeInOutQuart';
  @Input() dashData: any;
  constructor() { }

  ngOnInit() {
  }
  getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '50%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '65%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 5 + 'px'
    };
  }

}
