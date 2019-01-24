import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TrendOverAllGraphComponent } from './trend-overall.component';


describe('TrendOverAllGraphComponent', () => {
  let component: TrendOverAllGraphComponent;
  let fixture: ComponentFixture<TrendOverAllGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrendOverAllGraphComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendOverAllGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
