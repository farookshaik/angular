import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BarGraphCaseLoadComponent } from './bar-graph-caseload.component';


describe('BarGraphCaseLoadComponent', () => {
  let component: BarGraphCaseLoadComponent;
  let fixture: ComponentFixture<BarGraphCaseLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarGraphCaseLoadComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphCaseLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
