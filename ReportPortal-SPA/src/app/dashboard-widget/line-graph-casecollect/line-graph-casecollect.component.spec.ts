import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCaseCollectGraphComponent } from './line-graph-casecollect.component';

describe('LineCaseCollectGraphComponent', () => {
  let component: LineCaseCollectGraphComponent;
  let fixture: ComponentFixture<LineCaseCollectGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineCaseCollectGraphComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineCaseCollectGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
