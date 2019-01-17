import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateEmployerComponent } from './updateemployer.component';


describe('CustomerComponent', () => {
  let component: UpdateEmployerComponent;
  let fixture: ComponentFixture<UpdateEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEmployerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
