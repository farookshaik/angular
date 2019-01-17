import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateheaderComponent } from './dateheader.component';

describe('DateheaderComponent', () => {
  let component: DateheaderComponent;
  let fixture: ComponentFixture<DateheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
