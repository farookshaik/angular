import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TrendGraphCollectionsComponent } from './trend-graph-collections.component';


describe('TrendGraphCollectionsComponent', () => {
  let component: TrendGraphCollectionsComponent;
  let fixture: ComponentFixture<TrendGraphCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrendGraphCollectionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendGraphCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
