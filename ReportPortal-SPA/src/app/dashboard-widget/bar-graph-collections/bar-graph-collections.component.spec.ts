import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BarGraphCollectionsComponent } from './bar-graph-collections.component';


describe('BarGraphCollectionsComponent', () => {
  let component: BarGraphCollectionsComponent;
  let fixture: ComponentFixture<BarGraphCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarGraphCollectionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
