import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BarChartDuePaidComponent } from './bar-chart-duepaid.component';


describe('BarChartDuePaidComponent', () => {
  let component: BarChartDuePaidComponent;
  let fixture: ComponentFixture<BarChartDuePaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartDuePaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartDuePaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
