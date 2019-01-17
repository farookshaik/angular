import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BarGraphArrearsComponent } from './bar-graph-arrears.component';


describe('BarGraphArrearsComponent', () => {
  let component: BarGraphArrearsComponent;
  let fixture: ComponentFixture<BarGraphArrearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarGraphArrearsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphArrearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
