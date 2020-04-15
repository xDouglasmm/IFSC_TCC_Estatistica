import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomaDoisComponent } from './axioma-dois.component';

describe('AxiomaDoisComponent', () => {
  let component: AxiomaDoisComponent;
  let fixture: ComponentFixture<AxiomaDoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomaDoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomaDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
