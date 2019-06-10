import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatesCardComponent } from './associates-card.component';

describe('AssociatesCardComponent', () => {
  let component: AssociatesCardComponent;
  let fixture: ComponentFixture<AssociatesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
