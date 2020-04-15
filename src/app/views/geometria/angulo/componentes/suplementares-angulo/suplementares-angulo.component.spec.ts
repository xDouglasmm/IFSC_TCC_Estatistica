import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplementaresAnguloComponent } from './suplementares-angulo.component';

describe('SuplementaresAnguloComponent', () => {
  let component: SuplementaresAnguloComponent;
  let fixture: ComponentFixture<SuplementaresAnguloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuplementaresAnguloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuplementaresAnguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
