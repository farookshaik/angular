import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphSupportComponent } from './bar-graph_support.component';

describe('BarGraphSupportComponent', () => {
  let component: BarGraphSupportComponent;
  let fixture: ComponentFixture<BarGraphSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarGraphSupportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
