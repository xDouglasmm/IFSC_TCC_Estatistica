import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomaTresComponent } from './axioma-tres.component';

describe('AxiomaTresComponent', () => {
  let component: AxiomaTresComponent;
  let fixture: ComponentFixture<AxiomaTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomaTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
