import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementaresAnguloComponent } from './complementares-angulo.component';

describe('ComplementaresAnguloComponent', () => {
  let component: ComplementaresAnguloComponent;
  let fixture: ComponentFixture<ComplementaresAnguloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplementaresAnguloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementaresAnguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
