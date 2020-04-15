import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsFusoEsfericoComponent } from './es-fuso-esferico.component';

describe('EsFusoEsfericoComponent', () => {
  let component: EsFusoEsfericoComponent;
  let fixture: ComponentFixture<EsFusoEsfericoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsFusoEsfericoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsFusoEsfericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
